import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { motion } from "framer-motion";
import { containerItemVariant, containerVariant } from "../constants/framer";

const CustomerReviews = () => {
  return (
    <motion.section
      id="reviews"
      className="max-container "
      initial="hidden"
      whileInView="visible"
      variants={containerVariant}
    >
      <motion.div variants={containerItemVariant}>
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What our? <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional expereiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => {
            return <ReviewCard key={review.customerName} {...review} />;
          })}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CustomerReviews;
