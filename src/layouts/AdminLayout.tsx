import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../components/helpers/ScrollToTop";
import HeaderContent from "../components/appLayout/HeaderContent";
import MenuModal from "../components/appLayout/MenuModal";
import { useState } from "react";

export default function AdminLayout() {
    
    const [isActiveModal, setIsActiveModal] = useState(false)

    return (
        <>
            <ScrollToTop/>
            <header className={'shadow-md w-full h-[5.5rem] relative overflow-hidden bg-white'}>
                <HeaderContent setIsActiveModal={setIsActiveModal}/>
            </header>
    
            <MenuModal
                isActiveModal={isActiveModal}
                setIsActiveModal={setIsActiveModal}
            />

            <main>
                <Outlet/>
            </main>
    
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover={false}
                theme="dark"
            />
        </>
    )
}
