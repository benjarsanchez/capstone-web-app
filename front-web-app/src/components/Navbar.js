/* eslint-disable */
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import BasicMenu from "./MenuDropdown";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="mt-2 w-full">
      <nav
        id="header"
        className="top-10 z-30 flex w-full border-t-2 border-blue-400 bg-white py-1 shadow-lg"
      >
        <div className="mt-0 flex w-full justify-between px-6 py-2">
          <div id="dropdown_main_container" className="w-1/3">
            <div
              id="dropdown_container"
              className="ml-auto items-center md:w-full"
            >
              <BasicMenu />
            </div>
          </div>
          <div id="menu_icons_container" className="w-1/3">
            <nav className="mx-auto">
              <ul className="items-center justify-center pt-4 text-base text-blue-600 md:flex md:pt-0">
                <li className="mr-10">
                  <Link href="/" className="flex flex-col items-center">
                    <img src="/Home.svg" alt="Inicio" className="h-5 w-5" />
                    <span className="text-xs">Inicio</span>
                  </Link>
                </li>
                <li className="mr-4">
                  <Link href="/" className="flex flex-col items-center">
                    <img src="/Filter.svg" alt="Inicio" className="h-5 w-5" />
                  </Link>
                </li>
                <li className="mr-10">
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-1"
                  />
                </li>
                <li>
                  <Link href="/" className="flex flex-col items-center">
                    <img src="/User.svg" alt="Inicio" className="h-5 w-5" />
                    <span className="text-xs text-black">Usuario</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div id="buttons_container" className="flex w-1/3 justify-end">
            <Link
              className="mr-4 rounded border border-gray-300 bg-transparent p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-700"
              href="/signup"
            >
              SignUp
            </Link>

            {session?.user ? (
              <button
                type="submit"
                className="mr-4 rounded border border-gray-300 bg-transparent p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-700"
                onClick={() => signOut()}
              >
                SignOut
              </button>
            ) : (
              <Link
                type="submit"
                className="mr-4 rounded border border-gray-300 bg-transparent p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-700"
                href="/login"
              >
                SignIn
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
