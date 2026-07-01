import { useState } from "react"
import { api } from "../api"
import toast from "react-hot-toast"
export const useUsers = () => {
    const [users, setUsers] = useState([])
    const fetchAllUsers = async () => {
        try {
            const res = await api.get('/all-users')
            // reget from db
            setUsers(res.data.users)
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    const deleteUser = async (userId) => {
        try {
            const res = await api.delete(`/delete-user/${userId}`)
            toast.success(res.data.message)
            fetchAllUsers()
            // reget data after deleteing the user
            // refresh
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return { users, fetchAllUsers, deleteUser }
}