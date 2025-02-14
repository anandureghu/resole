import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { containerItemVariant, containerVariant } from "../constants/framer";

const SuperQuality = () => {
  return (
    <motion.section
      className="max-container"
      id="about-us"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div
        variants={containerItemVariant}
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg dark:text-slate-100">
            We Provide You <span className="text-coral-red">Super</span>
            <br />
            <span className="text-coral-red">Quality</span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text dark:text-slate-400">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>

          <p className="mt-6 lg:max-w-lg info-text dark:text-slate-400">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SuperQuality;
