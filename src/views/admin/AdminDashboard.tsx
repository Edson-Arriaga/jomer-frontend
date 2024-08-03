import { Link, Navigate, useNavigate } from "react-router-dom";
import { getPieces } from "../../api/PieceAPI";
import { useQuery } from "@tanstack/react-query";
import { formatPrice } from "../../utils/formatPrice";
import { categoryTranslations } from "../../locales/es";

export default function AdminDashboard() {
    const token = localStorage.getItem('AUTH_TOKEN_JOMER')
    if(!token) return <Navigate to={'/admin/login'}/>

    const navigate = useNavigate()
    const { data, isLoading, isError } = useQuery({
        queryKey: ['pieces'],
        queryFn: getPieces,
        retry: 2
    })

    if(isError) return <Navigate to={'/404'}/>
    if(isLoading) return (
        <div className="w-full h-32 flex justify-center items-center">
            <p className="text-2xl animate-pulse">Cargando...</p>
        </div>
    )
    
    if (data) return (
        <>
            <h1 className="text-center pt-10 text-5xl capitalize pb-5">Panel de Administración</h1>
            <div className="flex justify-center mb-5">
                <Link
                    to={'/admin/agregar-pieza'}
                    className="shadow hover:shadow-inner hover:bg-gray-700 ease transition-colors p-2 rounded-md bg-black text-white uppercase"
                >
                    Agregar Pieza
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-lg sm:rounded-md max-w-screen-lg mx-10 xl:mx-auto mb-20">
                <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
                    <thead className="text-xs uppercase bg-gray-50 dark:bg-black text-white">
                        <tr className="text-sm">
                            <th scope="col" className="px-6 py-3">
                                Nombre del producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Categoría
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Foto
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(piece => (
                            <tr key={piece._id} className="odd:bg-gray-300 even:bg-gray-200 border-b text-[1.15rem]">
                                <th scope="row" className="px-6 py-4 font-black text-gray-900 whitespace-nowrap uppercase">
                                    {piece.name}
                                </th>
                                <td className="px-6 py-4 text-gray-900">
                                    {categoryTranslations[piece.category]}
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    {formatPrice(piece.price)}
                                </td>
                                <td className="py-2 text-gray-900 text-center flex justify-center">
                                    <div className="flex w-16 rounded-xl overflow-hidden">
                                        <img src={piece.photos[0]} alt=""/>
                                    </div>
                                </td>
                                <td className="px-3 py-4 justify-center items-center text-center space-x-14 h-full text-lg">
                                    <Link to="#" className="font-medium text-blue-600 hover:underline">Actualizar</Link>
                                    <Link to="#" className="font-medium text-red-600 hover:underline">Eliminar</Link>
                                </td>
                            </tr>
                        ))}                 
                    </tbody>
                </table>
            </div>
        </>
    )
}
