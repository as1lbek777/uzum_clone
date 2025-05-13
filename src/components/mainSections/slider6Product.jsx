import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronRight, FaStar, FaChevronLeft } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import data from "../../data";
import { FcLike } from "react-icons/fc";
import { RiDislikeLine } from "react-icons/ri";

const Slider6Product = () => {
  const { productCard } = data;
  const [likedProducts, setLikedProducts] = useState(() => {
    const saved = localStorage.getItem("likedProducts");
    return saved ? JSON.parse(saved) : {};
  });

  const [index, setIndex] = useState(0);
  const cardsPerPage = 5;
  const limitedProducts = productCard.slice(30, 50);

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const toggleLike = (productId) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const next = () => {
    if (index + cardsPerPage < limitedProducts.length) {
      setIndex(index + cardsPerPage);
    }
  };

  const prev = () => {
    if (index - cardsPerPage >= 0) {
      setIndex(index - cardsPerPage);
    }
  };

  const iconVariants = {
    initial: { opacity: 0.5, rotateX: 90, scale: 0.5 },
    animate: { opacity: 1, rotateX: 0, scale: 1 },
    exit: { opacity: 0.5, rotateX: -90, scale: 0.5 },
  };

  return (
    <section className="max-w-[1250px] m-auto pt-5">
      <div className="flex items-center justify-between mb-5">
        <a href="#" className="text-[2rem] flex gap-5 items-center">
          Turk brendi ishidlari
          <FaChevronRight size={25} />
        </a>
        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            className="p-2 bg-gray-200 rounded-full disabled:opacity-50 cursor-pointer"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={index + cardsPerPage >= limitedProducts.length}
            className="p-2 bg-gray-200 rounded-full disabled:opacity-50 cursor-pointer"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      <motion.div className="flex flex-wrap gap-2.5 transition-all duration-300">
        {limitedProducts.slice(index, index + cardsPerPage).map((product) => (
          <div
            title={product.title}
            key={product.id}
            className="relative w-[240px] h-[475px] cursor-pointer transition-all rounded-[15px] hover:shadow-lg flex flex-col overflow-hidden"
          >
            <motion.button
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              onClick={() => toggleLike(product.id)}
              className="cursor-pointer"
            >
              {likedProducts[product.id] ? (
                <FcLike
                  size={20}
                  className="absolute top-2.5 right-2.5 z-20 text-[#7F4DFF]"
                />
              ) : (
                <RiDislikeLine
                  size={20}
                  className="absolute top-2.5 right-2.5 z-20 text-[#ACADAD]"
                />
              )}
            </motion.button>

            <motion.img
              initial={{ borderRadius: "15px" }}
              whileHover={{
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-full object-cover"
              src={product.image}
              alt={product.title}
            />

            <div className="p-2">
              {product.label?.length > 0 && (
                <span className="absolute top-[295px] left-2.5 text-[10px] font-normal bg-[#FFFF00] p-0.5 rounded-[5px]">
                  {product.label[0]}
                </span>
              )}
              <p className="top-0 text-[14px] h-10 font-normal overflow-hidden ">
                {product.title}
              </p>
              <p className=" text-[#82899B] text-[12px] font-normal flex items-center gap-1">
                <FaStar className="text-[#FFB54C]" size={13} />
                {product.rating}
              </p>
              <p className="text-[12px] font-normal bg-[#FFFF00] p-0.5 rounded-[5px] inline">
                {product.monthlyPrice}
              </p>

              <div className="absolute flex items-center justify-between bottom-1 w-full px-2">
                <div className="text-[13px] font-normal text-[#FF4DA9]">
                  <p>{product.reviewLabel}</p>
                  <p className="text-[15px] font-semibold">{product.price}</p>
                </div>
                <div className="absolute right-4 border border-[#ACADAD] p-1 rounded-full transition-all hover:bg-[#e1dede]">
                  <TbShoppingBagPlus size={25} className="text-[#606165]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Slider6Product;
