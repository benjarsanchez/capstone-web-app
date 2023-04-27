/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRef } from "react";

function Login() {
  const email = useRef(null);
  const password = useRef(null);

  const onSubmit = async () => {
    await signIn("credentials", {
      password: password.current.value.toString(),
      email: email.current.value,
      redirect: true,
      callbackUrl: "https://main.d1rotwpp4wrqfm.amplifyapp.com",
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            id="email"
            type="text"
            placeholder="usuario@correo.cl"
            ref={email}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="password"
            type="text"
          >
            Contraseña
          </label>
          <input
            className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            id="password"
            type="password"
            placeholder="*********"
            ref={password}
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <Link href="/signup" className="text-sm font-medium text-blue-500">
            Crear Usuario
          </Link>
          <Link href="/about" className="text-sm font-medium text-blue-500">
            Olvidé mi contraseña
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
            onClick={onSubmit}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
