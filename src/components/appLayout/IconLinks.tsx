import { Link } from "react-router-dom";
import { Dispatch } from "react"
import { usePiecesStore } from "../../store";

type IconLinksProps = {
    setIsActiveModal: Dispatch<React.SetStateAction<boolean>>
}

export default function IconLinks({setIsActiveModal} : IconLinksProps) {
    const isFavoritePiecesEmpty = usePiecesStore(state => state.favoritePieces.length === 0)

    return (
        <div className="flex justify-center items-center gap-3 lg:justify-end lg:h-full lg:mr-10">
            <a 
                href="https://www.instagram.com/jomer.mx/" 
                target='_blank'
                className='w-9 h-9 hover:scale-105 ease transition-transform'
                onClick={() => setIsActiveModal(false)}
            >
                <img src="/images/icons/instagram-icon.svg" alt="Instagram logo"/>
            </a>
            <a 
                href="https://www.facebook.com/Jomeroficial/"
                target='_blank'
                className='w-9 h-9 hover:scale-105 ease transition-transform mb-1'
                onClick={() => setIsActiveModal(false)}
            >
                <img src="/images/icons/facebook-icon.svg" alt="Instagram logo"/>
            </a>
            <Link
                to={'/wish-list'}
                className='w-9 h-9 hover:scale-105 ease transition-transform mb-1'
                onClick={() => setIsActiveModal(false)}
            >
                <img src={`/images/icons/${isFavoritePiecesEmpty ? 'heart-empty.svg' : 'heart-full.svg'}`} alt="heart-full-icon.svg"/>
            </Link>
        </div>
    )
}
