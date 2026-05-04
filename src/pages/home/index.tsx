import { useEffect } from "react";
import HomeNavigation from "./_component/home-navigation";
import StartupHeroSection from "./_component/startup-hero-section";
import FooterSection from "./_component/footer-section";
import ProblemSection from "./_component/problem-section";
import SolutionSection from "./_component/solution-section";
import ProductDemoSection from "./_component/product-demo-section";
import SectionDivider from "./_component/section-divider";
import DownloadApp from "./_component/download-app-section";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen home-page-background scroll-smooth">
      <HomeNavigation
        scrollToSection={scrollToSection}
        scrollToTop={scrollToTop}
      />
      <div className="pt-20">
        <StartupHeroSection />
        <SectionDivider variant="curve" direction="down" />

        <ProblemSection />
        <SectionDivider variant="wave" direction="up" />

        <SolutionSection />
        <SectionDivider variant="organic" direction="down" />

        <ProductDemoSection />
        <SectionDivider variant="slope" direction="up" />

        <DownloadApp />
        <SectionDivider variant="curve" direction="up" />

        <FooterSection />
      </div>
    </div>
  );
};

export default Home;
