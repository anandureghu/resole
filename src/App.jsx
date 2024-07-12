import Nav from "./components/Nav";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import { motion } from "framer-motion";
import SuperQuality from "./sections/SuperQuality";

const App = () => {
  return (
    <main className="relative dark:bg-slate-900">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <motion.section
        className="bg-black padding-x padding-t pb-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.1 },
          },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        <Footer />
      </motion.section>
    </main>
  );
};

export default App;
