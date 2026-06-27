import { useEffect, useState } from "react"
import { api } from "../api"
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
    useEffect(() => {
        fetchAllMenu()
    }, [])
    return { menu, fetchAllMenu }
}