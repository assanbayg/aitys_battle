"use client";

import { useState } from "react";

export default function CreateDebate() {
  const [topic, setTopic] = useState("Revolution");
  const [firstFigure, setFirstFigure] = useState("Stalin");
  const [secondFigure, setSecondFigure] = useState("Lenin");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the required fields are filled
    if (!firstFigure || !secondFigure) {
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

      if (response.ok) {
        // Handle success
        console.log("Debate created successfully!");
        // You can redirect the user or display a success message
      } else {
        // Handle error
        const responseData = await response.json();
        console.log("Failed to create debate:", responseData);
        // You can display an error message to the user based on the responseData
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
    </div>
  );
}
