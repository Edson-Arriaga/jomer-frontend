import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPieceById } from "../api/PieceAPI";
import Loading from "../components/helpers/Loading";
import { formatPrice } from "../utils/formatPrice";
import { categoryTranslations } from "../locales/es";
import { useState } from "react";

export default function PieceDetails() {
    const params = useParams();
    const pieceId = params.pieceId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ['piece', pieceId],
        queryFn: () => getPieceById(pieceId),
        retry: 1
    })

    console.log(data)

    const [photoSelected, setPhotoSelected] = useState('')

    if(isLoading) return <Loading />
    if(isError) return <Navigate to={'/404'}/>

    if (data) return (
        <div className="mt-10 max-w-5xl mx-8 lg:mx-auto lg:w-full grid grid-cols-1 lg:grid-cols-12 justify-between gap-10 mb-10">
            <div className="flex justify-center lg:col-span-5">
                <img className="w-9/12 lg:w-auto" src={photoSelected || data.photos[0]} alt={`photo 1 of ${data.name}`} />
            </div>

            <div className="flex justify-center mx-auto items-center gap-3 lg:gap-5 lg:w-auto lg:flex-col lg:col-span-1">
                {data.photos.map((photo, i) => (
                    <div 
                        className="cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 lg:-translate-x-5"
                        onClick={() => setPhotoSelected(photo)}
                    >
                        <img className="w-20" src={photo} alt={`photo ${i + 1} of ${data.name}`} />
                    </div>
                ))}
            </div>
           
            <div className="lg:col-span-6 flex flex-col gap-5">
                <h1 className="font-bold text-3xl uppercase tracking-wide">{data.name}</h1>
                <p>{data.description}</p>
                <p className="text-red-700 text-4xl">{formatPrice(data.price)}</p>
                
                <table className="text-sm text-left w-full mx-auto rounded-sm flex-grow shadow-inner">
                    <tr className="bg-gray-100 border-b border-black shadow-inner">
                        <th className="px-6 py-4 font-extrabold tracking-wider">Kilataje</th>
                        <td className="px-6 py-4 font-extrabold">{data.caratage}</td>
                    </tr>
                    <tr className="bg-gray-100  border-b border-black shadow-inner">
                        <th className="px-6 py-4 font-extrabold tracking-wider">{data.category === 'weddingRing' ? 'Med. Argolla 1' : 'Medida'}</th>
                        <td className="px-6 py-4 font-extrabold">{data.measure} {['chain', 'cuffBracelet', 'pendant'].includes(data.category) && ' cm.'}</td>
                    </tr>
                    {data.category === 'weddingRing' && (
                        <tr className="bg-gray-100  border-b border-black shadow-inner">
                            <th className="px-6 py-4 font-extrabold tracking-wider">Med. Argolla 2</th>
                            <td className="px-6 py-4 font-extrabold">{data.measure2}</td>
                        </tr>
                    )}
                    <tr className="bg-gray-100 border-b border-black shadow-inner">
                        <th className="px-6 py-4 font-extrabold tracking-wider">Peso</th>
                        <td className="px-6 py-4 font-extrabold lowercase">{data.weight} g.</td>
                    </tr>
                    <tr className="bg-gray-100 shadow-inner">
                        <th className="px-6 py-4 font-extrabold tracking-wider">Categoría</th>
                        <td className="px-6 py-4 font-extrabold">{categoryTranslations[data.category]}</td>
                    </tr>
                </table>

            </div>
        </div>
    );
}
