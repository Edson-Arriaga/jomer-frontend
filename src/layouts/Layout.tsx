import { Outlet } from 'react-router-dom'
import Navegation from '../components/Navegation'
import { useState, useRef, useEffect } from 'react'
import LinksSocialMedia from '../components/LinksSocialMedia';
import Modal from '../components/Modal';

export default function Layout() {

    const fixedHeaderRef = useRef<HTMLDivElement>(null);
    const [isActiveModal, setIsActiveModal] = useState(false)
    const [fixedHeader, setFixedHeader] = useState(false)
    const [heightHeader, setHeightHeader] = useState(0)

    useEffect(() => {
        if (fixedHeaderRef.current) {
            // Get header height 
            setHeightHeader (fixedHeaderRef.current.offsetHeight);
        }
        
        window.addEventListener('scroll', () => {
            if(window.scrollY > 250){
                setFixedHeader(true)
            }
            if (window.scrollY === 0){
                setFixedHeader(false)
            }
        })
    }, [])

    return (
        <>
            <header
                className={fixedHeader 
                    ? 'shadow-md bg-white z-40 w-full bg-opacity-95 fixed' 
                    : 'shadow-md bg-white z-40 w-full absolute'
                }
                ref={fixedHeaderRef}
            >
                <div className='grid grid-cols-2 h-32 max-w-screen-xl mx-auto lg:grid-cols-12'>
                    {/* Hola  */}
                    <div className='flex items-center pl-4 lg:col-span-3'>
                        <div className='w-16'>
                            <img
                                src="/jomer-logo.webp" 
                                alt="Jomer logo"
                                className='w-full min-w-16 invert' 
                            />
                        </div>
                        <div className='uppercase font-black text-5xl pt-1'>
                        jomer</div>
                    </div>

                    <div className='hidden lg:block lg:col-span-6'>
                        <Navegation 
                            setIsActiveModal={setIsActiveModal}
                        />
                    </div>

                    <div className='hidden lg:block lg:col-span-3'>
                        <LinksSocialMedia />
                    </div>

                    <div className='flex justify-end items-center lg:hidden'>
                        <button
                            onClick={() => setIsActiveModal(true)}
                            className='w-12 h-12 mr-5'
                        >
                            <img src="/menu-icon.svg"
                                alt="Menu icon" 
                                loading='lazy'
                            />
                        </button>
                    </div>
                </div>
            </header>

            <Modal 
                isActiveModal={isActiveModal}
                setIsActiveModal={setIsActiveModal}
            />

            <div style={{height: heightHeader}}></div>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
