import { isAxiosError } from "axios"
import api from "../lib/axios"

export async function login(password: string){
    try {
        const { data } = await api.post<string>(`/admin`, {password})
        localStorage.setItem('AUTH_TOKEN_JOMER', data)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function verifyToken(){
    try {
        const { data } = await api<string>(`/admin/verify-token`)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}