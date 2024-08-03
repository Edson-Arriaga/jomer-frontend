import { Link, Outlet } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Modal from '../components/Modal';
import { Transition } from '@headlessui/react';
import HeaderContent from '../components/HeaderContent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from '../components/helpers/ScrollToTop';

export default function AppLayout() {

    const fixedHeaderRef = useRef<HTMLDivElement>(null)
    const [isActiveModal, setIsActiveModal] = useState(false)
    const [fixedHeader, setFixedHeader] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 600){
                setFixedHeader(true)
            }
            if (window.scrollY === 0){
                setFixedHeader(false)
            }
        })
    }, [])

    return (
        <>
            <ScrollToTop/>
            <header
                    className={fixedHeader
                        ? 'hidden' 
                        : 'shadow-md z-40 w-full absolute h-24 overflow-hidden'
                    }
                    ref={fixedHeaderRef}
                >
                <HeaderContent
                    setIsActiveModal={setIsActiveModal}
                />
            </header>
            <Transition
                show={fixedHeader}
                enter="transition-transform duration-500"
                enterFrom="-translate-y-full opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition-transform duration-500"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-full opacity-0"
            >
                <header
                    className={fixedHeader
                        ? 'shadow-md bg-white z-40 w-full fixed bg-opacity-90 h-24 overflow-hidden' 
                        : 'hidden'
                    }
                    ref={fixedHeaderRef}
                >
                    <HeaderContent
                        setIsActiveModal={setIsActiveModal}
                    />
                </header>
            </Transition>

            <Modal 
                isActiveModal={isActiveModal}
                setIsActiveModal={setIsActiveModal}
            />

            <div style={{height: '96px'}}></div>
            <main>
                <Outlet/>
            </main>

            <footer className='bg-gray-100 w-full shadow-inner grid grid-cols-1 gap-10 py-10 md:grid-cols-3 md:p-0 md:h-44'>
                <div className='flex items-center justify-center'>
                    <img 
                        src="/images/logos/complete-black-logo.png" 
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
