import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import Explorations from "../components/Explorations";
import Achievements from "../components/Achievements";
import ContactFooter from "../components/ContactFooter";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  // lock scroll while loading
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <SelectedWorks />
        <Explorations />
        <Achievements />
        <ContactFooter />
      </main>
    </>
  );
}
