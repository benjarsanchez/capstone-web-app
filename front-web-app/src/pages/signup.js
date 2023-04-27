import Link from "next/link";
import Image from "next/image";

function SignUp() {
  return (
    <div className="flex h-screen items-center justify-center pt-20">
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="username"
          >
            Nombre
          </label>
          <input
            className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            id="username"
            type="text"
            placeholder="usuario"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            id="email"
            type="email"
            placeholder="usuario@correo.cl"
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            id="password"
            type="password"
            placeholder="*********"
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="password"
          >
            Confirmar contraseña
          </label>
          <input
            className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            id="password"
            type="password"
            placeholder="*********"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <Link href="/login" className="text-sm font-medium text-blue-500">
            ¿Ya tienes usuario? Inicia sesión
          </Link>
        </div>
        <div className="mb-4 flex justify-center space-x-4">
          <button
            className="mr-2 flex w-1/2 items-center justify-start rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-blue-500 focus:ring-2 focus:ring-gray-500"
            type="button"
          >
            <Image
              src="/Facebook.svg"
              alt="Facebook icon"
              width={20}
              height={20}
              className="mr-5 h-5 w-5 shrink-0 rounded-full"
            />
            Facebook
          </button>
          <button
            className="flex w-1/2 items-center justify-start rounded-full border border-gray-400 bg-white px-4 py-2 font-bold text-gray-700 hover:bg-gray-200 focus:outline-blue-500 focus:ring-2 focus:ring-gray-500"
            type="button"
          >
            <Image
              src="/Google.svg"
              alt="Google icon"
              width={20}
              height={20}
              className="mr-7 h-5 w-5 shrink-0 rounded-full"
            />
            Google
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="inline-block w-[200px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-blue-500 focus:ring-2 focus:ring-gray-500"
            type="button"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
