export default function Contact() {
    return (
        <>
            <h1 className="text-center px-5 pt-10 text-4xl pb-10 lg:p-10 lg:text-5xl uppercase">Contáctanos</h1>
            <form 
                className="mx-2 sm:mx-auto max-w-screen-sm shadow-lg grid grid-cols-2 gap-5 p-5 lg:p-10 mb-20 rounded-xl bg-white border-y-[1.5rem] border-black"
                action="https://formsubmit.co/db8e06899d780c750f034f6f69c58e8f"
                method="POST"
            >
                <h2 className="col-span-full flex items-center text-xl"><>Ingresa tus datos:</></h2>
                <div className="col-span-full xs:col-span-1">
                <input 
                    type="text"
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100 border-l-4 border-black"
                    placeholder="Nombre"
                    name="name"
                    required
                />
                </div>
                <div className="col-span-full xs:col-span-1">
                <input 
                    type="text" 
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100 border-l-4 border-black"
                    placeholder="Apellido"
                    name="lastName"
                    required
                />
                </div>
                <div className="col-span-full">
                <input 
                    type="email"
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100 border-l-4 border-black"
                    placeholder="Correo"
                    name="email"
                    required
                />
                </div>
                <div className="col-span-full">
                <input 
                    type="text"
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100 border-l-4 border-black"
                    placeholder="Asunto"
                    name="subjet"
                    required
                />
                </div>
                <div className="col-span-full row-span-2">
                <textarea
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100 no-resize border-l-4 border-black"
                    placeholder="Mensaje"
                    name="message"
                    rows={3}
                    required
                ></textarea>
                </div>
                <div className="col-span-full flex justify-center">
                <button 
                    type="submit"
                    className="shadow hover:shadow-inner hover:bg-gray-800 ease transition-colors py-2 px-6 rounded-xl bg-black text-balck uppercase text-white"
                >
                    Enviar
                </button>
                </div>
                <input type="hidden" name="_template" value="table"></input>
                <input type="hidden" name="_next" value="https://jomer.netlify.app/#gracias/contactForm"></input>
            </form>
        </>
    )
}
