import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="my-8">
        <div className="first-letter mx-auto w-3/4 items-center rounded-lg bg-opacity-60 p-10 shadow-xl md:flex md:gap-10">
          <h1 className=" text-3xl font-bold">What is Aitys?</h1>
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
        <div className="first-letter mx-auto w-3/4 items-center rounded-lg bg-opacity-60 p-10 shadow-xl md:flex md:gap-10">
          <h1 className=" text-3xl font-bold">...what is Aitys Battle?</h1>
          <p className="text-lg leading-relaxed">
            Aitys Battle is a project that generates aitys between historical
            figures of Kazakhstan using the generative AI. The project aims to
            showcase the rich cultural heritage of Kazakhstan and provide an
            interactive way for users to explore the art of aitys.
          </p>
        </div>
      </div>
    </>
  );
}
