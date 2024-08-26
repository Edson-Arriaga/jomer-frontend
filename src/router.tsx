import { lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./views/Home"
import Catalog from "./views/Catalog"
import AboutUs from "./views/AboutUs"
import Contact from "./views/Contact"
import WishList from "./views/WishList"
import PieceDetails from "./views/PieceDetails"

const Thanks = lazy(() => import("./views/Thanks"))
const AddPiece = lazy(() => import("./views/admin/AddPiece"))
const AdminLogin = lazy(() => import("./views/admin/AdminLogin"))
const AdminLayout = lazy(() => import("./layouts/AdminLayout"))
const AdminDashboard = lazy(() => import("./views/admin/AdminDashboard"))
const UpdatePiece = lazy(() => import("./views/admin/UpdatePiece"))
const NotFound = lazy(() => import("./views/NotFound"))


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