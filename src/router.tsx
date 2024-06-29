import { createBrowserRouter } from "react-router-dom"
import Inicio from "./views/Inicio"
import Layout from "./layouts/Layout"
import Productos from "./views/Productos"
import Nosotros from "./views/Nosotros"
import Contacto from "./views/Contacto"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Inicio />
            },
            {
                path: 'productos',
                element: <Productos />
            },
            {
                path: 'nosotros',
                element: <Nosotros />
            },
            {
                path: 'contacto',
                element: <Contacto />
            }
        ]
    }
])
