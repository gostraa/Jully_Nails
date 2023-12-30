import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      const windowSize = window.innerWidth;

      if (windowSize < 768) {
        setWindowWidth("isMobile");
      } else if (windowSize < 1280) {
        setWindowWidth("isTablet");
      } else if (windowSize >= 1280) {
        setWindowWidth("isDesktop");
      }
    };
    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth();

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
