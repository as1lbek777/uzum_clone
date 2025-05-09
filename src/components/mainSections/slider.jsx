import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sliderData } from "../../data";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="max-w-[1250px] m-auto mt-4">
      <div className="relative w-full max-w-4xl h-64 mx-auto overflow-hidden rounded-xl shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={sliderData[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={sliderData[current].img}
              alt={sliderData[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-3 rounded">
              {sliderData[current].title}
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full z-10"
        ></button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full z-10"
        ></button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;