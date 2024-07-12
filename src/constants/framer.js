export const containerVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 },
    staggerChildren: 0.1,
  },
  hidden: { opacity: 0, y: 10 },
};

export const containerItemVariant = {
  visible: {
    opacity: 1,
    y: 10,
    transition: { duration: 0.5, delay: 0.1 },
  },
  hidden: { opacity: 0, y: 10 },
};
