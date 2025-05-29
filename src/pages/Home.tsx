import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-4xl font-bold mb-6">Home Page</h1>
      <p>Welcome to the home page.</p>
    </motion.div>
  );
}