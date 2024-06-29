import { Dispatch } from "react"
import { NavLink } from "react-router-dom"

type NavegacionProps = {
    isActiveMenu?: boolean,
    setIsActiveMenu?: Dispatch<React.SetStateAction<boolean>>
}

export default function Navegacion({isActiveMenu, setIsActiveMenu} : NavegacionProps) {
  return (
    <nav className={isActiveMenu ? 'rounded-bl-lg p-5 pl-10 absolute bg-white text-black shadow-md w-full flex flex-col justify-evenly gap-y-5' : 'flex justify-evenly items-center h-full'}>
        <NavLink 
            to="/"
            className={({isActive}) => isActive ? "font-black text-2xl hover:text-1.6 ease transition-all" : "text-2xl hover:text-1.6 ease transition-all"}
            onClick={() => setIsActiveMenu!(false)}
        >Inicio</NavLink>
        <NavLink 
            to="/productos"
            className={({isActive}) => isActive ? "font-black text-2xl hover:text-1.6 ease transition-all" : "text-2xl hover:text-1.6 ease transition-all"}
            onClick={() => setIsActiveMenu!(false)}
        >Productos</NavLink>
        <NavLink 
            to="/nosotros"
            className={({isActive}) => isActive ? "font-black text-2xl hover:text-1.6 ease transition-all" : "text-2xl hover:text-1.6 ease transition-all"}
            onClick={() => setIsActiveMenu!(false)}
        >Nosotros</NavLink>
        <NavLink 
            to="/contacto"
            className={({isActive}) => isActive ? "font-black text-2xl hover:text-1.6 ease transition-all" : "text-2xl hover:text-1.6 ease transition-all"}
            onClick={() => setIsActiveMenu!(false)}
        >Contacto</NavLink>
    </nav>
  )
}
