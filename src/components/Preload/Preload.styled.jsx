import styled from "styled-components";
import { motion } from "framer-motion";

const PreloadStyles = styled(motion.div)`
  .logo {
    width: 300px;
    height: 100px;
  }

  @media screen and (min-width: 768px) {
    .logo {
      width: 400px;
      height: 150px;
    }
  }
  @media screen and (min-width: 1280px) {
    .logo {
      width: 500px;
      height: 200px;
    }
  }
`;

export const PreloadOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--burger-modal);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: ${({ $isComplete }) => ($isComplete ? "none" : "flex")};
  justify-content: center;
  align-items: center;
`;

const container = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const PreloadComponent = ({ children, setComplete }) => (
  <PreloadStyles
    variants={container}
    initial="initial"
    animate="show"
    onAnimationComplete={() => setComplete()}
  >
    {children}
  </PreloadStyles>
);

export default PreloadComponent;
