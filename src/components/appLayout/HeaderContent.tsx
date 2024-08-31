import { Link } from "react-router-dom";
import IconLinks from "./IconLinks";
import Navegation from "./Navegation";

type HeaderPrps = {
    setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderContent({ setIsActiveModal } : HeaderPrps) {
    return (
        <>
           <div className='grid grid-cols-2 max-w-screen-xl mx-auto lg:grid-cols-12 h-full relative'>
                <div className='lg:col-span-3'>
                    <Link className="overflow-hidden" to={'/'}>
                        <div className="absolute -top-[4.3rem] w-56 left-1 lg:left-3">
                            <img src="/images/logos/horizontal-black-logo.webp" alt="jomer-horizontal-black-logo" />
                        </div>
                        <p className="absolute inset-0 left-56 top-10 font-bold font-italic text-xl">By Aly</p>
                    </Link>
                </div>

                <div className='hidden lg:block lg:col-span-6'>
                    <Navegation 
                        setIsActiveModal={setIsActiveModal}
                    />
                </div>

                <div className='hidden lg:block lg:col-span-3'>
                    <IconLinks
                        setIsActiveModal={setIsActiveModal}
                    />
                </div>

                {/* --- show when width is less than 1024 px ----*/}
                <div className='flex justify-end items-center lg:hidden'>
                    <button
                        onClick={() => setIsActiveModal(true)}
                        className='w-11 h-11 mr-5'
                    >
                        <img src="/images/icons/menu-icon.svg"
                            alt="Menu icon" 
                            loading='lazy'
                        />
                    </button>
                </div>
            </div>
        </>
    )
}
