"use client";
import { useState } from "react";
import { content } from "tailwind.config";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="my-8">
        <div className="first-letter mx-auto hidden w-3/4 items-center rounded-xl border-2 border-white border-opacity-10 bg-white bg-opacity-10 p-10 shadow-xl md:flex md:gap-10">
          <h1 className=" whitespace-nowrap text-3xl font-bold text-yellow-100">
            What is Aitys?
          </h1>
          <p className="text-lg leading-relaxed ">
            Aitys is a traditional form of Kazakh poetry and musical creativity.
            It is a competition between akyns, or improvisational poets, who
            engage in a verbal duel in front of an audience.
            <br />
            Structurally, Aitys consists of three parts. First, the akyns
            present themselves and their backgrounds, and praise their famous
            ancestors and war heroes. Next, the akyns debate important social
            issues.
          </p>
        </div>
        <div className="first-letter mx-auto mt-8 hidden w-3/4 items-center rounded-xl border-2 border-white border-opacity-10 bg-white bg-opacity-10 p-10 shadow-xl md:flex md:gap-10">
          <h1 className="whitespace-nowrap text-3xl font-bold text-yellow-100">
            ...what is
            <br />
            Aitys Battle?
          </h1>
          <p className="text-lg leading-relaxed">
            Aitys Battle is a project that generates aitys between historical
            figures of Kazakhstan using the generative AI. The project aims to
            showcase the rich cultural heritage of Kazakhstan and provide an
            interactive way for users to explore the art of aitys.
          </p>
        </div>
      </div>
      <div className="first-letter mx-auto my-8 hidden w-3/4  items-center rounded-xl border-2 border-white border-opacity-10 bg-white bg-opacity-10 p-10 shadow-xl md:flex md:gap-10">
        <h1 className=" whitespace-nowrap text-3xl font-bold text-yellow-100">
          How it works
        </h1>
        <p className="text-lg leading-relaxed ">
          Aitys Battle uses generative AI (GPT-3.5) to bring historical figures
          to life and make the aitys feel authentic. Each aitys on any topic is
          unique, allowing you to view interaction of historical figures of your
          choice. Simply select two figures from options ad type the topic,
          gaining new insights and perspectives on history and life.
        </p>
      </div>
      <AccordionCard
        header={"What is Aitys?"}
        content={
          <p className="text-lg leading-relaxed ">
            Aitys is a traditional form of Kazakh poetry and musical creativity.
            It is a competition between akyns, or improvisational poets, who
            engage in a verbal duel in front of an audience.
            <br />
            Structurally, Aitys consists of three parts. First, the akyns
            present themselves and their backgrounds, and praise their famous
            ancestors and war heroes. Next, the akyns debate important social
            issues.
          </p>
        }
      />
      <AccordionCard
        header={"...what is Aitys Battle?"}
        content={
          <p className="text-lg leading-relaxed">
            Aitys Battle is a project that generates aitys between historical
            figures of Kazakhstan using the generative AI. The project aims to
            showcase the rich cultural heritage of Kazakhstan and provide an
            interactive way for users to explore the art of aitys.
          </p>
        }
      />
      <AccordionCard
        header="How It Works"
        content={
          <p className="text-lg leading-relaxed ">
            Aitys is a traditional form of Kazakh poetry and musical creativity.
            It is a competition between akyns, or improvisational poets, who
            engage in a verbal duel in front of an audience.
            <br />
            Structurally, Aitys consists of three parts. First, the akyns
            present themselves and their backgrounds, and praise their famous
            ancestors and war heroes. Next, the akyns debate important social
            issues.
          </p>
        }
      />
    </>
  );
}

function AccordionCard({ header, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="first-letter mx-auto my-8 flex flex-col justify-center rounded-lg bg-opacity-60 shadow-xl md:hidden">
      <button
        className="flex w-full items-center justify-between p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="whitespace-nowrap text-2xl font-bold">{header}</p>
        <svg
          className={`${
            isOpen ? "rotate-180 transform" : ""
          } h-10 w-10 text-white`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && <div className="px-6 pb-3">{content}</div>}
    </div>
  );
}
