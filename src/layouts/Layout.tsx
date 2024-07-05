import { Outlet } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Modal from '../components/Modal';
import { Transition } from '@headlessui/react';
import HeaderContent from '../components/HeaderContent';

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
                        ? 'hidden' 
                        : 'shadow-md z-40 w-full absolute h-24'
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
                        ? 'shadow-md bg-white z-40 w-full fixed bg-opacity-90 h-24' 
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

            <div style={{height: heightHeader}}></div>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
