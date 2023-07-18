"use client";

import { useState, useEffect } from "react";
import CourtroomScene from "./CourtroomScene";

export default function CreateDebate() {
  const [topic, setTopic] = useState("Justice");
  const [firstFigure, setFirstFigure] = useState("Alikhan Bukeikhanov");
  const [secondFigure, setSecondFigure] = useState("Akhmet Baitursynov");
  const [isGenerated, setIsGenerated] = useState(true);
  const [replies, setReplies] = useState([
    {
      "Alikhan Bukeikhanov":
        "Oh, my dear friend, let me sing you a song,\nAbout corruption, a topic so wrong.\nAs the former President of Kazakhstan, I've seen it all,\nAnd I'll share my perspective, standing tall.\nCorruption, a cancer that eats at the core,\nA disease that we must fight, forevermore.\nBut my dear friend, let me tell you this,\nCorruption is not just a Kazakhstani abyss.\nIt's a global issue, spreading its roots,\nIn every corner of the world, corrupt pursuits.\nFrom politicians to businessmen, no one is spared,\nCorruption's grip is tight, it's everywhere.\nBut fear not, my friend, for there is hope,\nTogether we can fight, we can cope.\nTransparency and accountability, the keys to success,\nLet's join hands, let's clean up this mess.\nSo let us stand united, against corruption we'll fight,\nWith justice and integrity, we'll make things right.\nOh, my dear friend, let us sing this song,\nAnd together, we'll prove corruption wrong.",
      "Akhmet Baitursynov":
        "Oh, my dear partner, let me sing you a song,\nOf corruption and its dangers, that I've known for so long.\nIn the Soviet Union, I ruled with an iron fist,\nFor I believed corruption threatened our unity, it did persist.\nBut you, my friend, seem to doubt my intentions,\nLet me enlighten you with some historical mentions.\n\nFrom the depths of history, corruption has always thrived,\nUndermining nations, tearing them apart, leaving them deprived.\nIt seeps into the veins of power, poisoning the soul,\nA cancerous disease that consumes, taking its toll.\n\nI fought against corruption, with all my might,\nFor I knew its consequences, its devastating blight.\nI purged the ranks, removed the traitors, the thieves,\nBut alas, my efforts were met with disbelief.\n\nYou question my methods, my iron-fisted rule,\nBut tell me, my friend, what would you do?\nWhen faced with a nation on the brink of collapse,\nWould you sit idly by, or take action, perhaps?\n\nI may have been harsh, I may have been severe,\nBut I did what I believed was necessary, my dear.\nFor corruption is a poison that eats away at the core,\nAnd I, Baitursynov, would not let it destroy us anymore.\n\nSo listen to my song, my friend, and heed my words,\nCorruption is a danger, a threat that must be deterred.\nIn the Soviet Union, we fought against its might,\nFor a united nation, strong and shining bright.",
    },
    {
      "Akhmet Baitursynov": "Hmmm",
      "Alikhan Bukeikhanov": "Well",
    },
  ]);

  useEffect(() => {
    console.log(replies);
  });

  const handleSubmit = () => {
    setIsGenerated(true);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!firstFigure || !secondFigure || !topic) {
  //     console.log("Please fill in all the required fields");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:8000/aitys", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         topic,
  //         first_figure: firstFigure,
  //         second_figure: secondFigure,
  //       }),
  //     });

  //     const data = await response.json();
  //     setReplies(data);
  //     console.log(data);
  //     setIsGenerated(true);
  //   } catch (error) {
  //     console.log("Error connecting to the backend", error);
  //   }
  // };

  return (
    <div className="flex flex-col items-center">
      {isGenerated ? (
        <CourtroomScene
          character1={firstFigure}
          character2={secondFigure}
          replies={replies}
        />
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="my-5 text-3xl font-bold">Create Aitys</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-y-3"
          >
            <div className="flex flex-col items-end gap-y-2">
              <div>
                <label className="pr-4" htmlFor="topic">
                  Topic:
                </label>
                <input
                  type="text"
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div>
                <label className="pr-4" htmlFor="firstFigure">
                  First Figure:
                </label>
                <input
                  type="text"
                  id="firstFigure"
                  value={firstFigure}
                  onChange={(e) => setFirstFigure(e.target.value)}
                />
              </div>
              <div>
                <label className="pr-4" htmlFor="secondFigure">
                  Second Figure:
                </label>
                <input
                  type="text"
                  id="secondFigure"
                  value={secondFigure}
                  onChange={(e) => setSecondFigure(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded-full bg-yellow-800 p-1.5 px-4 text-amber-50 transition-all hover:bg-white hover:text-black"
            >
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
