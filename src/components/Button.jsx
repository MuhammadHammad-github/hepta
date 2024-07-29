import { motion } from "framer-motion";
import React from "react";

const Button = ({ text = "Text Here", onClick = () => {}, className }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`rounded-lg font-semibold bg-transparent px-4 py-4 transitional border border-white text-white text-xl hover:bg-white hover:text-black hover:border-black active:scale-95 ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
