import { useState, useEffect } from "react";
import LoadingCircle from "./loading-circle";

export default function LoadingComponent() {
  const [factIndex, setFactIndex] = useState(null);

  const facts = [
    "Kazakhstan is the ninth largest country in the world by land area, but it has a long history of nomadic lifestyle that influenced its culture.",
    "The Kazakh Khanate was established in 1465 by a group of separatist Uzbeks who became known as Kazakhs, meaning ‘independent’ or ‘vagabond’.",
    "The Kazakhs developed a rich oral tradition of poetry and song, which told the stories of their national heroes and legends.",
    "The Kazakhs resisted Russian domination and colonization in the 18th and 19th centuries, and many of them fled to China, Afghanistan or Mongolia.",
    "The Alash Autonomy was a short-lived state that declared independence from Russia in 1917, led by Kazakh intellectuals and nationalists.",
    "The Soviet regime imposed collectivization, industrialization and Russification on Kazakhstan, causing massive social, economic and cultural changes.",
    "Millions of Kazakhs died or fled during the famine of 1932-1933, known as the Goloshchekin genocide.",
    "Kazakhstan became a major industrial and agricultural base for the Soviet war effort in the Second World War, and also received millions of refugees and deportees from other parts of the Soviet Union.",
    "The Semipalatinsk Test Site in eastern Kazakhstan was the site of over 450 nuclear tests conducted by the Soviet Union from 1949 to 1989, exposing millions of people to radiation and causing severe health and environmental problems.",
  ];

  useEffect(() => {
    setFactIndex(Math.floor(Math.random() * facts.length));
  }, []);

  return (
    <div className="flex h-auto w-1/2 flex-col items-center gap-2  rounded-2xl bg-[#593440] p-6">
      <LoadingCircle />
      {factIndex !== null && <p className="text-center">{facts[factIndex]}</p>}
    </div>
  );
}
