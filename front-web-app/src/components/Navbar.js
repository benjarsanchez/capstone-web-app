import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div className="fixed top-0 mt-4 w-full">
      <nav
        id="header"
        className="top-10 z-30 w-full border-t-2 border-blue-400 bg-white py-1 shadow-lg"
      >
        <div className="mt-0 flex w-full items-center justify-between px-6 py-2">
          <div
            className="order-3 hidden w-full md:order-1 md:flex md:w-auto md:items-center"
            id="menu"
          >
            <nav>
              <ul className="items-center justify-between pt-4 text-base text-blue-600 md:flex md:pt-0">
                <li>
                  <Link
                    className="inline-block px-4 py-2 text-lg font-medium no-underline hover:text-black lg:-ml-2"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block px-4 py-2 text-lg font-medium no-underline hover:text-black lg:-ml-2"
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block px-4 py-2 text-lg font-medium no-underline hover:text-black lg:-ml-2"
                    href="/publicaciones"
                  >
                    Publicaciones
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="order-2 mr-0 flex flex-wrap items-center justify-end md:order-3 md:mr-4"
            id="nav-content"
          >
            <div className="flex w-full items-center md:w-full">
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
                <button
                  type="submit"
                  className="mr-4 rounded border border-gray-300 bg-transparent p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => signIn()}
                >
                  SignIn
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
