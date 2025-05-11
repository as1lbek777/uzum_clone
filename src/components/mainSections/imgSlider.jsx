import React, { useEffect, useState } from "react";
import data from "../../data";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const { sliderImages, fourtProduct } = data;
  const [slider, setSlider] = useState(0);
  const prevSlide = () => {
    return setSlider(
      (prev) => prev - 1 + (sliderImages.length % sliderImages.length)
    );
  };
  const nextSlide = () => {
    setSlider((next) => next + (1 % sliderImages.length));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);
  return (
    <section className="max-w-[1250px] h-4/5 mx-auto mt-14">
      <div className="relative w-full h-[410px] mx-auto overflow-hidden rounded-xl shadow-lg">
        <AnimatePresence>
          <motion.img
            key={sliderImages[slider]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            src={sliderImages[slider]}
            className="absolute w-full h-full object-cover cursor-pointer"
          />
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-0.5 bg-white p-2 text-gray-500 rounded-[50%] hover:bg-gray-400 cursor-pointer transition-all"
        >
          <FaChevronLeft size={23} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-0.5 bg-white p-2 text-gray-500 rounded-[50%] hover:bg-gray-400 cursor-pointer transition-all"
        >
          <FaChevronRight size={23} />
        </button>
      </div>
      <div className="flex items-center justify-between gap-2.5 mt-4">
        {fourtProduct.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-center gap-2.5 w-[312.5px] h-[100px] bg-[#EFEFEF] rounded-xl cursor-pointer transition-all hover:bg-[#cdcccc]"
          >
            <img src={product.url} alt={product.title} className="w-12" />
            <p className="text-[1rem] font-normal">{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
