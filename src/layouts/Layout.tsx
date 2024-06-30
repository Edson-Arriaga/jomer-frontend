import { Outlet } from 'react-router-dom'
import Navegation from '../components/Navegation'
import { Transition } from '@headlessui/react'
import { useState, useRef, useEffect } from 'react'

export default function Layout() {

    const [isActiveMenu, setIsActiveMenu] = useState(false)

    const fixedMenuRef = useRef<HTMLDivElement>(null);
    const [fixedMenu, setFixedMenu] = useState(false)
    const [heightMenu, setHeightMenu] = useState(0)

    useEffect(() => {
        if (fixedMenuRef.current) {
            // Obtener la altura del elemento fijo
            setHeightMenu (fixedMenuRef.current.offsetHeight);
          }
    }, [])

    window.addEventListener('scroll', () => {
        
        if(window.scrollY > 250){
            setFixedMenu(true)
        } 
        
        if(window.scrollY === 0){
            setFixedMenu(false)
        }
    })

    return (
        <>
            <header
                className={fixedMenu ? 'shadow-md w-full bg-white fixed z-30' : 'shadow-md w-full bg-white'}
                ref={fixedMenuRef}
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
                                onClick={() => setIsActiveMenu(true)}
                                className='w-16 mr-5'
                            >
                                <img loading='lazy' src="/logo-menu.svg" alt="Logo menu" />
                                
                            </button>

                            <Transition
                                show={isActiveMenu}
                                enter="transition-all duration-1000"
                                enterFrom="opacity-0 translate-x-full"
                                enterTo="opacity-100 translate-x-0"

                                leave="transition-all duration-1000"
                                leaveFrom="opacity-100 translate-x-0"
                                leaveTo="opacity-0 translate-x-full"
                            >
                                <div className={isActiveMenu ? 'absolute text-white shadow-md w-full sm:4/6 text-left' : 'absolute hidden'}>
                                        <button
                                            onClick={() => setIsActiveMenu(false)}
                                            className={'bg-white w-full pb-5 pl-10'}
                                        >
                                            <img loading='lazy' className='invert w-10 hover:w-12 transition-all ease' src="/tache.svg" alt="Logo menu" />
                                            
                                        </button>
                                  
                                        <Navegation
                                            isActiveMenu={isActiveMenu}
                                            setIsActiveMenu={setIsActiveMenu}
                                        />
                                </div>   
                            </Transition>
                        </div>
                    </div>
                </div>
            </header>

            <div 
                className={fixedMenu ? 'block' : 'hidden'}
                style={{height: heightMenu} }
            ></div>
            <main>
                
                <Outlet/>
            </main>
        </>
    )
}
