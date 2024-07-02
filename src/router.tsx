import { createHashRouter } from "react-router-dom"
import Home from "./views/Home"
import Layout from "./layouts/Layout"
import Products from "./views/Products"
import AboutUs from "./views/AboutUs"
import Contact from "./views/Contact"
import WishList from "./views/WishList"

export const router = createHashRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'productos',
                element: <Products />
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
            }
        ]
    }
])
