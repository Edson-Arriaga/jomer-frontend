import { Dispatch } from "react"
import { NavLink } from "react-router-dom"

type NavegacionProps = {
    setIsActiveModal: Dispatch<React.SetStateAction<boolean>>
}

export default function Navegation({setIsActiveModal} : NavegacionProps) {
    
    return (
    <nav className="flex flex-col gap-10 h-30 my-8 text-2xl lg:my-0 lg:items-center lg:justify-evenly lg:flex-row lg:h-full">
        <NavLink 
            to="/"
            className={({isActive}) => `hover:text-1.6 ease transition-all ${isActive && "font-black"}`}
            onClick={() => setIsActiveModal(false)}
        >Inicio</NavLink>
        <NavLink 
            to="/productos"
            className={({isActive}) => `hover:text-1.6 ease transition-all ${isActive && "font-black"}`}
            onClick={() => setIsActiveModal(false)}
        >Piezas</NavLink>
        <NavLink 
            to="/nosotros"
            className={({isActive}) => `hover:text-1.6 ease transition-all ${isActive && "font-black"}`}
            onClick={() => setIsActiveModal(false)}
        >Nosotros</NavLink>
        <NavLink 
            to="/contacto"
            className={({isActive}) => `hover:text-1.6 ease transition-all ${isActive && "font-black"}`}
            onClick={() => setIsActiveModal(false)}
        >Contacto</NavLink>
        
    </nav>
  )
}
