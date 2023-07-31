import Image from "next/image";

export default function HowItWorks() {
  return (
    <>
      <div className="first-letter mx-auto my-8 w-3/4 items-center rounded-lg bg-opacity-60 p-10 shadow-xl md:flex md:gap-20">
        <h1 className=" text-3xl font-bold">How it works</h1>
        <p className="text-base leading-relaxed ">
          Aitys Battle uses generative AI (GPT-3.5) to bring historical figures
          to life and make the aitys feel authentic. Each aitys on any topic is
          unique, allowing you to view interaction of historical figures of your
          choice. Simply select two figures from options ad type the topic,
          gaining new insights and perspectives on history and life.
        </p>
      </div>
    </>
  );
}
