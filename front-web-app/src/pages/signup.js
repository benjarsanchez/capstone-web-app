/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

function SignUp() {
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const username = useRef(null);
  const router = useRouter();

  const onSubmit = async () => {
    try {
      if (password.current.value !== confirmPassword.current.value) {
        alert("Las contraseñas no coinciden");
        return;
      }
      const res = await fetch("http://15.223.120.64/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username.current.value,
          email: email.current.value,
          password: password.current.value,
          phone_number: "+56911111111",
        }),
      });
      const response = await res.json();
      console.log(response);
      router.push("/login");
    } catch (error) {
      alert(
        "Ocurrió un error durante el registro. Por favor intenta de nuevo más tarde."
      );
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
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
            ref={username}
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
            ref={email}
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
            ref={password}
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
            ref={confirmPassword}
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
            onClick={onSubmit}
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
