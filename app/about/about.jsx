"use client";
import Image from "next/image";
import CountUp from "react-countup";

export default function About() {
  return (
    <div className="my-6 flex ">
      <div className="blur-box mx-24 rounded-xl px-10 py-5 shadow-2xl md:w-1/2">
        <h1 className="text-xl font-extrabold">About this project</h1>
        <p className="text-2xl font-bold text-yellow-100">
          Promotion of Kazakh culture and literature.
        </p>
        <div className="my-2 w-5/6">
          <p>
            Aitys Battle aims to bring history of Kazakhstan closer to everyone.
            We use the latest artificial intelligence technology to create
            interactive experiences that allow people to see interaction of
            historical figures. Our AI-powered experiences let users join the
            traditional Kazakh debates called Aitys, where they can witness the
            wisdom and eloquence of those who have shaped our nation. We want to
            show the richness and diversity of Kazakh history, literature and
            culture, and let everyone enjoy and appreciate them.
          </p>
        </div>
        <p className="text-2xl font-bold text-yellow-100">Future versions</p>
        <div className="my-2 w-5/6">
          <p>
            Aitys Battle continuues to enhances its features for better
            experience. Our vision on future versions: AI advancements will
            create lifelike Aitys with natural language, voice, and dynamic
            responses. You will engage with a wider array of historical
            Kazakhstan personalities, spanning ancient to modern eras, exploring
            accomplishments, challenges, and traits. Immerse into diverse Kazakh
            customs—music, poetry, rituals—displaying their evolution and
            cultural impact. Anticipate thrilling Aitys Battle versions, drawing
            you closer to Kazakhstan&apos;s history.
          </p>
        </div>
      </div>
      <div className="my-10 flex flex-col items-center justify-center gap-10">
        <Stats />

        <Image
          src={"/dombra-big-flip.png"}
          width={300}
          height={300}
          className="dombra-animated"
          alt="dombra"
        />
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-center">
        <div className="flex">
          <CountUp
            end={400}
            duration={10}
            className="text-5xl text-yellow-100"
          />

          <p className="text-5xl font-bold text-yellow-100">+</p>
        </div>

        <p className="text-xl">Aitys</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex">
          <CountUp
            end={150}
            duration={10}
            className="text-5xl text-yellow-100"
          />

          <p className="text-5xl font-bold text-yellow-100">+</p>
        </div>

        <p className="text-xl">Visitors</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <CountUp
            end={10}
            duration={10}
            className="text-5xl text-yellow-100"
          />

          <p className="text-5xl font-bold text-yellow-100">+</p>
        </div>
        <p className="text-xl">From countries</p>
      </div>
    </div>
  );
}
