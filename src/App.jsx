import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Could not load technology data."))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <h2 className="text-3xl font-extrabold">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>
        <p className="text-slate-500 mt-2 mb-8">Pick one technology per category to build your ideal stack.</p>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
            <TechGrid technologies={technologies} stack={stack} onAdd={handleAdd} />
            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        )}
      </section>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}
