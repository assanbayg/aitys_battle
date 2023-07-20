"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import CourtroomScene from "@/components/aitys/CourtroomScene";

export default function ChooseCharacter() {
  const [firstCharacter, setFirstCharacter] = useState();
  const [secondCharacter, setSecondCharacter] = useState();
  const [firstSelect, setFirstSelect] = useState(true);
  const [secondSelect, setSecondSelect] = useState(false);
  const [replies, setReplies] = useState([]);
  const [topic, setTopic] = useState("");
  const [isGenerated, setIsGenerated] = useState();
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
      image: "/zhumabayev.png",
      description:
        "Zhumabayev Magzhan Bekenovich was the well-known poet, one of the bright stars which have appeared in a firmament of the Kazakh literature at the beginning of the XX century. ",
    },
  ]);

  function onChange(e) {
    setTopic(e.target.value);
  }

  async function getAitys(e) {
    e.preventDefault();

    if (topic == "") {
      console.log("SUCK IT");
      return;
    }

    if (!firstCharacter || !secondCharacter || !topic) {
      console.log("Please fill in all the required fields");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/aitys`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic,
            first_figure: firstCharacter.name,
            second_figure: secondCharacter.name,
          }),
        },
      );

      const newReplies = await response.json();
      setReplies(newReplies);
      setIsGenerated(true);
      console.log(newReplies);
    } catch (error) {
      console.log("Error connecting to the backend", error);
    }
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
      {isGenerated ? (
        <CourtroomScene
          character1={firstCharacter}
          character2={secondCharacter}
          replies={replies}
        />
      ) : (
        <>
          <div className="my-2 flex content-between items-center gap-10">
            <div onClick={() => setFirstSelect(true)} className="h-60">
              <Image
                alt={firstCharacter ? firstCharacter.name : "First Character"}
                src={firstCharacter ? firstCharacter.image : "/unknown.png"}
                height={240}
                width={180}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-center text-3xl">Topic</p>
              <input
                className="p-1"
                placeholder="Enter topic"
                value={topic}
                onChange={onChange}
              />
              <button
                onClick={getAitys}
                className="h-14 rounded-2xl bg-[#F08A8A] text-2xl "
              >
                Start
              </button>
            </div>
            <div onClick={() => setSecondSelect(true)}>
              <Image
                alt={secondCharacter ? secondCharacter.name : "unknown.png"}
                src={secondCharacter ? secondCharacter.image : "/unknown.png"}
                height={240}
                width={180}
              />
            </div>
          </div>
          <div className="flex content-around items-center px-60 py-8s">
            <div>
              {(selectedCharacter === data.length) === 0 ? (
                <div>
                  <p>Loading...</p>
                </div>
              ) : (
                <div
                  key={selectedCharacter.id}
                  className="mx-5 rounded-3xl border-4  bg-red-50 p-3  "
                >
                  <h1 className="text-4xl text-fuchsia-950">
                    {selectedCharacter.name}
                  </h1>
                  <p className="text-xl text-fuchsia-950">
                    {selectedCharacter.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          <main>
            <section className="grid grid-cols-6">
              {data.map((character) => (
                <div
                  key={character.id}
                  className="character-profile border-2 border-solid border-black bg-[#9e9e9e]"
                  onClick={() => getCharacter(character)}
                >
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={240}
                    height={300}
                  />

                  <div className="bg-red-400">
                    <p className="text-center font-bold uppercase">
                      {character.name}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </main>
        </>
      )}
    </>
  );
}
