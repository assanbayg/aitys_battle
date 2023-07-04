import Balancer from "react-wrap-balancer";
import Features from "./features";
import HistoricalFiguresScroll from "./historica-figures-scroll";

export default function Landing() {
  return (
    <>
      <div className="z-10 my-16 w-full max-w-xl px-3 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Start Aitys Battle</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Discover the Art of Verbal Jousting with AI-powered Kazakh Legends.
          </Balancer>

          <button className="mt-8 rounded-full bg-yellow-700 px-6 py-2 text-xl text-amber-50">
            Start Aitys
          </button>
        </p>
      </div>
      <Features />
      <HistoricalFiguresScroll id="figures" />
    </>
  );
}
