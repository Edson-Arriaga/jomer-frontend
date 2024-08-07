import { isAxiosError } from "axios"
import { Piece, PieceFormData, pieceSchema, piecesSchema } from "../types"
import api from "../lib/axios"

export async function addPiece(formDataWithFiles : PieceFormData) {
    if(!formDataWithFiles.measure) formDataWithFiles.measure = 0
    
    try {
        const { data } = await api.post<string>(`/pieces`, formDataWithFiles)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getPieces(){
    try {
        const {data} = await api(`/pieces`)
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
        const {data} = await api(`/pieces/${pieceId}`)
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
        if(!formDataWithFiles.measure) formDataWithFiles.measure = 0

        const {data} = await api.put<string>(`/pieces/${pieceId}`, {...formDataWithFiles, photoSelected})
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function deletePiece({pieceId} : {pieceId : Piece['_id']}) {
    try {
        const {data} = await api.delete<string>(`/pieces/${pieceId}`)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}


