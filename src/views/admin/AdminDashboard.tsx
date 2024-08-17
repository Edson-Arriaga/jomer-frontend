import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { changeAvailability, getPieces } from "../../api/PieceAPI";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { categoryTranslations } from "../../locales/es";
import DeleteModal from "../../components/DeleteModal";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Loading from "../../components/helpers/Loading";
import LoadingPhoto from "../../components/helpers/LoadingPhoto";
import { toast } from "react-toastify";

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

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: changeAvailability,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            queryClient.invalidateQueries({queryKey: ['pieces']})
        }
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
    
    if(isLoading || isLoadingAuth) return <Loading />
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
            <div className="overflow-x-auto shadow-lg sm:rounded-md mx-10 xl:max-w-screen-lg xl:w-full xl:mx-auto mb-8">
                <table className="text-sm text-left rtl:text-right text-gray-400 w-full">
                    <thead className="text-xs uppercase bg-black text-white">
                        <tr className="text-sm">
                            <th className="px-6 py-3">
                                Nombre del producto
                            </th>
                            <th className="px-6 py-3">
                                Categoría
                            </th>
                            <th className="px-6 py-3 text-center">
                                Dsiponibilidad
                            </th>
                            <th className="px-6 py-3 text-center">
                                Foto
                            </th>
                            <th className="px-6 py-3 text-center">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(piece => (
                            <tr key={piece._id} className="odd:bg-gray-300 even:bg-gray-200 border-b text-[1.15rem]">
                                <th
                                    className="px-6 py-4 font-black text-gray-900 whitespace-nowrap uppercase overflow-hidden text-ellipsis max-w-64"
                                >
                                    {piece.name}
                                </th>
                                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                    {categoryTranslations[piece.category]}
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    {piece.availability === true 
                                        ?  <button
                                                className="text-green-700 w-full bg-green-50 p-2 rounded-xl text-sm font-black text-center hover:scale-105 transition-transform"
                                                onClick={() => mutate(piece._id)}    
                                            >Disponible</button>
                                        :  <button
                                                className="text-red-700 w-full bg-red-50 b px-3 p-2 rounded-xl text-sm font-black text-center hover:scale-105 transition-transform"
                                                onClick={() => mutate(piece._id)}   
                                            >No Disponible</button>
                                    }
                                </td>
                                <td className="py-2 text-gray-900 text-center flex justify-center">

                                    <div className="w-16 rounded-xl overflow-hidden">
                                        { isLoadingImage && <LoadingPhoto />}
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
