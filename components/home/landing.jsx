import Divider from "./divider";
import Footer from "@/components/layout/footer";
import About from "./about";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="bg-gradient">
      <div
        className="my-16 h-96 w-auto bg-center bg-no-repeat md:flex"
        style={{
          backgroundImage: "url('oyu-bg.png')",
          backgroundSize: "contain",
        }}
      >
        <Image
          src={"/dombra-big-flip.png"}
          width={360}
          height={360}
          alt="aitys"
          className="dombra-animated flipped hidden md:block"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-8 px-4 py-16">
          <h1 className="text-center text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl">
            GENERATIVE AI MEETS
            <br /> HISTORY OF KAZAKHSTAN
          </h1>
        </div>
        <Image
          src={"/dombra-big.png"}
          width={360}
          height={360}
          alt="aitys"
          className="dombra-animated hidden md:block"
        />
      </div>
      <Divider />
      <About />
      <Divider />
      <div className="flex h-auto w-full items-center  sm:h-[70vh]">
        <div
          className="relative my-8 flex h-[60vh] w-full items-center justify-center bg-center bg-no-repeat sm:my-16"
          style={{
            backgroundImage: "url('alash.png')",
            backgroundSize: "contain",
          }}
        >
          <h1 className="text-center text-2xl font-bold italic tracking-tight text-white sm:text-4xl md:text-5xl">
            Сөздің ең ұлысы - тарих
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
