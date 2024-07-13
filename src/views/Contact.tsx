export default function Contact() {
  return (
    <>
    <h1 className="text-center px-5 pt-10 text-4xl uppercase lg:p-10 lg:text-5xl">Contáctanos</h1>
     <form 
      className="mx-auto w-full max-w-screen-sm shadow-lg grid grid-cols-2 grid-rows-8 gap-5 p-10 pt-5 mb-20 rounded-2xl xs:grid-rows-7"
      action="https://formsubmit.co/db8e06899d780c750f034f6f69c58e8f"
      method="POST"
      >
        <h2 className="col-span-full flex items-center text-xl"><>Ingresa tus datos:</></h2>
        <div className="col-span-full xs:col-span-1">
          <input 
            type="text"
            className="shadow-inner w-full p-2 rounded-md bg-gray-100"
            placeholder="Nombre"
            name="name"
            required
          />
        </div>
        <div className="col-span-full xs:col-span-1">
          <input 
            type="text" 
            className="shadow-inner w-full p-2 rounded-md bg-gray-100"
            placeholder="Apellido"
            name="lastName"
            required
          />
        </div>
        <div className="col-span-full">
          <input 
            type="email"
            className="shadow-inner w-full p-2 rounded-md bg-gray-100"
            placeholder="Correo"
            name="email"
            required
          />
        </div>
        <div className="col-span-full">
          <input 
            type="text"
            className="shadow-inner w-full p-2 rounded-md bg-gray-100"
            placeholder="Asunto"
            name="subjet"
            required
          />
        </div>
        <div className="col-span-full row-span-2">
          <textarea
            className="shadow-inner w-full p-2 rounded-md bg-gray-100 no-resize"
            placeholder="Mensaje"
            name="message"
            rows={3}
            required
          ></textarea>
        </div>
        <div className="col-span-full flex justify-center">
          <button 
            type="submit"
            className="shadow hover:shadow-inner hover:bg-gray-200 ease transition-all duration-200 w-1/2 p-2 rounded-sm bg-gray-100"
          >
            Enviar
          </button>
        </div>
        <input type="hidden" name="_template" value="table"></input>
     </form>
    </>
  )
}
