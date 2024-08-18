import { isAxiosError } from "axios"
import { Piece, PieceFormData, PieceFormDataWithFiles, pieceSchema, piecesSchema } from "../types"
import api from "../lib/axios"

export async function addPiece(formDataWithFiles : PieceFormDataWithFiles) {
    if(!formDataWithFiles.measure) formDataWithFiles.measure = 0
    if(formDataWithFiles.availability === "true"){
        formDataWithFiles.availability = true
    } else{
        formDataWithFiles.availability = false
    }
     
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
        if(formDataWithFiles.availability === "true"){
            formDataWithFiles.availability = true
        } else{
            formDataWithFiles.availability = false
        }

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

export async function changeAvailability (pieceId : Piece['_id']) {
    try {
        const {data} = await api.patch<string>(`/pieces/${pieceId}/change-availability`)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function deleteImage ({pieceId, photo} : {pieceId : Piece['_id'], photo : string}) {
    try {
        const {data} = await api.patch<string>(`/pieces/${pieceId}/delete-image`, {photo})
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function addImage ({pieceId, photo} : {pieceId : Piece['_id'], photo : File}) {
    try {
        const {data} = await api.patch<string>(`/pieces/${pieceId}/add-image`, {photo})
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}



