import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ProductProcessSection from "./components/ProductProcessSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import WritingSection from "./components/WritingSection";
import CompaniesSection from "./components/CompaniesSection";
import ContactSection from "./components/ContactSection";
import FooterGallery from "./components/FooterGallery";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-[#121212] font-lato no-scrollbar">
      <Header />
      <div className="flex flex-col items-center bg-[#121212] w-full h-full">
        <div className="flex flex-col bg-[#121212] w-full h-full text-white">
          <HeroSection />
          <CaseStudiesSection />
          <ProductProcessSection />
          <Certifications />
          <ProjectsSection />
          <AboutSection />
          <WritingSection />
          <CompaniesSection />
          <ContactSection />
          <FooterGallery />
        </div>
      </div>
    </div>
  );
}

export default App;
