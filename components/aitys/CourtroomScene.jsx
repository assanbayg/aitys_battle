"use client";

import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import Reply from "./Reply";

const CourtroomScene = ({ character1, character2, replies }) => {
  const [currentReplyIndex, setCurrentReplyIndex] = useState(0);
  const [currentCharacter, setCurrentCharacter] = useState(1);

  const handlePrevClick = () => {
    if (currentCharacter === 2) {
      setCurrentCharacter(1);
    } else if (currentReplyIndex > 0) {
      setCurrentReplyIndex(currentReplyIndex - 1);
      setCurrentCharacter(2);
    }
  };

  const handleNextClick = () => {
    if (currentCharacter === 1) {
      setCurrentCharacter(2);
    } else if (currentReplyIndex < replies.length - 1) {
      setCurrentReplyIndex(currentReplyIndex + 1);
      setCurrentCharacter(1);
    }
  };

  const transitions = useTransition(currentCharacter, {
    from: {
      opacity: 0,
      transform:
        currentCharacter === 1 ? "translateX(-100%)" : "translateX(100%)",
    },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: {
      opacity: 0,
      transform:
        currentCharacter === 1 ? "translateX(100%)" : "translateX(-100%)",
    },
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-5 text-3xl font-bold">Courtroom Scene</h1>
      <div className="mb-5 flex">
        {transitions((style) => (
          <animated.div style={style} className="flex items-center gap-x-5">
            {currentCharacter === 1 ? character1 : character2}
            <Reply
              text={
                currentCharacter === 1
                  ? replies[currentReplyIndex].character1
                  : replies[currentReplyIndex].character2
              }
            />
          </animated.div>
        ))}
      </div>
      <div className="flex text-4xl font-bold">
        <button onClick={handlePrevClick}>{"<"}</button>
        <button onClick={handleNextClick}>{">"}</button>
      </div>
    </div>
  );
};

export default CourtroomScene;
