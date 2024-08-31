import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./views/Home"
import Catalog from "./views/Catalog"
import AboutUs from "./views/AboutUs"
import Contact from "./views/Contact"
import WishList from "./views/WishList"
import PieceDetails from "./views/PieceDetails"
import UpdatePiece from "./views/admin/UpdatePiece"
import AddPiece from "./views/admin/AddPiece"
import AdminDashboard from "./views/admin/AdminDashboard"
import NotFound from "./views/NotFound"
import Thanks from "./views/Thanks"
import AdminLayout from "./layouts/AdminLayout"
import AdminLogin from "./views/admin/AdminLogin"

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} index/>
                    <Route path="/catalog" element={<Catalog />}/>
                    <Route path="/about-us" element={<AboutUs />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/wish-list" element={<WishList />}/>
                    <Route path="/piece/:pieceId" element={<PieceDetails />}/>
                    <Route path="/thanks/:form" element={<Thanks />}/>
                    <Route path="/404" element={<NotFound />}/>
                    <Route path="*" element={<NotFound />} />
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