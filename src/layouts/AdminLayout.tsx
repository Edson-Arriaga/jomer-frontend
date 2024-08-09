import { Link, Outlet } from "react-router-dom";
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

            <footer className='bg-white w-full grid grid-cols-1 gap-10 py-10 md:grid-cols-3 md:p-0 md:h-44'>
                <div className='flex items-center justify-center'>
                    <img 
                        src="/images/logos/complete-black-logo.webp" 
                        alt="Logo menu"
                        className='w-20'
                    />
                </div>
                <div className='flex flex-col justify-center items-center gap-5 text-center'>
                    <Link to={'/'}>Preguntas frecuentes</Link>
                    <Link to={'/'}>Terminos y condiciones</Link>
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <p className='text-sm'>Desarrollada por: <span className='text-blue-400 font-bold'>Arleon Success</span></p>
                </div>
            </footer>
    
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
