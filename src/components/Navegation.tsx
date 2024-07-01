import { Dispatch } from "react"
import { NavLink } from "react-router-dom"

type NavegacionProps = {
    isActiveHeaderPhone: boolean,
    setIsActiveHeaderPhone: Dispatch<React.SetStateAction<boolean>>
}

export default function Navegation({isActiveHeaderPhone, setIsActiveHeaderPhone} : NavegacionProps) {
  
    return (
    <nav 
        className={isActiveHeaderPhone ? 'rounded-bl-lg p-5 pl-10 absolute bg-white text-black shadow-md w-full flex flex-col justify-evenly gap-y-5' : 'flex justify-evenly items-center h-full'}
    >
        <NavLink 
            to="/"
            className={({isActive}) => `text-2xl hover:text-1.6 ease transition-all ${isActive && "font-black"}`}
            onClick={() => setIsActiveHeaderPhone(false)}
        >Inicio</NavLink>
        <NavLink 
            to="/productos"
            className={({isActive}) => `text-2xl hover:text-1.6 ease transition-all ${isActive && "font-black"}`}
            onClick={() => setIsActiveHeaderPhone(false)}
        >Productos</NavLink>
        <NavLink 
            to="/nosotros"
            className={({isActive}) => `text-2xl hover:text-1.6 ease transition-all ${isActive && "font-black"}`}
            onClick={() => setIsActiveHeaderPhone(false)}
        >Nosotros</NavLink>
        <NavLink 
            to="/contacto"
            className={({isActive}) => `text-2xl hover:text-1.6 ease transition-all ${isActive && "font-black"}`}
            onClick={() => setIsActiveHeaderPhone(false)}
        >Contacto</NavLink>
    </nav>
  )
}
