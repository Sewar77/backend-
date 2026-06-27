//crud
//create-read-update-delete

import Category from "../model/category.Model.js";

export const createCategory = async (req, res) => {
    try {
        const { name, description, image } = req.body;
        console.log(req.body);

        //validation
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }
        //create
        const category = await Category.create({ name, description, image });
        //response that created done
        return res
            .status(201)
            .json({ message: "category created done!", category });
    } catch (error) {
        //in catch, its always internal server error
        console.error(error); //for debugging
        return res.status(500).json({ message: "internal server error" });
    }
};

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        if (categories.length === 0) {
            return res
                .status(200)
                .json({ message: "no categories yet", categories: [] });
        }
        return res.status(200).json({ message: "categoried found!", categories });
    } catch (error) {
        console.error(error); //for debugging
        return res.status(500).json({ message: "internal server error" });
    }
};
//get cat by id
export const getCategoryById = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) {
            return res.status(400).json({ message: "no item selected" });
        }
        const category = await Category.findById(id)
        if (!category) {
            return res.status(404).json({ message: "category not found" });
        }
        return res.status(200).json({ message: "found", category });
    } catch (error) {
        console.error(error); //for debugging
        return res.status(500).json({ message: "internal server error" });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description, image } = req.body; //new data
        // old: pizza, 
        // new: rice
        // rice existed!
        const existedName = await Category.findOne({
            name: name, //find the name
            _id: { $ne: id } //exclude the current id 
            // ne => not equal 
        })
        if (existedName) {
            return res.status(400).json({ message: "category name already in use" });
        }
        const newCategory = await Category.findByIdAndUpdate(
            id,
            { name, description, image },//the new data 
            { new: true }
        )
        if (!newCategory) {
            return res.status(400).json({ message: "categoried not updaed!" });
        }
        return res.status(200).json({ message: "categoried updaed!", newCategory });
    } catch (error) {
        console.error(error); //for debugging
        return res.status(500).json({ message: "internal server error" });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) {
            return res.status(400).json({ message: "no category choosen to delete" })
        }
        const deletedCat = await Category.findByIdAndDelete(id)
        if (!deletedCat) {
            return res.status(400).json({ message: "Not deleted, try again" })
        }
        return res.status(200).json({ message: "deleted" })
    } catch (error) {
        console.error(error); //for debugging
        return res.status(500).json({ message: "internal server error" });
    }
}

//error types:
// 400-499 client error
// 500-599 server error
// 200-299 done
// 300-399 message
