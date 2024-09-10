import { motion } from "framer-motion";

const TestimonialItem = ({ name, testimony }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="px-5 py-10 rounded-[21.53px] bg-[#F8F8F8] flex flex-col justify-center gap-3 h-[350px]"
    >
      <h4 className="text-[20px] text-[#1E1E1E] font-semibold">{name}</h4>
      <p className="text-[#4B514F] text-[18px]">{testimony}</p>
    </motion.div>
  );
};

export default TestimonialItem;
