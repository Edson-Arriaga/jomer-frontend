import { Transition } from '@headlessui/react'
import Navegation from './Navegation'
import IconLinks from './IconLinks'

type ModalProps = {
    isActiveModal: boolean
    setIsActiveModal : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({isActiveModal, setIsActiveModal} : ModalProps) {
    return (
        <Transition
            show={isActiveModal}
            enter="transition-all duration-1000"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"

            leave="transition-all duration-1000"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
        >
            <div className='fixed inset-0 shadow-md text-left z-50 bg-white px-10 py-10'>
                <button
                    onClick={() => setIsActiveModal(false)}
                >
                    <img 
                        src="/cross-icon.svg" 
                        alt="Logo menu"
                        loading='lazy' 
                        className='invert w-10 hover:w-11 transition-all ease' 
                    />
                </button>

                <Navegation
                    setIsActiveModal={setIsActiveModal}
                />
                <IconLinks/>
            </div>
        </Transition>
    )
}
