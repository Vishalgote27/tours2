import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL:"https://tours-booking-production.up.railway.app",
    withCredentials: true
})
export default api