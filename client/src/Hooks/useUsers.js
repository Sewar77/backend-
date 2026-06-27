import { useState } from "react"
import { api } from "../api"
export const useUsers = () => {
    const [users, setUsers] = useState([])
    const fetchAllUsers = async () => {
        try {
            const res = await api.get('/all-users')
            setUsers(res.data.users)
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }
    return { users, fetchAllUsers }
}