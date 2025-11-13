import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTopOnRouteChange Component
 * 
 * Automatically scrolls the page to the top whenever the route changes.
 * This ensures that when users navigate between pages, they always start
 * at the top of the new page instead of maintaining the previous scroll position.
 * 
 * Usage: Place this component inside BrowserRouter in your App.tsx
 */
const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "instant" for immediate scroll, or "smooth" for animated
    });
  }, [pathname]); // Runs every time the pathname changes

  // This component doesn't render anything
  return null;
};

export default ScrollToTopOnRouteChange;
