import React, { useEffect, useState } from "react";
import data from "../../data";
import * as motion from "motion/react-client";
import { FaChevronRight } from "react-icons/fa";

const ProductCard1 = () => {
  const { productCard } = data;
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (productCard.length > 0) {
      const shuffled = [...productCard];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      const random10 = shuffled.slice(0, 10);
      setRandomProducts(random10);
    }
  }, [productCard]);

  return (
    <section className="max-w-[1250px] m-auto pt-5">
      <a href="#" className="mb-5 text-[2rem] flex gap-2.5 items-center">
        Mashhur
        <FaChevronRight
          size={25}
          className="flex items-center justify-center"
        />
      </a>

      <div className="flex flex-wrap gap-2.5">
        {randomProducts.map((product) => (
          <div key={product.id} className="max-w-[240px] h-auto cursor-pointer flex flex-col">
            <motion.img
              
              whileHover={{ borderRadius: 0, transition: 0.3 }}
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover"
            />
            <div>
              <span className="absolute top-96">{product.label}</span>
              <p>{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard1;
