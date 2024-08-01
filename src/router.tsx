import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Layout from "./layouts/Layout"
import Catalog from "./views/Catalog"
import AboutUs from "./views/AboutUs"
import Contact from "./views/Contact"
import WishList from "./views/WishList"
import PieceDetails from "./views/PieceDetails"
import Thanks from "./views/Thanks"
import AddPiece from "./views/AddPiece"

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} index/>
                    <Route path="/catalogo/:filter" element={<Catalog />}/>
                    <Route path="/nosotros" element={<AboutUs />}/>
                    <Route path="/contacto" element={<Contact />}/>
                    <Route path="/wish-list" element={<WishList />}/>
                    <Route path="/piece/:id" element={<PieceDetails />}/>
                    <Route path="/gracias/:form" element={<Thanks />}/>
                    <Route path="/agregar-producto" element={<AddPiece />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )  
}

// export const router = createHashRouter([
//     {
//         path:'/',
//         element: <Layout/>,
//         children: [
//             {
//                 index: true,
//                 element: <Home />,
//             },
//             {
//                 path: 'catalogo/:filter',
//                 element: <Catalog />
//             },
//             {
//                 path: 'nosotros',
//                 element: <AboutUs />
//             },
//             {
//                 path: 'contacto',
//                 element: <Contact />
//             },
//             {
//                 path: 'wish-list',
//                 element: <WishList />
//             },
//             {
//                 path: 'piece/:id',
//                 element: <PieceDetails/>
//             },
//             {
//                 path: 'gracias/:form',
//                 element: <Thanks/>
//             },
//             {
//                 path: 'addProduct',
//                 element: <Thanks/>
//             },
//         ]
//     }
// ])
