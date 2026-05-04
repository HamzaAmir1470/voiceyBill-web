import { Button } from "@/components/ui/button";
import Logo from "@/components/logo/logo";
import { Link } from "react-router-dom";
import { useTypedSelector } from "@/app/hook";
import { useState, useEffect } from "react";

interface HomeNavigationProps {
  scrollToSection: (sectionId: string) => void;
  scrollToTop: () => void;
}

const HomeNavigation = ({
  scrollToSection,
  scrollToTop,
}: HomeNavigationProps) => {
  const { user, accessToken } = useTypedSelector((state) => state.auth);
  const isAuthenticated = !!(user && accessToken);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`border-b bg-background/70 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div onClick={scrollToTop} className="cursor-pointer">
            <Logo url="/" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("mobile-app")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              App
            </button>
            {/* <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Contact
            </button> */}
          </div>

          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              // Show Dashboard button when user is logged in
              <Button
                size="sm"
                asChild
                className="text-sm px-6 transition-all duration-300 bg-green-500 hover:bg-green-600 text-white"
              >
                <Link to="/overview">Dashboard</Link>
              </Button>
            ) : (
              // Show Sign In/Get Started when user is not logged in
              <>
                <Button variant="ghost" size="sm" asChild className="text-sm">
                  <Link to="/sign-in">Sign In</Link>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="text-sm px-6 transition-all duration-300 bg-green-500 hover:bg-green-600 text-white"
                >
                  <Link to="/sign-up">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavigation;
