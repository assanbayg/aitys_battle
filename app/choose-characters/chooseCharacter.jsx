"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ChooseCharacter() {
  const [firstCharacter, setFirstCharacter] = useState();
  const [secondCharacter, setSecondCharacter] = useState();
  const [firstSelect, setFirstSelect] = useState(true);
  const [secondSelect, setSecondSelect] = useState(false);
  const [topic, setTopic] = useState("");
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
        "Mirzhakyp Dulatov was a Kazakh poet, writer, publicist, teacher, one of the leaders of ‘Alash Orda’ government and the national liberation movement of Kazakhstan. ",
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
      image: "zhumabayev.png",
      description:
        "Zhumabayev Magzhan Bekenovich was the well-known poet, one of the bright stars which have appeared in a firmament of the Kazakh literature at the beginning of the XX century. ",
    },
  ]);

  function onChange(e) {
    setTopic(e.target.value);
  }

  const [selectedCharacter, setSelectedCharacter] = useState(data[0]);

  const getCharacter = (character) => {
    console.log("Character Data", character);
    if (firstSelect) {
      setFirstCharacter(character);
      setFirstSelect(false);
      setSecondSelect(true);
    }
    if (secondSelect) {
      setSecondCharacter(character);
      setSecondSelect(false);
    }
    setSelectedCharacter(character);
  };

  return (
    <>
      <div className="my-2 flex content-between items-center gap-10">
        <div onClick={() => setFirstSelect(true)} className="h-60">
          <img
            className="h-60 w-auto"
            src={firstCharacter ? firstCharacter.image : "/unknown.png"}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-center text-3xl text-white">Topic</p>
          <input
            className="p-1"
            placeholder="Enter topic"
            value={topic}
            onChange={onChange}
          />
          <button className="h-14 rounded-2xl bg-[#F08A8A] text-2xl text-white">
            Start
          </button>
        </div>
        <div onClick={() => setSecondSelect(true)}>
          <img
            className="h-60 w-auto"
            src={secondCharacter ? secondCharacter.image : "/unknown.png"}
          />
        </div>
      </div>
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
    </>
  );
}
