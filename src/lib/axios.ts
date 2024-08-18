import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('AUTH_TOKEN_JOMER')

    if(config.method === 'post' || config.method === 'put' || config.method === 'patch'){
        config.headers["Content-Type"] = 'multipart/form-data'
    }
    
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config  
})

export default api