import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { containerItemVariant, containerVariant } from "../constants/framer";

const SpecialOffer = () => {
  return (
    <motion.section
      id="special-offer"
      className="max-container"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div
        variants={containerItemVariant}
        className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10"
      >
        <div className="flex-1">
          <img
            src={offer}
            alt=""
            width={773}
            height={687}
            className="object-contain w-full"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg dark:text-slate-100">
            <span className="text-coral-red">Special</span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text dark:text-slate-400">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>

          <p className="mt-6 lg:max-w-lg info-text dark:text-slate-400">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" icon={arrowRight} />
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SpecialOffer;
