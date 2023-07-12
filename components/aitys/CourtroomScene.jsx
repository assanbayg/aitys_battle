"use client";

import { useState, useRef, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import Reply from "./Reply";
import Character from "./Character";

const CourtroomScene = ({ character1, character2, replies }) => {
  const dombraSoundRef = useRef(new Audio("/dombra-sound.mp3"));
  const [currentReplyIndex, setCurrentReplyIndex] = useState(0);
  const [currentCharacter, setCurrentCharacter] = useState(0);

  const stopSound = () => {
    const dombraSound = dombraSoundRef.current;
    dombraSound.currentTime = 0;
    dombraSound.pause();
  };

  const playSound = () => {
    const dombraSound = dombraSoundRef.current;
    dombraSound.play();
  };

  useEffect(() => {
    playSound();

    return () => {
      stopSound();
    };
  }, []);

  const handlePrevClick = () => {
    if (currentReplyIndex === 0) {
      return;
    }
    currentCharacter === 0 ? setCurrentCharacter(1) : setCurrentCharacter(0);
    setCurrentReplyIndex(currentReplyIndex - 1);
  };

  const handleNextClick = () => {
    console.log("CURREnt: ", currentReplyIndex);
    stopSound();
    playSound();
    if (
      currentReplyIndex === replies.replies.length - 1 &&
      currentCharacter === 1
    ) {
      setCurrentReplyIndex(0);
      setCurrentCharacter(0);
      return;
    }
    if (currentCharacter === 0) {
      setCurrentCharacter(1);
    } else {
      setCurrentCharacter(0);
      setCurrentReplyIndex(currentReplyIndex + 1);
    }
  };

  const transitions = useTransition(currentCharacter, {
    from: {
      opacity: 0,
      transform:
        currentCharacter === 0 ? "translateX(-100%)" : "translateX(100%)",
    },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: {
      opacity: 0,
      transform:
        currentCharacter === 0 ? "translateX(100%)" : "translateX(-100%)",
    },
  });

  console.log(currentReplyIndex);
  console.log(replies.replies[currentReplyIndex]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-5 text-3xl font-bold">Courtroom Scene</h1>
      <div className="mb-5 flex">
        {transitions((style) => (
          <animated.div style={style} className="flex items-center gap-x-5">
            {currentCharacter === 0 ? (
              <Character name={character1} image="/character1.png" />
            ) : (
              <Character name={character2} image="/character2.png" />
            )}
            <Reply
              text={
                currentCharacter === 0 ||
                replies.replies[currentReplyIndex] != "undefined"
                  ? replies.replies[currentReplyIndex][character1]
                  : replies.replies[currentReplyIndex][character2]
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
