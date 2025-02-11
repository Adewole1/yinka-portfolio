import goToSection from "./navigate.js";

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center px-4 lg:px-6 2xl:px-8 py-6 bg-[#1C1C1C]/30 text-white font-lato h-fit sticky top-0 z-50 left-0 backdrop-blur-2xl">
      <p className="uppercase lg:text-lg 2xl:text-xl">OLAYINKA FADARE</p>
      <div className="hidden gap-3 items-center lg:gap-5 2xl:gap-6 md:flex">
        <p
          onClick={() => goToSection("welcome")}
          className="text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          Hi👋🏾
        </p>
        <div className="h-5 w-[1px] bg-[#484848]"></div>
        <p
          onClick={() => goToSection("studies")}
          className="text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          Design Case Studies
        </p>
        <div className="h-5 w-[1px] bg-[#484848]"></div>
        <p
          onClick={() => goToSection("projects")}
          className="text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          HTML/CSS Projects
        </p>
        <div className="h-5 w-[1px] bg-[#484848]"></div>
        <p
          onClick={() => goToSection("about")}
          className="text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          About
        </p>
        <div className="h-5 w-[1px] bg-[#484848]"></div>
        <a
          href="https://drive.google.com/file/d/12gO0r0Y7h5z-atqxbfVlillOzQytkzCP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          Resume
        </a>
        <div className="h-5 w-[1px] bg-[#484848]"></div>
        <p
          onClick={() => goToSection("contact")}
          className="text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          Contact
        </p>
      </div>
    </div>
  );
};

export default Header;
