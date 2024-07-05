import IconLinks from "./IconLinks";
import Navegation from "./Navegation";

type HeaderPrps = {
    setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderContent({ setIsActiveModal } : HeaderPrps) {

    return (
        <>
           <div className='grid grid-cols-2 max-w-screen-xl mx-auto lg:grid-cols-12 h-full'>
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
                    <IconLinks
                        setIsActiveModal={setIsActiveModal}
                    />
                </div>

                {/* --- show when width is less than 1024 px ----*/}
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
        </>
    )
}
