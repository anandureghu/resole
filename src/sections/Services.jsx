import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { motion } from "framer-motion";
import { containerVariant } from "../constants/framer";

const Services = () => {
  return (
    <motion.section
      className="max-container flex justify-center flex-wrap gap-9"
      id="services"
      initial="hidden"
      whileInView="visible"
      variants={containerVariant}
    >
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />;
      })}
    </motion.section>
  );
};

export default Services;
