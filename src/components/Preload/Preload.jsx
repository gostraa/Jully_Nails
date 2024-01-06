import { AnimatePresence } from "framer-motion";
import { ReactComponent as Logo } from "../../images/svg/logo.svg";
import { useEffect, useState } from "react";
import { PreloadOverlay, PreloadStyles } from "./Preload.styled";

const Preload = () => {
  const [showPreload, setShowPreload] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPreload(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPreload && (
        <PreloadOverlay>
          <PreloadStyles
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Logo className="logo" />
          </PreloadStyles>
        </PreloadOverlay>
      )}
    </AnimatePresence>
  );
};

export default Preload;
