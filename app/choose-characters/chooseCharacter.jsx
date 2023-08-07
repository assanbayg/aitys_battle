"use client";

import Image from "next/image";
import { useState } from "react";
import CourtroomScene from "@/components/aitys/CourtroomScene";
import Character from "@/components/aitys/Character";
import LoadingComponent from "@/components/shared/icons/loading-component";

const data = [
  {
    id: 0,
    name: "Akhmet Baitursynov",
    image: "/baitursynov.png",
    description:
      "Akhmet Baitursynov was a prominent Kazakh poet, writer, and public figure. He played a crucial role in the development of Kazakh literature and language reform.",
  },
  {
    id: 1,
    name: "Alikhan Bukeikhanov",
    image: "/bukeikhanov.png",
    description:
      "Alikhan Bukeikhanov is a prominent social and public figure, organizer, and the leader of the national-democratic party Alash, first leader of the Kazakh national “Alash Orda” government.",
  },
  {
    id: 2,
    name: "Mirzhakyp Dulatov",
    image: "/dulatov.png",
    description:
      "Mirzhakyp Dulatov was a Kazakh poet, writer, publicist, teacher, one of the leaders of “Alash Orda” government and the national liberation movement of Kazakhstan. ",
  },
  {
    id: 3,
    name: "Saken Seifullin",
    image: "/seifullin.png",
    description:
      "Saken Seyfullin was a pioneer of modern Kazakh literature, poet and writer, and national activist. Founder and first head of the Union of Writers of Kazakhstan, he was the author of controversial literature calling for greater independence of Kazakhs from Soviet and Russian power.",
  },
  {
    id: 4,
    name: "Sabit Mukanov",
    image: "/mukanov.png",
    description:
      "Sabit Mukanov is a classic of Kazakh literature, a poet, a social activist, an academic, and a head of the Writers' Union of Kazakhstan.",
  },
  {
    id: 5,
    name: "Maghzan Zhumabayev",
    image: "/zhumabayev.png",
    description:
      "Zhumabayev Magzhan Bekenovich was the well-known poet, one of the bright stars which have appeared in a firmament of the Kazakh literature at the beginning of the XX century. ",
  },
];

export default function ChooseCharacter() {
  const [firstCharacter, setFirstCharacter] = useState();
  const [secondCharacter, setSecondCharacter] = useState();
  const [firstSelect, setFirstSelect] = useState(true);
  const [secondSelect, setSecondSelect] = useState(false);
  const [replies, setReplies] = useState();
  const [topic, setTopic] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function onChange(e) {
    setTopic(e.target.value);
  }

  async function getAitys(e) {
    e.preventDefault();
    if (!firstCharacter || !secondCharacter || !topic || topic === "") {
      return;
    }

    try {
      setIsLoading(true); 
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
    } catch (error) {
      return;
    } finally {
      setIsLoading(false);
    }
  }

  const [selectedCharacter, setSelectedCharacter] = useState(data[0]);

  const getCharacter = (character) => {
    if (firstSelect) {
      if (secondCharacter == character) {
        return;
      }
      setFirstCharacter(character);
      setFirstSelect(false);
      setSecondSelect(true);
    } else if (secondSelect) {
      if (firstCharacter == character) {
        return;
      }
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
          topic={topic}
          replies={replies}
        />
      ) : (
        <>
          <div className="my-2 flex flex-col content-between items-center gap-2 md:flex-row md:gap-10">
            <div className="flex gap-4 md:block md:gap-0">
              <div onClick={() => setFirstSelect(true)}>
                <Character
                  image={firstCharacter ? firstCharacter.image : "/mark.png"}
                  name={
                    firstCharacter ? firstCharacter.name : "First Character"
                  }
                />
              </div>
              <div
                onClick={() => setSecondSelect(true)}
                className="block md:hidden"
              >
                <Character
                  second={true}
                  image={secondCharacter ? secondCharacter.image : "/mark.png"}
                  name={
                    secondCharacter ? secondCharacter.name : "Second character"
                  }
                />
              </div>
            </div>
            <div className="blur-box mt-4 flex flex-col gap-2 rounded-xl px-5 py-8 md:mt-0 md:gap-3">
              <p className="hidden text-center text-3xl font-bold md:block">
                Topic
              </p>
              <input
                className="rounded-xl px-4 py-2"
                placeholder="Enter topic"
                value={topic}
                onChange={onChange}
              />
              <button
                onClick={getAitys}
                className="hover-button h-14 rounded-2xl bg-[#F08A8A] text-2xl"
              >
                Start
              </button>
              <p className="text-center text-sm text-white text-opacity-50">
                Input and output should be in English
                <br />
                Айтыс ағылшын тілде болады
              </p>
            </div>
            <div
              onClick={() => setSecondSelect(true)}
              className="hidden md:block"
            >
              <Character
                second={true}
                image={secondCharacter ? secondCharacter.image : "/mark.png"}
                name={
                  secondCharacter ? secondCharacter.name : "Second character"
                }
              />
            </div>
          </div>
          {isLoading && (
            <div className="overlay">
              <LoadingComponent />{" "}
            </div>
          )}
          <div className="hidden content-around items-center px-60 py-8 md:flex">
            <div>
              {isLoading ? (
                <div></div>
              ) : (
                <div
                  key={selectedCharacter.id}
                  className="my-8 rounded-3xl bg-rose-200 px-10 py-5"
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
            <section className="grid grid-cols-3 md:grid-cols-6">
              {data.map((character, index) => (
                <div
                  key={character.id}
                  className={`character-profile border-2 border-solid border-black
                  bg-[#9e9e9e]
                  ${index === 0 ? "rounded-l-xl" : ""} ${
                    index === 5 ? "rounded-r-xl" : ""
                  }`}
                  onClick={() => getCharacter(character)}
                >
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={240}
                    height={300}
                  />

                  <div className="bg-red-400">
                    <p className="text-center text-sm font-bold uppercase md:text-base">
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
