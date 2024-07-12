import { createHashRouter } from "react-router-dom"
import Home from "./views/Home"
import Layout from "./layouts/Layout"
import Catalog from "./views/Catalog"
import AboutUs from "./views/AboutUs"
import Contact from "./views/Contact"
import WishList from "./views/WishList"
import PieceDetails from "./views/PieceDetails"

export const router = createHashRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'catalogo',
                element: <Catalog />
            },
            {
                path: 'nosotros',
                element: <AboutUs />
            },
            {
                path: 'contacto',
                element: <Contact />
            },
            {
                path: 'wish-list',
                element: <WishList />
            },
            {
                path: 'piece/:id',
                element: <PieceDetails/>
            }
        ]
    }
])
