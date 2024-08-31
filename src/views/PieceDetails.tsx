import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPieceById } from "../api/PieceAPI";
import Loading from "../components/helpers/Loading";
import { categoryTranslations } from "../locales/es";
import { useEffect, useState } from "react";

export default function PieceDetails() {
    const params = useParams();
    const pieceId = params.pieceId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ['piece', pieceId],
        queryFn: () => getPieceById(pieceId),
        retry: 1
    })

    const [photoSelected, setPhotoSelected] = useState('')

    useEffect(() => {
        if (data && data.photos) {
            setPhotoSelected(data.photos[0]);
        }
    }, [data]);

    if(isLoading) return <Loading />
    if(isError) return <Navigate to={'/404'}/>

    if (data) return (
        <div className="mt-10 max-w-5xl mx-8 grid grid-cols-1 justify-between gap-10 mb-10 md:mx-auto md:w-full md:grid-cols-12 items-center ">
            <div className="flex justify-center md:col-span-5 h-full items-center">
                <img className="w-9/12 md:w-10/12 lg:w-11/12 rounded-md" src={photoSelected || data.photos[0]} alt={`photo 1 of ${data.name}`} />
            </div>

            <div className="flex justify-center mx-auto items-center gap-3 md:gap-5 md:w-12 md:flex-col">
                {data.photos.map((photo, i) => (
                    <div
                        key={data.photos[i]}
                        className={`${photo === photoSelected && 'scale-110 opacity-95'} cursor-pointer md:-translate-x-10 lg:-translate-x-5 opacity-80 hover:scale-105 transition-transform`}
                        onClick={() => setPhotoSelected(photo)}
                    >
                        <img className="w-20 rounded-md" src={photo} alt={`photo ${i + 1} of ${data.name}`} />
                    </div>
                ))}
            </div>
           
            <div className="flex flex-col gap-5 md:col-span-6 pr-5">
                <h1 className="font-bold text-3xl uppercase tracking-wide">{data.name}</h1>
                <p>{data.description}</p>
                {data.availability === true
                    ?   <p className="text-green-700 border bg-green-50 border-green-700 p-3 rounded-xl text-sm mt-5 font-black text-center">Disponible</p>
                    :   <p className="text-red-700 border bg-red-50 border-red-700 px-3 p-3 rounded-xl text-sm mt-5 font-black text-center">Agotado</p>
                }
                
                <table className="text-sm text-left w-full mx-auto rounded-sm flex-grow shadow-inner">
                    <tbody>
                        <tr className="bg-gray-100 border-b border-black shadow-inner">
                            <th className="px-6 py-4 font-extrabold tracking-wider">Kilataje</th>
                            <td className="px-6 py-4 font-extrabold">{data.caratage}</td>
                        </tr>
                        <tr className="bg-gray-100  border-b border-black shadow-inner">
                            <th className="px-6 py-4 font-extrabold tracking-wider">{data.category === 'weddingRing' ? 'Med. Argolla 1' : 'Medida'}</th>
                            <td className="px-6 py-4 font-extrabold">{data.measure === 0 ? 'Unitalla' : `${data.measure} ${["chain", "cuffBracelet", "pendant"].includes(data.category) ? ' cm.' : ''}`}</td>
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
                    </tbody>
                </table>
                <p>Contáctanos por medio de <a target="_blank" href={`https://wa.me/${3317086806}?text=${encodeURIComponent("Hola como estas Si SI")}`} className="text-green-400 font-bold text-xl animate-bounce">Whatsapp</a> si te llamó la atención este producto.</p>
            </div>
        </div>
    )
}
