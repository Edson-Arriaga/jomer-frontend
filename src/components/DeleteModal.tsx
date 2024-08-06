import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deletePiece } from "../api/PieceAPI";
import { Piece } from "../types";

export default function DeleteModal({ pieceId } : {pieceId : Piece['_id']}) { 

    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: deletePiece,
        onError: (error) => {
            toast.error(error.message)
            navigate('/admin')
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['pieces']})
            navigate('/admin')
            toast.success(data)
        }
    })

    return (
        <div
            className="fixed flex justify-center items-center inset-0 h-screen w-screen bg-gray-600 bg-opacity-50 text-center px-10"
            onClick={() => navigate('/admin')}    
        >
            <div
                className="absulute bg-white p-5 rounded-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                    <p className="font-bold mb-4">¿Seguro que quieres eliminar la pieza?</p>
                    <div className="text-center space-x-10">
                        <Link
                            className="bg-gray-700 text-white rounded-lg px-3 py-2"
                            to={'/admin'}
                        >Volver</Link>
                        <button
                            className="bg-red-500 text-white rounded-lg px-3 py-1"
                            onClick={() => mutate({pieceId})}
                        >Eliminar</button>
                    </div>
            </div>
        </div>
    )
}
