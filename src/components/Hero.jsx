import bannerStack from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-5 md:px-8 pt-10 pb-14 md:py-24 flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 items-center"
    >
      <div className="text-center md:text-left">
        {/* Two-tone heading: plain text + gradient text */}
        <h1 className="text-[32px] leading-[1.15] md:text-5xl md:leading-tight font-extrabold text-slate-900">
          Build Your Ideal
          <br />
          <span className="brand-gradient-text">
            Development Stack
          </span>
        </h1>

        <p className="mt-4 md:mt-5 text-slate-500 text-base md:text-lg max-w-xs md:max-w-md mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options, compare them side
          by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
          <a
            href="#technologies"
            className="px-6 py-3 rounded-lg font-semibold brand-gradient-bg shadow-md hover:opacity-90 transition-opacity"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="px-6 py-3 rounded-lg font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <img
          src={bannerStack}
          alt="Development stack illustration"
          className="w-4/5 max-w-[260px] md:max-w-md md:w-full"
        />
      </div>
    </section>
  );
}
