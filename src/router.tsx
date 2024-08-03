import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import AppLayout from "./layouts/AppLayout"
import Catalog from "./views/Catalog"
import AboutUs from "./views/AboutUs"
import Contact from "./views/Contact"
import WishList from "./views/WishList"
import PieceDetails from "./views/PieceDetails"
import Thanks from "./views/Thanks"
import AddPiece from "./views/admin/AddPiece"
import AdminLogin from "./views/admin/AdminLogin"
import AdminLayout from "./layouts/AdminLayout"
import AdminDashboard from "./views/admin/AdminDashboard"
import UpdatePiece from "./views/admin/UpdatePiece"

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} index/>
                    <Route path="/catalogo/:filter" element={<Catalog />}/>
                    <Route path="/nosotros" element={<AboutUs />}/>
                    <Route path="/contacto" element={<Contact />}/>
                    <Route path="/wish-list" element={<WishList />}/>
                    <Route path="/piece/:pieceId" element={<PieceDetails />}/>
                    <Route path="/gracias/:form" element={<Thanks />}/>
                </Route>

                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<AdminDashboard />}/>
                    <Route path="/admin/login" element={<AdminLogin />}/>
                    <Route path="/admin/agregar-pieza" element={<AddPiece />}/>
                    <Route path="/admin/actualizar-pieza/:pieceId" element={<UpdatePiece />}/>
                </Route>


            </Routes>
        </BrowserRouter>
    )  
}