"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ChooseCharacter() {
  useEffect(() => {
    console.log(data);
  }, []);

  const [data, setData] = useState([
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
        "Alikhan Bukeikhanov was a Kazakh composer and musician. He is known for his contributions to Kazakh classical music and his efforts in preserving traditional Kazakh music.",
    },
    {
      name: "Mirzhakyp Dulatov",
      image: "/dulatov.png",
      description:
        "Alikhan Bukeikhanov was a Kazakh composer and musician. He is known for his contributions to Kazakh classical music and his efforts in preserving traditional Kazakh music.",
    },
    {
      name: "Saken Seifullin",
      image: "/seifullin.png",
      description:
        "Birzhan Sal was a Kazakh akyn (poet-musician) and a key figure in Kazakh oral literature. His poetry and musical performances played a significant role in shaping Kazakh cultural identity.",
    },
    {
      name: "Sabit Mukanov",
      image: "/mukanov.png",
      description:
        "Sara is  poet, musician, folk poet, musician, drummer. He came from the Atalik Kaptagai section of the Matai clan of the Naiman tribe.",
    },
  ]);

  const [selectedCharacter, setSelectedCharacter] = useState(data[0]);

  const getCharacter = (character) => {
    console.log("Character Data", character);

    setSelectedCharacter(character);
  };

  return (
    <>
      <div className="container ">
        <div className="flex content-around items-center px-60 py-8">
          <div>
            {(selectedCharacter === data.length) === 0 ? (
              <div>
                <p>Loading...</p>
              </div>
            ) : (
              <div
                key={selectedCharacter.id}
                className="mx-5 rounded-3xl border-4  bg-red-50 p-3  text-fuchsia-950"
              >
                <h1 className="text-4xl ">{selectedCharacter.name}</h1>
                <p className="text-xl">{selectedCharacter.description}</p>
              </div>
            )}
          </div>
          <button className="h-14 rounded-2xl bg-[#F08A8A] px-12 py-3 text-2xl text-white">
            Select
          </button>
        </div>

        <main>
          <section className="grid grid-cols-6">
            {data.map((character) => (
              <div
                key={character.id}
                className="character-profile border-2 border-solid border-black"
                onClick={() => getCharacter(character)}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  // width={240}
                  // height={300}
                />
                {/* <img src={character.image} /> */}

                <div className="bg-red-200">
                  <p className="text-center font-bold uppercase text-white">
                    {character.name}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
