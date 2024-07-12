import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { motion } from "framer-motion";
import { containerVariant } from "../constants/framer";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);

  const item = {
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5 },
      rotateY: 0,
    }),
    hidden: { opacity: 0, rotateY: -90 },
  };
  return (
    <motion.section
      id="home"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <motion.div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collecition
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold dark:text-slate-100">
          <motion.span
            initial="hidden"
            whileInView={{ transition: { delay: 0 } }}
            className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 dark:xl:bg-slate-900"
          >
            The New Arrival
          </motion.span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-slate-400">
          Discover stylish nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" icon={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold dark:text-slate-100">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center z-[1]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      >
        <motion.img
          src={bigShoe}
          alt="shoe collection"
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 500, opacity: 1 }}
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <motion.div
          className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-10 max-sm:px-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          {shoes.map((shoe, i) => {
            return (
              <motion.div custom={i} className="" key={shoe} variants={item}>
                <ShoeCard
                  imgUrl={shoe}
                  changeShoeImg={(shoe) => {
                    setBigShoe(shoe);
                  }}
                  currentImg={bigShoe}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
