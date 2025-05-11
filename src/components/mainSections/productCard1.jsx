import React, { useEffect, useState } from "react";
import data from "../../data";
import { FaChevronRight, FaStar } from "react-icons/fa";
import { motion } from "motion/react";
import { RiDislikeLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { TbShoppingBagPlus } from "react-icons/tb";

const ProductCard1 = () => {
  const { productCard } = data;
  const [likedProducts, setLikedProducts] = useState(() => {
    const saved = localStorage.getItem("likedProducts");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const toggleLike = (productId) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const limitedProducts = productCard.slice(0, 10);

  const iconVariants = {
    initial: { opacity: 0.5, rotateX: 90, scale: 0.5 },
    animate: { opacity: 1, rotateX: 0, scale: 1 },
    exit: { opacity: 0.5, rotateX: -90, scale: 0.5 },
  };

  return (
    <>
      <section className="max-w-[1250px] m-auto pt-5">
        <a href="#" className="mb-5 text-[2rem] flex gap-5 items-center">
          Mashhur
          <FaChevronRight
            size={25}
            className="flex items-center justify-center"
          />
        </a>

        <motion.div className="flex flex-wrap gap-2.5">
          {limitedProducts.map((product) => (
            <div
              title={product.title}
              key={product.id}
              className="relative max-w-[240px] h-[475px] cursor-pointer transition-all rounded-[15px] hover:shadow-lg flex flex-col overflow-hidden z-10"
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
                title={product.title}
                initial={{ borderRadius: "15px" }}
                whileHover={{
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                transition={{ duration: 0.3 }}
                src={product.image}
                alt={product.title}
                className="w-full object-cover"
              />

              <div className="p-2">
                {product.label && product.label.length > 0 && (
                  <span className="absolute top-[295px] left-2.5 z-30 text-[10px] font-normal bg-[#FFFF00] p-0.5 rounded-[5px]">
                    {product.label[0]}
                  </span>
                )}
                <p className="text-[14px] h-10 font-normal overflow-hidden">
                  <span>{product.title}</span>
                </p>
                <p className=" text-[#82899B] text-[12px] font-normal flex items-center gap-1">
                  <FaStar className="text-[#FFB54C]" size={13} />
                  {product.rating}
                </p>
                <p className="text-[12px] font-normal bg-[#FFFF00] p-0.5 rounded-[5px] inline">
                  {product.monthlyPrice}
                </p>

                <div className="absolute flex items-center justify-between bottom-1">
                  <div className="text-[13px] font-normal text-[#FF4DA9]">
                    <p>{product.reviewLabel}</p>
                    <p className="font-semibold text-[16px]">{product.price}</p>
                  </div>
                  <div className="absolute left-48 border border-[#ACADAD] p-1 rounded-[50%] transition-all hover:bg-[#e1dede]">
                    <TbShoppingBagPlus size={25} className="text-[#606165]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="ml-[24.5%] mt-7 bg-[#E6E8ED] py-5 px-60 rounded-[10px] transition-all cursor-pointer hover:bg-[#d9dadd]">
            Yana ko'rsatish 10
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default ProductCard1;
