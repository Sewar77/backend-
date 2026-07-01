import axios from "axios"
const token = localStorage.getItem("token")
console.log(token);

export const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
})


