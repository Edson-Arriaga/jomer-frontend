import axios, { isAxiosError } from "axios"

export async function login(password: string){
    try {
        console.log({password})
        const { data } = await axios.post<string>(`${import.meta.env.VITE_BACKEND_URL}/api/admin`, {password})
        localStorage.setItem('AUTH_TOKEN_JOMER', data)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}