import { useEffect, useState } from "react"
import { api } from "../api"
import toast from "react-hot-toast"
export const useMenu = () => {
    const [menu, setMenu] = useState([])
    const fetchAllMenu = async () => {
        try {
            const res = await api.get('/all-menu')
            setMenu(res.data.menu)
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }
    const deleteMenu = async (menuId) => {
        try {
            const res = await api.delete(`/delete-menu/${menuId}`)
            fetchAllMenu()
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    useEffect(() => {
        fetchAllMenu()
    }, [])
    return { menu, fetchAllMenu, deleteMenu }
}