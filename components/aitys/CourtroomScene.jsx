import { useState, useRef, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import Reply from "./Reply";
import Character from "./Character";

const CourtroomScene = ({ character1, character2, topic, replies }) => {
  const dombraSoundRef = useRef(new Audio("/dombra-sound.mp3"));
  const [currentReplyIndex, setCurrentReplyIndex] = useState(0);
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [enableRepeat, setEnableRepeat] = useState(false);

  const stopSound = () => {
    const dombraSound = dombraSoundRef.current;
    dombraSoundRef.current.loop = true;
    dombraSound.currentTime = 0;
    dombraSound.pause();
    stopTextToSpeech();
  };

  const stopTextToSpeech = () => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
    }
  };

  const textToSpeech = () => {
    if ("speechSynthesis" in window) {
      let msg =
        currentCharacter === 0
          ? new SpeechSynthesisUtterance(
              replies.replies[currentReplyIndex][character1.name],
            )
          : new SpeechSynthesisUtterance(
              replies.replies[currentReplyIndex][character2.name],
            );
      msg.onend = function (event) {
        handleNextClick();
      };
      speechSynthesis.speak(msg);
    }
  };

  const playSound = () => {
    const dombraSound = dombraSoundRef.current;
    dombraSound.volume = 0.5;
    dombraSound.play();
    textToSpeech();
  };

  useEffect(() => {
    stopSound();
    playSound();
  }, [currentCharacter, currentReplyIndex]);

  const handleRepeat = () => {
    setCurrentReplyIndex(0);
    setCurrentCharacter(0);
    setEnableRepeat(false);
  };

  const handlePrevClick = () => {
    if (currentReplyIndex === 0) {
      return;
    }
    currentCharacter === 0 ? setCurrentCharacter(1) : setCurrentCharacter(0);
    setCurrentReplyIndex(currentReplyIndex - 1);
  };

  const handleNextClick = () => {
    if (
      currentReplyIndex === replies.replies.length - 1 &&
      currentCharacter === 1
    ) {
      stopSound();
      setEnableRepeat(true);
      return;
    }
    if (currentCharacter === 0) {
      setCurrentCharacter(1);
    } else {
      setCurrentCharacter(0);
      setCurrentReplyIndex(currentReplyIndex + 1);
    }
    stopSound();
    playSound();
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

  return (
    <div className="flex max-h-screen min-h-[calc(100vh-4rem)] w-full flex-col items-center bg-[url('/yurt_phone.png')] bg-cover bg-center bg-no-repeat md:justify-center md:bg-[url('/yurt.png')]">
      <h1 className="my-5 text-3xl font-bold">{topic}</h1>
      <div className="mb-5">
        {transitions((style) => (
          <animated.div
            style={style}
            className="flex flex-col items-center justify-center gap-y-2 md:flex-row md:gap-x-5"
          >
            {currentCharacter === 0 ? (
              <Character
                name={character1.name}
                image={character1.image.replace(/\.png$/, ".gif")}
              />
            ) : (
              <Character
                name={character2.name}
                image={character2.image.replace(/\.png$/, ".gif")}
              />
            )}
            <Reply
              text={
                currentCharacter === 0
                  ? replies.replies[currentReplyIndex][character1.name]
                  : replies.replies[currentReplyIndex][character2.name]
              }
            />
          </animated.div>
        ))}
      </div>
      {enableRepeat ? (
        <button
          className="my-4 rounded-2xl bg-[#F08A8A] px-6 py-2 text-xl text-white"
          onClick={handleRepeat}
        >
          Start again
        </button>
      ) : (
        <div className=" text-4xl font-bold md:flex">
          <button onClick={handlePrevClick}>{"<"}</button>
          <button onClick={handleNextClick}>{">"}</button>
        </div>
      )}
    </div>
  );
};

export default CourtroomScene;
