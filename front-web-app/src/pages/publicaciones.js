function Publications() {
  const publications = [
    {
      id: 1,
      title: "Casa en la playa",
      description: "Hermosa casa en la playa con vista al mar.",
      price: "$150 por noche",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Departamento en la ciudad",
      description: "Cómodo departamento en el centro de la ciudad.",
      price: "$100 por noche",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Casa en la montaña",
      description: "Acogedora casa en la montaña rodeada de naturaleza.",
      price: "$120 por noche",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Casa en la playa",
      description: "Hermosa casa en la playa con vista al mar.",
      price: "$150 por noche",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Casa en la playa",
      description: "Hermosa casa en la playa con vista al mar.",
      price: "$150 por noche",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Casa en la playa",
      description: "Hermosa casa en la playa con vista al mar.",
      price: "$150 por noche",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Casa en la playa",
      description: "Hermosa casa en la playa con vista al mar.",
      price: "$150 por noche",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Casa en la playa",
      description: "Hermosa casa en la playa con vista al mar.",
      price: "$150 por noche",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="mt-16">
      <h1>Lista de publicaciones</h1>
      <ul className="divide-y divide-gray-200">
        {publications.map((publication) => (
          <li key={publication.id} className="flex py-4">
            <div className="flex h-40 w-40 items-center justify-center bg-gray-200">
              <img
                src={publication.image}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="ml-3 flex flex-col justify-center">
              <p className="text-sm font-medium text-gray-900">
                {publication.title}
              </p>
              <p className="text-sm text-gray-500">{publication.description}</p>
              <p className="text-sm text-gray-500">{publication.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Publications;
