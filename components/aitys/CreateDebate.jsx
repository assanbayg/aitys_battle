"use client";

import { useState, useEffect } from "react";
import CourtroomScene from "./CourtroomScene";

export default function CreateDebate() {
  const [topic, setTopic] = useState("Justice");
  const [firstFigure, setFirstFigure] = useState("Tokayev");
  const [secondFigure, setSecondFigure] = useState("Nazarbayev");
  const [isGenerated, setIsGenerated] = useState(false);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    console.log(replies);
  });
  const generateAitys = async (id, topic, firstFigure, secondFigure) => {
    try {
      const response = await fetch(
        `http://localhost:8000/aitys/${id}/response`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            topic: topic,
            first_figure: firstFigure,
            second_figure: secondFigure,
          }),
        },
      );

      const data = await response.json();
      setReplies(data);
      console.log(data);
      setIsGenerated(true);
    } catch (error) {
      console.log("Error connecting to the backend", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstFigure || !secondFigure || !topic) {
      console.log("Please fill in all the required fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/aitys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          first_figure: firstFigure,
          second_figure: secondFigure,
        }),
      });

      const data = await response.json();
      const id = data.id;
      console.log(id);

      if (id.trim().length !== 0) {
        await generateAitys(id, topic, firstFigure, secondFigure);
      }
    } catch (error) {
      console.log("Error connecting to the backend", error);
    }
  };

  return (
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

      {isGenerated && (
        <CourtroomScene
          character1={firstFigure}
          character2={secondFigure}
          replies={replies}
        />
      )}
    </div>
  );
}
