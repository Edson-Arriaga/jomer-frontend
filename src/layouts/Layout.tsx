import { Outlet } from 'react-router-dom'
import Navegation from '../components/Navegation'
import { Transition } from '@headlessui/react'
import { useState, useRef, useEffect } from 'react'

export default function Layout() {

    const fixedHeaderRef = useRef<HTMLDivElement>(null);
    const [isActiveHeaderPhone, setIsActiveHeaderPhone] = useState(false)
    const [fixedHeader, setFixedHeader] = useState(false)
    const [heightHeader, setHeightHeader] = useState(0)

    useEffect(() => {
        if (fixedHeaderRef.current) {
            // Get the height of the fixed header
            setHeightHeader (fixedHeaderRef.current.offsetHeight);
        }

        const handleScroll = () => {
            if(window.scrollY > 250){
                setFixedHeader(true)
            } 
            if (window.scrollY === 0){
                setFixedHeader(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                className={fixedHeader ? 'shadow-md w-full bg-white bg-opacity-95 fixed z-50' : 'shadow-md bg-white absolute z-50 w-full'}
                ref={fixedHeaderRef}
            >
                <div className='grid grid-cols-12 h-32 max-w-screen-xl mx-auto'>
                    <div className='col-span-3 flex items-center pl-4'>
                        <div className='w-16'>
                            <img className='w-full min-w-16 invert' src="/logo.webp" alt="logotipo"/>
                        </div>
                        <div className='uppercase font-black text-5xl pt-1'>jomer</div>
                    </div>
                    <div className='col-span-6 hidden lg:block'>
                        <Navegation />
                    </div>  
                    <div className='col-span-9 block lg:hidden lg:col-span-3'>
                        <div className='text-right flex justify-end items-center h-full'>
                            <button
                                onClick={() => setIsActiveHeaderPhone(true)}
                                className='w-12 mr-5'
                            >
                                <img loading='lazy' src="/logo-menu.svg" alt="Logo menu" />
                                
                            </button>

                            <Transition
                                show={isActiveHeaderPhone}
                                enter="transition-all duration-1000"
                                enterFrom="opacity-0 translate-x-full"
                                enterTo="opacity-100 translate-x-0"

                                leave="transition-all duration-1000"
                                leaveFrom="opacity-100 translate-x-0"
                                leaveTo="opacity-0 translate-x-full"
                            >
                                <div className={isActiveHeaderPhone ? 'absolute text-white shadow-md w-full sm:4/6 text-left' : 'absolute hidden'}>
                                        <button
                                            onClick={() => setIsActiveHeaderPhone(false)}
                                            className={'bg-white w-full pb-5 pl-10'}
                                        >
                                            <img loading='lazy' className='invert w-10 hover:w-12 transition-all ease' src="/tache.svg" alt="Logo menu" />
                                            
                                        </button>
                                  
                                        <Navegation
                                            isActiveHeaderPhone={isActiveHeaderPhone}
                                            setIsActiveHeaderPhone={setIsActiveHeaderPhone}
                                        />
                                </div>   
                            </Transition>
                        </div>
                    </div>
                </div>
            </header>
            
            <div style={{height: heightHeader}}></div>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
