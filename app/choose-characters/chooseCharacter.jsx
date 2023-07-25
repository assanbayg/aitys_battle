"use client";

import Image from "next/image";
import { useState } from "react";
import CourtroomScene from "@/components/aitys/CourtroomScene";
import Character from "@/components/aitys/Character";
import LoadingComponent from "@/components/shared/icons/loading-component";

export default function ChooseCharacter() {
  const [firstCharacter, setFirstCharacter] = useState();
  const [secondCharacter, setSecondCharacter] = useState();
  const [firstSelect, setFirstSelect] = useState(true);
  const [secondSelect, setSecondSelect] = useState(false);
  const [replies, setReplies] = useState();
  const [topic, setTopic] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
  ]);

  function onChange(e) {
    setTopic(e.target.value);
  }

  async function getAitys(e) {
    e.preventDefault();

    if (topic == "") {
      return;
    }

    if (!firstCharacter || !secondCharacter || !topic) {
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
      // console.log(newReplies);
    } catch (error) {
      // console.log("Error connecting to the backend", error);
    } finally {
      setIsLoading(false);
    }
  }

  const [selectedCharacter, setSelectedCharacter] = useState(data[0]);

  const getCharacter = (character) => {
    // console.log("Character Data", character);
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
            <div onClick={() => setFirstSelect(true)}>
              <Character
                image={firstCharacter ? firstCharacter.image : "/mark.png"}
                name={firstCharacter ? firstCharacter.name : "First Character"}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-center text-3xl">Topic</p>
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
            </div>
            <div onClick={() => setSecondSelect(true)}>
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

          <div className="py-8s flex content-around items-center px-60">
            <div>
              {isLoading ? (
                <div></div>
              ) : (
                <div
                  key={selectedCharacter.id}
                  className="my-8 rounded-3xl border-4  bg-red-50 p-3  "
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
