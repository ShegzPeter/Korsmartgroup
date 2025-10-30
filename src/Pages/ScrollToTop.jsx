import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly reset scroll position — no smooth behavior
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
