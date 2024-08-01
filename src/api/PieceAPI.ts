import axios, { isAxiosError } from "axios"
import { PieceForm } from "../types"


export async function addPiece(formDataWithFiles : PieceForm) {
    if(!formDataWithFiles.measure){
        formDataWithFiles.measure = 0
    }
    try {
        const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/pieces`, formDataWithFiles, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        console.log(data)
        return "Respuesta mandada"
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}