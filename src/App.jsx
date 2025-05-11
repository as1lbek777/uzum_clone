import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Slider from "./components/mainSections/imgSlider";
import ProductCard1 from "./components/mainSections/productCard1";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="main-content">
        <Slider />
        <ProductCard1 />
      </main>
      <Footer />

      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 p-4 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </>
  );
};

export default App;
