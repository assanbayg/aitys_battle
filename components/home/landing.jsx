import Balancer from "react-wrap-balancer";
import Features from "./features";
import HistoricalFiguresScroll from "./historica-figures-scroll";
import Divider from "./divider";
import Link from "next/link";
import Footer from "@/components/layout/footer";

export default function Landing() {
  return (
    <>
      <div
        className="my-16 h-96 w-auto bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('oyu-bg.png')",
          backgroundSize: "contain",
        }}
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-8 px-4 py-16">
          <h1 className="text-center text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl">
            GENERATIVE AI MEETS
            <br /> HISTORY OF KAZAKHSTAN
          </h1>
          <button className="mt-8 rounded-2xl bg-[#F08A8A] px-12 py-3 text-3xl text-white">
            <Link href="/choose-characters">Start Aitys</Link>
          </button>
        </div>
      </div>
      <Divider />
      <div className="h-full w-full bg-gradient-to-b from-transparent to-rose-300">
        <div
          className="relative my-16 h-[400px] bg-center bg-no-repeat"
          style={{ backgroundImage: "url('alash.png')" }}
        >
          <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-8 px-4 py-16">
            <h1 className="text-center text-4xl font-bold italic tracking-tight text-white sm:text-5xl md:text-6xl">
              Сөздің ең ұлысы - тарих
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
