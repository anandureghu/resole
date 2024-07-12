import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import { motion } from "framer-motion";
import { containerItemVariant, containerVariant } from "../constants/framer";

const PopularProducts = () => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.section
      id="products"
      className="max-container max-sm:mt-12"
      initial="hidden"
      whileInView="visible"
      variants={containerVariant}
    >
      <motion.div
        className="flex flex-col justify-start gap-5"
        variants={containerItemVariant}
      >
        <h2 className="text-4xl font-palanquin font-bold dark:text-slate-100">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-12 font-montserrat text-slate-gray dark:text-slate-400">
          Experience top notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </motion.div>

      <motion.div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
        initial="hidden"
        whileInView="visible"
        variants={list}
      >
        {products.map((product, index) => {
          return (
            <PopularProductCard key={product.name} {...product} index={index} />
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default PopularProducts;
