import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPieceById } from "../api/PieceAPI";

export default function PieceDetails() {
    const params = useParams();
    const pieceId = params.pieceId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ['piece', pieceId],
        queryFn: () => getPieceById(pieceId),
        retry: 1
    })

    if(isError) return <Navigate to={'/404'}/>
    if(isLoading) return (
        <div className="w-full h-32 flex justify-center items-center">
            <p className="text-2xl animate-pulse uppercase">Cargando...</p>
        </div>
    )

    if (data) return (
        <div className="mt-10">
            <h1 className="text-center font-bold text-4xl">{data.name}</h1>
            <div className="mx-auto max-w-48">
                <img src={data.photos[0]} alt="" />
            </div>
        </div>
    );
}
