import { useState, useEffect } from "react";
import LoadingCircle from "./loading-circle";

const facts = [
  "Kazakhstan is the ninth largest country in the world by land area, but it has a long history of nomadic lifestyle that influenced its culture.",
  "The Kazakh Khanate was established in 1465 by a group of separatist Uzbeks who became known as Kazakhs, meaning ‘independent’ or ‘vagabond’.",
  "The Kazakhs developed a rich oral tradition of poetry and song, which told the stories of their national heroes and legends.",
  "The Kazakhs resisted R ussian domination and colonization in the 18th and 19th centuries, and many of them fled to China, Afghanistan or Mongolia.",
  "The Alash Autonomy was a short-lived state that declared independence from Russia in 1917, led by Kazakh intellectuals and nationalists.",
  "The Soviet regime imposed collectivization, industrialization and Russification on Kazakhstan, causing massive social, economic and cultural changes.",
  "Millions of Kazakhs died or fled during the famine of 1932-1933, known as the Goloshchekin genocide.",
  "Kazakhstan became a major industrial and agricultural base for the Soviet war effort in the Second World War, and also received millions of refugees and deportees from other parts of the Soviet Union.",
  "The Semipalatinsk Test Site in eastern Kazakhstan was the site of over 450 nuclear tests conducted by the Soviet Union from 1949 to 1989, exposing millions of people to radiation and causing severe health and environmental problems.",
  "Kazakhstan shares the world's longest border with Russia, which stretches for over 7,500 km.",
  'The name Kazakhstan means "the land of the wanderers" or "the place where one stands" in Kazakh, reflecting the nomadic history of the country.',
  "The Kazakhs were the first people to domesticate and ride horses, around 5,500 years ago.",
  "The Soviet Union conducted over 450 nuclear tests at the Semipalatinsk Test Site in eastern Kazakhstan from 1949 to 1989, exposing millions of people to radiation and causing severe health and environmental problems.",
  "Kazakhstan is home to diverse ethnic groups, religions and cultures, influenced by its location at the crossroads of Asia and Europe.",
  "Kazakhstan declared its independence from the Soviet Union on December 16, 1991, becoming the last republic to do so.",
  "Kazakhstan is the only country in the world that has moved its capital twice in the 20th century: from Almaty to Kyzylorda in 1929, and from Kyzylorda to Nur-Sultan (formerly Astana) in 1997.",
  "Kazakhstan is famous for its hospitality and generosity, which are rooted in its nomadic culture and Islamic values. Guests are treated with respect and offered the best food and drinks.",
];
export default function LoadingComponent() {
  const [factIndex, setFactIndex] = useState(null);

  useEffect(() => {
    setFactIndex(Math.floor(Math.random() * facts.length));
    const interval = setInterval(() => {
      setFactIndex(Math.floor(Math.random() * facts.length));
    }, 30 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex h-auto flex-col items-center gap-2 rounded-2xl  border-2 border-white border-opacity-50 bg-[#593440] p-6 md:w-1/2">
      <LoadingCircle />
      <p className="text-lg font-bold">Please, wait 2-3 minutes</p>
      {factIndex !== null && (
        <p className="text-center text-sm">{facts[factIndex]}</p>
      )}
    </div>
  );
}
