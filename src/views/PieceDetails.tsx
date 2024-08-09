import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPieceById } from "../api/PieceAPI";
import Loading from "../components/helpers/Loading";

export default function PieceDetails() {
    const params = useParams();
    const pieceId = params.pieceId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ['piece', pieceId],
        queryFn: () => getPieceById(pieceId),
        retry: 1
    })

    if(isLoading) return <Loading img="20" contHeight="52" mt="10"/>
    if(isError) return <Navigate to={'/404'}/>

    if (data) return (
        <div className="mt-10">
            <h1 className="text-center font-bold text-4xl uppercase">{data.name}</h1>
            <div className="mx-auto max-w-48">
                <img src={data.photos[0]} alt="" />
            </div>
        </div>
    );
}
