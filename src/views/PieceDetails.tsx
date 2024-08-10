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
        retry: 1,
        enabled: false
    })

    const [photoSelected, setPhotoSelected] = useState('')

    // const data = {
    //     name: "Cadena CArtier 14K",
    //     description: "Cadena CArtier 14K Cadena CArtier 14KCadena CArtier 14KCadena CArtier 14KCadena CArtier 14K",
    //     price: 10,
    //     category: "chain",
    //     measure: 23,
    //     measure2: 4.5,
    //     weight: 20,
    //     caratage: "24K",
    //     photos: [
    //         "/images/homeImages/earings.webp",
    //         "/images/logos/black-logo.webp",
    //         "/images/logos/horizontal-black-logo.webp",
    //         "/images/logos/vertical-black-logo.webp",
    //         "/images/homeImages/earings.webp"
    //     ]
    // }

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
                        <img src={photo} alt={`photo ${i + 1} of ${data.name}`} />
                    </div>
                ))}
            </div>
           
            <div className="lg:col-span-6 flex flex-col gap-5">
                <h1 className="font-bold text-3xl uppercase">{data.name}</h1>
                <p>{data.description}</p>
                <p className="text-red-700 text-4xl">{formatPrice(data.price)}</p>
                
                <table className="text-sm text-left rtl:text-right w-full max-w-md mx-auto rounded-sm flex-grow">
                    <tr className="uppercase bg-gray-200 text-center border border-white">
                        <th className="px-6 py-3 font-black text-white bg-black uppercase">Kilataje</th>
                        <td className="font-black">{data.caratage}</td>
                    </tr>
                    <tr className="uppercase bg-gray-200 text-center border border-white">
                        <th className="px-6 py-3 font-black text-white bg-black uppercase">Medida</th>
                        <td className="font-black">{data.measure}</td>
                    </tr>
                    {data.measure2 && (
                        <tr className="uppercase bg-gray-200 text-center border border-white">
                            <th className="px-6 py-3 font-black text-white bg-black uppercase">Medida</th>
                            <td className="font-black">{data.measure2}</td>
                        </tr>
                    )}   
                    <tr className="uppercase bg-gray-200 text-center border border-white">
                        <th className="px-6 py-3 font-black text-white bg-black uppercase">Peso</th>
                        <td className="px-3 font-black lowercase">{data.weight} g.</td>
                    </tr>
                    <tr className="uppercase bg-gray-200 text-center">
                        <th className="px-6 py-3 font-black text-white bg-black uppercase">Categoría</th>
                        <td className="px-3 font-black">{categoryTranslations[data.category]}</td>
                    </tr>
                
                </table>
            </div>
        </div>
    );
}
