/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable */
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { getSession } from "next-auth/react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";

export default function Publications(props) {
  const { publications } = props;
  const router = useRouter();
  console.log(publications);

  const handleClick = (publication) => {
    console.log(publication);
    router.push({
      pathname: "/EditPropertie",
      query: {
        address: publication.address,
        id: publication.id,
        description: publication.description,
        price: publication.price,
        city: publication.city,
        name: publication.name,
        capacity: publication.capacity,
      },
    });
  };

  return (
    <div
      id="main_container"
      className="mx-20 mt-3 flex h-screen max-h-full flex-col justify-center overflow-y-auto"
    >
      <div id="publication_list_container" className="overflow-y-auto">
        {
          //Si las publicaciones estan vacias, mostrar mensaje
          Object.keys(publications).length === 0 ? (
            <div className="flex justify-center">
              <h1 className="text-4xl text-black"> No tienes publicaciones</h1>
            </div>
          ) : (
            <ul id="publication_list">
              {publications.map((publication) => (
                <li key={publication.id}>
                  <div
                    id="publication"
                    className="mb-14 mt-2 flex w-full flex-row gap-5"
                  >
                    <div
                      id="image_container"
                      className="flex h-56 w-1/4 items-center justify-center rounded-2xl border border-blue-500 bg-gray-200 "
                    >
                      {
                        //Si no hay imagen, mostrar imagen por defecto
                        !publication.images[
                          Object.keys(publication.images)[0]
                        ] ? (
                          <img
                            src="/Logo 1.svg"
                            className="h-full w-full rounded-2xl object-contain"
                          />
                        ) : (
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_URL}${
                              publication.images[
                                Object.keys(publication.images)[0]
                              ]
                            }`}
                            className="y-screen h-auto w-screen object-cover"
                          />
                        )
                      }
                    </div>
                    <div
                      id="information_container"
                      className="flex w-3/4 flex-col gap-2"
                    >
                      <div
                        id="header_&_icons_container"
                        className="flex justify-between"
                      >
                        <div className="flex">
                          <h1 className="text-sm">Descripción</h1>
                        </div>
                        <div>
                          <EditIcon onClick={() => handleClick(publication)} />
                          <DeleteIcon />
                        </div>
                      </div>
                      <div
                        id="description"
                        className="h-4/5 w-full rounded-2xl border border-blue-500 p-3"
                      >
                        <p className="font-inter leading-17 text-base font-normal text-black">
                          {publication.description}
                        </p>
                      </div>
                      <div
                        id="information"
                        className="flex h-1/5 w-full flex-row justify-between rounded-2xl border border-blue-500 p-3"
                      >
                        <div
                          id="location"
                          className="flex max-h-full max-w-full items-center"
                        >
                          <p className="font-inter leading-17 text-base font-bold text-black">
                            {publication.city}
                          </p>
                        </div>
                        <div
                          id="price"
                          className="flex max-h-full max-w-full items-center"
                        >
                          <p className="font-inter leading-17 text-base font-normal text-black">
                            Precio: ${publication.price}
                          </p>
                        </div>
                        <div
                          id="rating_and_button_container"
                          className="flex max-h-full max-w-full items-center gap-9"
                        >
                          <div id="rating" className="flex gap-2">
                            <StarIcon className="text-yellow-500" />
                            <p>4.6</p>
                          </div>

                          <Button
                            variant="contained"
                            className="rounded-lg bg-blue-500 p-1"
                          >
                            Activa
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);
    if (!session) return { props: {} };
    const res = await fetch("http://15.223.120.64/post/all", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.user.jwt}`,
      },
    });
    if (!res.ok) {
      throw new Error("Error en la respuesta del servidor API");
    }
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("http://15.223.120.64/auth/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.user.jwt}`,
      },
    });
    const userData = await res2.json();

    const userPublications = data.filter(
      (publication) => publication.user === userData.id
    );

    return {
      props: {
        publications: userPublications || [],
      },
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
}
