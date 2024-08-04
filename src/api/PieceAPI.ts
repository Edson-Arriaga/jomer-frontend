import axios, { isAxiosError } from "axios"
import { Piece, PieceFormData, pieceSchema, piecesSchema } from "../types"

export async function addPiece(formDataWithFiles : PieceFormData) {
    const token = localStorage.getItem('AUTH_TOKEN_JOMER')
    if(!formDataWithFiles.measure) formDataWithFiles.measure = 0
    
    try {
        const { data } = await axios.post<string>(`${import.meta.env.VITE_BACKEND_URL}/api/pieces`, formDataWithFiles, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        })
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getPieces(){
    try {
        const {data} = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/pieces`)
        const response = piecesSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getPieceById(pieceId: Piece['_id']){
    try {
        const {data} = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/pieces/${pieceId}`)
        const response = pieceSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export type updatePieceProps = {
    formDataWithFiles : PieceFormData, 
    pieceId: Piece['_id'],
    photoSelected: string
}

export async function updatePiece({formDataWithFiles, pieceId, photoSelected} : updatePieceProps){
    try {
        const token = localStorage.getItem('AUTH_TOKEN_JOMER')
        if(!formDataWithFiles.measure) formDataWithFiles.measure = 0

        const {data} = await axios.put<string>(`${import.meta.env.VITE_BACKEND_URL}/api/pieces/${pieceId}`,
            {...formDataWithFiles, photoSelected},
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            }
        )
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}



