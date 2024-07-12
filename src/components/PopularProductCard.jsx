import { star } from "../assets/icons";
import { motion } from "framer-motion";

const PopularProductCard = ({ imgURL, name, price, index }) => {
  const item = {
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 },
    }),
    hidden: { opacity: 0, y: -7 },
  };
  return (
    <motion.div
      className="flex flex-1 flex-col w-full max-sm:w-full"
      custom={index}
      variants={item}
    >
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-400">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-slate-100">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
        {price}
      </p>
    </motion.div>
  );
};

export default PopularProductCard;
