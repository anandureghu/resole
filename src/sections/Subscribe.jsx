import Button from "../components/Button";
import { motion } from "framer-motion";
import { containerItemVariant, containerVariant } from "../constants/framer";

const Subscribe = () => {
  return (
    <motion.section
      id="contact-us"
      className="max-container"
      initial="hidden"
      whileInView="visible"
      variants={containerVariant}
    >
      <motion.div
        className="flex justify-between items-center max-lg:flex-col gap-10"
        variants={containerItemVariant}
      >
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold dark:text-slate-100">
          Sign Up For <span className="text-coral-red">Updates</span> &
          Newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input
            type="text"
            className="input dark:bg-slate-900"
            placeholder="subscribe@resole.com"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label={"Sign Up"} fullWidth />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Subscribe;
