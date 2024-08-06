import { Dispatch } from "react"
import { NavLink } from "react-router-dom"

type NavegacionProps = {
    setIsActiveModal: Dispatch<React.SetStateAction<boolean>>
}

export default function Navegation({setIsActiveModal} : NavegacionProps) {
    
    return (
    <nav className="flex flex-col gap-10 my-8 text-2xl lg:my-0 lg:items-center lg:justify-evenly lg:flex-row lg:h-full">
        <NavLink 
            to="/"
            className={({isActive}) => `lg:hover:scale-105 ease transition-transform ${isActive && "font-black"}`}
            onClick={() => setIsActiveModal(false)}
        >Inicio</NavLink>
        <NavLink 
            to="/catalogo/all"
            className={({isActive}) => `lg:hover:scale-105 ease transition-transform ${isActive && "font-black"}`}
            onClick={() => setIsActiveModal(false)}
        >Catálogo</NavLink>
        <NavLink 
            to="/nosotros"
            className={({isActive}) => `lg:hover:scale-105 ease transition-transform ${isActive && "font-black"}`}
            onClick={() => setIsActiveModal(false)}
        >Nosotros</NavLink>
        <NavLink 
            to="/contacto"
            className={({isActive}) => `lg:hover:scale-105 ease transition-transform ${isActive && "font-black"}`}
            onClick={() => setIsActiveModal(false)}
        >Contacto</NavLink>
        
    </nav>
  )
}
