import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <div className="flex flex-col justify-center items-center h-hero-lg text-lg px-5 sm:text-2xl mx-auto max-w-screen-sm text-center gap-5">
            <h1 className="font-black text-5xl">Error 404</h1>
            <h2 className="font-black text-3xl">Recurso No encontrado</h2>
            <Link className="shadow hover:shadow-inner hover:bg-gray-800 ease transition-colors py-2 px-4 rounded-xl bg-black text-balck uppercase text-white" to={'/'}>Volver a Inicio</Link>
        </div>
    )
}
