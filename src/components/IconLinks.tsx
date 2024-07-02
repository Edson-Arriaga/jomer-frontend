import { Link } from "react-router-dom";
import { Dispatch } from "react"

type IconLinksProps = {
    setIsActiveModal: Dispatch<React.SetStateAction<boolean>>
}

export default function IconLinks({setIsActiveModal} : IconLinksProps) {
  return (
    <div className="flex justify-center items-center gap-3 lg:justify-end lg:h-full lg:mr-8">
        <a 
            href="https://www.instagram.com/jomer.mx/" 
            target='_blank'
            className='w-11 h-11 hover:scale-105 ease transition-transform'
            onChange={() => setIsActiveModal(false)}
        >
            <img src="/instagram-icon.svg" alt="Instagram logo"/>
        </a>
        <a 
            href="https://www.facebook.com/Jomeroficial/"
            target='_blank'
            className='w-11 h-11 hover:scale-105 ease transition-transform mb-1'
        >
            <img src="/facebook-icon.svg" alt="Instagram logo"/>
        </a>
        <Link
            to={'/wish-list'}
            className='w-11 h-11 hover:scale-105 ease transition-transform mb-1'

        >
            <img src="/wishListEmpty-icon.svg" alt="Instagram logo"/>
        </Link>
    </div>
  )
}
