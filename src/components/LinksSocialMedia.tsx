export default function LinksSocialMedia() {
  return (
    <div className="flex justify-center items-center lg:h-full xl:ml-36">
        <a 
            href="https://www.instagram.com/jomer.mx/" 
            target='_blank'
            className='w-11 h-11 hover:scale-105 ease transition-transform'
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
    </div>
  )
}
