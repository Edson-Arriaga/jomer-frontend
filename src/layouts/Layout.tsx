import { Outlet } from 'react-router-dom'
import Navegacion from '../components/Navegacion'
import { Transition } from '@headlessui/react'
import { useState } from 'react'

export default function Layout() {

    const [isActiveMenu, setIsActiveMenu] = useState(false)

    return (
        <>
            <header className='shadow-md w-full bg-white'>
                <div className='grid grid-cols-12 h-32 max-w-screen-xl mx-auto'>
                    <div className='col-span-3 flex items-center pl-4'>
                        <div className='w-16'>
                            <img className='w-full min-w-16 invert' src="/logo.webp" alt="logotipo"/>
                        </div>
                        <div className='uppercase font-black text-5xl pt-1'>jomer</div>
                    </div>
                    <div className='col-span-6 hidden lg:block'>
                        <Navegacion />
                    </div>
                    <div className='col-span-9 block lg:hidden lg:col-span-3'>
                        <div className='text-right flex justify-end items-center h-full'>
                            <button
                                onClick={() => setIsActiveMenu(true)}
                                className='w-16 mr-5'
                            >
                                <img src="/logo-menu.svg" alt="Logo menu" />
                                
                            </button>

                            <Transition
                                show={isActiveMenu}
                                enter="transition-all"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"

                                leave="transition-all duration-700"
                                leaveFrom="opacity-100 translate-x-0"
                                leaveTo="opacity-0 translate-x-full"
                            >
                                <div className={isActiveMenu ? 'absolute text-white shadow-md w-full sm:4/6 text-left' : 'absolute hidden'}>
                                        <button
                                            onClick={() => setIsActiveMenu(false)}
                                            className={'bg-white w-full pb-5 pl-10'}
                                        >
                                            <img className='invert w-10 hover:w-12 transition-all ease' src="/tache.svg" alt="Logo menu" />
                                            
                                        </button>
                                  
                                        <Navegacion
                                            isActiveMenu={isActiveMenu}
                                            setIsActiveMenu={setIsActiveMenu}
                                        />
                                </div>   
                            </Transition>


                                
                            
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <Outlet/>
            </main>
        </>
    )
}
