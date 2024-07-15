import { Link, useParams } from "react-router-dom";

export default function Thanks() {
  const { form } = useParams()

  return (
    <div className="flex flex-col justify-center items-center h-hero-lg text-lg px-5 sm:text-2xl mx-auto max-w-screen-sm text-center gap-5">
      <h1 className="font-black text-3xl">Gracias por poner tu confianza en Jomer.</h1>
      {form === 'customizationForm' ? (
        <p>En un plazo máximo de 24 horas, recibirás una propuesta personalizada a tu correo con las características de tu pieza.</p>
      ) : (
        <p>En un plazo máximo de 24 horas, te mandaremos una respuesta.</p>
      )}
      <Link className="shadow hover:shadow-inner text-lg hover:bg-gray-200 ease transition-all duration-200 w-1/2 p-2 rounded-md bg-gray-100" to={'/'}>Volver a Inicio</Link>
    </div>
  )
}
