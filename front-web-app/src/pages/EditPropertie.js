/* eslint-disable jsx-a11y/label-has-associated-control */
export default function EditPropertie() {
  return (
    <section className="">
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Image</label>
          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-black"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span className="">Subir un archivo</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1 text-black">o arrastrar y soltar</p>
              </div>
              <p className="text-xs text-black">PNG, JPG hasta 10MB</p>
            </div>
          </div>
        </div>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-10 sm:gap-2">
            <div className="sm:col-span-10">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Titulo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder=""
                required=""
              />
            </div>
            <div className="sm:col-span-10">
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Descripción
              </label>
              <textarea
                id="description"
                rows="8"
                className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder=""
              />
            </div>
            <div className="sm:col-span-10">
              <label
                htmlFor="direction"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Dirección
              </label>
              <input
                type="text"
                name="direction"
                id="direction"
                className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder=""
                required=""
              />
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="dormitorios"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Dormitorios
              </label>
              <input
                type="number"
                name="dormitorios"
                id="dormitorios"
                className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder=""
                required=""
              />
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="simples"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Camas simples
              </label>
              <input
                type="number"
                name="simples"
                id="simples"
                className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder=""
                required=""
              />
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="dobles"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Camas dobles
              </label>
              <input
                type="number"
                name="dobles"
                id="dobles"
                className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder=""
                required=""
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="dobles"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Fecha
              </label>
              <svg
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Precio diario
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder=""
                required=""
              />
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Telefono
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder=""
                required=""
              />
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full appearance-none rounded border border-blue-500 bg-white px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder=""
                required=""
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                className="inline-block w-[200px] rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-red-500 focus:ring-2 focus:ring-gray-500"
                type="button"
              >
                Eliminar publicación
              </button>
            </div>
            <div className="mt-5 flex items-center justify-end">
              <button
                className="inline-block w-[200px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-blue-500 focus:ring-2 focus:ring-gray-500"
                type="button"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
