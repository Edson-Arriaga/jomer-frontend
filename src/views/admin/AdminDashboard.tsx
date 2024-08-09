import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { getPieces } from "../../api/PieceAPI";
import { useQuery } from "@tanstack/react-query";
import { formatPrice } from "../../utils/formatPrice";
import { categoryTranslations } from "../../locales/es";
import DeleteModal from "../../components/DeleteModal";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Loading from "../../components/helpers/Loading";

export default function AdminDashboard() {
    const {isErrorAuth, isLoadingAuth, errorAuth} = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const activedeleteModal = queryParams.get('deleteModal')
    const [isLoadingImage, setIsLoadingImage] = useState(true)
    
    const { data, isLoading, isError } = useQuery({
        queryKey: ['pieces'],
        queryFn: getPieces,
        retry: 2,
        refetchOnWindowFocus: true
    })

    const handleClick = () => {
        navigate('/')
        localStorage.removeItem('AUTH_TOKEN_JOMER')
    }

    useEffect(() => {
        if(isErrorAuth){
            navigate('/admin/login')
        }
    }, [isErrorAuth, errorAuth])
    
    if(isLoading || isLoadingAuth) return <Loading img="20" contHeight="52" mt="10"/>
    if(isError) return <Navigate to={'/404'}/>
    
    if (data) return (
        <>
            <h1 className="text-center pt-10 text-5xl uppercase pb-5">Panel de Administración</h1>
            <div className="flex justify-center mb-5">
                <Link
                    to={'/admin/agregar-pieza'}
                    className="shadow hover:shadow-inner hover:bg-gray-700 ease transition-colors p-2 rounded-md bg-black text-white uppercase"
                >
                    Agregar Pieza
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-lg sm:rounded-md max-w-screen-lg mx-10 xl:mx-auto mb-8">
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

                                    <div className="w-16 rounded-xl overflow-hidden">
                                        { isLoadingImage &&  <Loading img={'10'} contHeight={'full'}/>}
                                        <img 
                                            src={`${piece.photos[0]}?t=${new Date().getTime()}`} 
                                            alt={`Main photo of ${piece.name}`}
                                            onLoad={() => setIsLoadingImage(false)}
                                        />
                                    </div>
                                </td>
                                <td className="px-3 py-4 justify-center items-center text-center space-x-14 h-full text-lg">
                                    <Link
                                        className="font-medium text-blue-600 hover:underline"
                                        to={`actualizar-pieza/${piece._id}`}
                                    >Actualizar</Link>
                                    <Link
                                        className="font-medium text-red-600 hover:underline"
                                        to={location.pathname + `?deleteModal=${piece._id}`}
                                        >Eliminar</Link>
                                </td>
                            </tr>
                        ))}                 
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mb-10">
                <button
                    className="shadow hover:shadow-inner hover:bg-red-800 ease transition-colors p-2 rounded-md bg-red-600 text-white uppercase"
                    onClick={handleClick}
                >
                    Cerrar Sesión
                </button>
            </div>
                        
            {activedeleteModal && <DeleteModal pieceId={activedeleteModal}/>}      
        </>
    )
}
