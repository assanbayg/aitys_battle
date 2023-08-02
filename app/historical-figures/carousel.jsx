import Image from "next/image";

const data = [
  {
    name: "Akhmet Baitursynov",
    image: "/baitursynov.png",
    description:
      "Akhmet Baitursynov was a prominent Kazakh poet, writer, and public figure. He played a crucial role in the development of Kazakh literature and language reform.",
  },
  {
    name: "Alikhan Bukeikhanov",
    image: "/bukeikhanov.png",
    description:
      "Alikhan Bukeikhanov is a prominent social and public figure, organizer, and the leader of the national-democratic party Alash, first leader of the Kazakh national “Alash Orda” government.",
  },
  {
    name: "Mirzhakyp Dulatov",
    image: "/dulatov.png",
    description:
      "Mirzhakyp Dulatov was a Kazakh poet, writer, publicist, teacher, one of the leaders of “Alash Orda” government and the national liberation movement of Kazakhstan. ",
  },
  {
    name: "Saken Seifullin",
    image: "/seifullin.png",
    description:
      "Saken Seyfullin was a pioneer of modern Kazakh literature, poet and writer, and national activist. Founder and first head of the Union of Writers of Kazakhstan, he was the author of controversial literature calling for greater independence of Kazakhs from Soviet and Russian power.",
  },
  {
    name: "Sabit Mukanov",
    image: "/mukanov.png",
    description:
      "Sabit Mukanov is a classic of Kazakh literature, a poet, a social activist, an academic, and a head of the Writers' Union of Kazakhstan.",
  },
  {
    name: "Maghzan Zhumabayev",
    image: "/zhumabayev.png",
    description:
      "Zhumabayev Magzhan Bekenovich was the well-known poet, one of the bright stars which have appeared in a firmament of the Kazakh literature at the beginning of the XX century. ",
  },
];

export default function CustomCarousel() {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Historical Figures</h1>
      <div className="flex">
        {data.map((item) => (
          <div key={item.name} className="flex flex-col justify-end">
            <Image width={300} height={300} src={item.image} alt={item.name} />
            <h2 className="mb-2 mt-4 text-lg font-bold">{item.name}</h2>
            <p className="hidden">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
