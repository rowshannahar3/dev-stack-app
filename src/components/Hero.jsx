import bannerStack from "../assets/banner-stack.png";

export default function Hero() {
    return (
        <section id="home" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
                {/* Two-tone heading: plain text + gradient text, sharing the one brand gradient */}
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                    Build Your Ideal
                    <br />
                    <span className="brand-gradient-text">Development Stack</span>
                </h1>

                <p className="mt-5 text-slate-500 text-base md:text-lg max-w-md">
                    Explore frontend, backend, database, and tooling options, compare them side
                    by side, and put together the stack that fits your next project.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
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

            <div className="flex justify-center">
                <img
                    src="https://icon.icepanel.io/Technology/svg/Docker.svg"
                    alt="Illustration of a layered development stack"
                    className="hidden"
                />

                <img
                    src={bannerStack}
                    alt="Development stack illustration"
                    className="w-full max-w-md rounded-2xl"
                />
            </div>
        </section>
    );
}
