import { motion } from "framer-motion";
import { useState } from "react";

import { ReactComponent as Logo } from "../../images/svg/logo.svg";
import PreloadComponent, { PreloadOverlay } from "./Preload.styled";

const animationVariants = {
  initial: { opacity: 1 },
  show: {
    opacity: 0,
    transition: {
      delay: 2,
      duration: 1.5,
    },
  },
};

const Preload = () => {
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  return (
    <PreloadOverlay $isComplete={isAnimationComplete}>
      <PreloadComponent setComplete={() => setAnimationComplete(true)}>
        <motion.div variants={animationVariants}>
          <Logo className="logo" />
        </motion.div>
      </PreloadComponent>
    </PreloadOverlay>
  );
};

export default Preload;
