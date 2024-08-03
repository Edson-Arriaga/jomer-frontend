import { useMutation } from "@tanstack/react-query"
import { FormEvent, useState } from "react"
import { login } from "../../api/AdminAPI"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../../components/helpers/ErrorMessage"

export default function AdminLogin() {

    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { mutate } = useMutation({
        mutationFn: () => login(password),
        onError: (error) => {
            toast.error(error.message)
            setError("")
        },
        onSuccess: () => {
            navigate('/admin')
        }
    })
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(password === ""){
            setError('La contraseña es obligatoria.')
            return
        }
        mutate();
    };
    
    return (
        <>
            <h1 className="text-center px-5 pt-10 text-4xl lg:p-10 lg:text-5xl">Iniciar Sesión (Admin)</h1>
            <form
                className="mx-auto w-full max-w-screen-xs shadow-lg grid gap-5 p-10 pt-10 mb-12 rounded-2xl"
                onSubmit={handleSubmit}
                noValidate
            >
                <h2 className="col-span-full flex items-center text-xl"><>Ingresa la contraseña:</></h2>
                <div className="col-span-full">
                    <input
                        type="password"
                        className="shadow-inner w-full p-2 rounded-md bg-gray-100"
                        placeholder="Contraseña"
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <ErrorMessage>{error}</ErrorMessage>}
                
                <div className="col-span-full flex justify-center">
                    <button
                        type="submit"
                        className="shadow hover:shadow-inner hover:bg-gray-200 ease transition-all duration-200 w-1/2 p-2 rounded-md bg-gray-100"
                    >
                        Iniciar Sesión
                    </button>
                </div>    
            </form>
        </>
    )   
}
