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

  const stopTextToSpeech = () => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
    }
  };

  const textToSpeech = () => {
    if ("speechSynthesis" in window) {
      let msg =
        currentCharacter === 0
          ? new SpeechSynthesisUtterance(replies[currentReplyIndex][character1])
          : new SpeechSynthesisUtterance(
              replies[currentReplyIndex][character2],
            );
      msg.onend = function (event) {
        handleNextClick();
      };
      speechSynthesis.speak(msg);
    }
  };

  const playSound = () => {
    const dombraSound = dombraSoundRef.current;
    dombraSound.volume = 0.3;
    dombraSound.play();
  };

  useEffect(() => {
    playSound();
    textToSpeech();

    return () => {
      stopSound();
      stopTextToSpeech();
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
    stopTextToSpeech();
    textToSpeech();
    stopSound();
    playSound();
    if (currentReplyIndex === replies.length - 1 && currentCharacter === 1) {
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

  return (
    <div className="flex w-screen flex-col items-center bg-[url('/yurt.png')] bg-cover bg-center bg-no-repeat">
      <h1 className="my-5 text-3xl font-bold">Courtroom Scene</h1>
      <div className="mb-5 flex">
        {transitions((style) => (
          <animated.div style={style} className="flex items-center gap-x-5">
            {currentCharacter === 0 ? (
              <Character
                name={character1}
                image={"/" + character1.split(" ")[1].toLowerCase() + ".png"}
              />
            ) : (
              <Character
                name={character2}
                image={"/" + character2.split(" ")[1].toLowerCase() + ".png"}
              />
            )}
            <Reply
              text={
                currentCharacter === 0 ||
                replies[currentReplyIndex] != "undefined"
                  ? replies[currentReplyIndex][character1]
                  : replies[currentReplyIndex][character2]
              }
            />
          </animated.div>
        ))}
      </div>
      <div className="flex text-4xl font-bold text-white">
        <button onClick={handlePrevClick}>{"<"}</button>
        <button onClick={handleNextClick}>{">"}</button>
      </div>
    </div>
  );
};

export default CourtroomScene;
