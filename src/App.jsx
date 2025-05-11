import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Slider from "./components/mainSections/imgSlider";
import ProductCard1 from "./components/mainSections/productCard1";
import SliderProduct from "./components/mainSections/sliderProduct";
import Slider2Product from "./components/mainSections/slider2Product";
import Slider3Product from "./components/mainSections/slider3Product";
import Slider4Product from "./components/mainSections/slider4Product";
import Slider5Product from "./components/mainSections/slider5Product";
import Slider6Product from "./components/mainSections/slider6Product";
import Slider7Product from "./components/mainSections/slider7Product";
import Slider8Product from "./components/mainSections/slider8Product";
import Slider9Product from "./components/mainSections/slider9Product";
import Slider10Product from "./components/mainSections/slider10Product";
import Slider11Product from "./components/mainSections/slider11Product";
import Slider12Product from "./components/mainSections/slider12Product";
import Slider13Product from "./components/mainSections/slider13Product";

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
        <SliderProduct />
        <Slider2Product />
        <Slider3Product />
        <Slider4Product />
        <Slider5Product />
        <Slider6Product />
        <Slider7Product />
        <Slider8Product />
        <Slider9Product />
        <Slider10Product />
        <Slider11Product />
        <Slider12Product />
        <Slider13Product />
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
