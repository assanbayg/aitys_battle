import Balancer from "react-wrap-balancer";
import Features from "./features";
import HistoricalFiguresScroll from "./historica-figures-scroll";
import Divider from "./divider";

export default function Landing() {
  return (
    <>
      <div
        className="relative h-96  bg-center bg-no-repeat"
        style={{ backgroundImage: "url('Untitled.png')" }}
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-8 px-4 py-16">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            GENERATIVE AI MEETS
            <br /> HISTORY OF KAZAKHSTAN
          </h1>
          <button className="mt-8 rounded-2xl bg-[#F08A8A] px-12 py-3 text-3xl text-white">
            Start Aitys
          </button>
        </div>
      </div>
      <Divider />
      {/* <Features /> */}
      {/* <HistoricalFiguresScroll id="figures" /> */}
    </>
  );
}
