import { useState } from "react";
import goToSection from "./navigate.js";

const Header = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="flex w-full justify-between items-center px-4 lg:px-6 2xl:px-8 py-6 bg-[#1C1C1C]/30 text-white font-lato h-fit sticky top-0 z-50 left-0 backdrop-blur-2xl">
      <p className="uppercase lg:text-lg 2xl:text-xl">OLAYINKA FADARE</p>
      <div className="gap-3 items-center lg:gap-5 2xl:gap-6 flex">
        <p
          onClick={() => goToSection("welcome")}
          className="text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          Hi👋🏾
        </p>
        <div className="hidden md:inline-block h-5 w-[1px] bg-[#484848]"></div>
        <p
          onClick={() => goToSection("studies")}
          className="hidden md:inline-block text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          Design Case Studies
        </p>
        <div className="hidden md:inline-block h-5 w-[1px] bg-[#484848]"></div>
        <p
          onClick={() => goToSection("projects")}
          className="hidden md:inline-block text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          HTML/CSS Projects
        </p>
        <div className="hidden md:inline-block h-5 w-[1px] bg-[#484848]"></div>
        <p
          onClick={() => goToSection("about")}
          className="hidden md:inline-block text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          About
        </p>
        <div className="hidden md:inline-block h-5 w-[1px] bg-[#484848]"></div>
        <a
          href="https://drive.google.com/file/d/12gO0r0Y7h5z-atqxbfVlillOzQytkzCP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          Resume
        </a>
        <div className="hidden md:inline-block h-5 w-[1px] bg-[#484848]"></div>
        <p
          onClick={() => goToSection("contact")}
          className="hidden md:inline-block text-sm transition-all duration-500 ease-in-out lg:text-base 2xl:text-lg hover:text-primary hover:cursor-pointer"
        >
          Contact
        </p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white md:hidden"
          onClick={() => showSidebar()}
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
        <div
          className={`h-screen fixed w-full top-0 transition-all bg-[#1C1C1C]/70 shadow-2xl backdrop-blur-2xl ${
            sidebar ? "-left-full duration-700" : "left-0 duration-300"
          }`}
        >
          <div className="bg-[#1C1C1C] w-4/5 flex flex-col gap-4 h-full px-4 py-6 backdrop-blur-2xl">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white size-12 hover:text-primary"
              onClick={() => showSidebar()}
            >
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
            <div className="flex flex-col h-full">
              <div
                onClick={() => {
                  goToSection("studies");
                  showSidebar();
                }}
                className={`rounded-xl bg-transparent p-3 w-full hover:bg-primary text-white text-2xl hover:cursor-pointer relative transition-all delay-75 ${
                  sidebar ? "-left-full duration-700" : "left-0 duration-500"
                }`}
              >
                Design Case Studies
              </div>
              <div
                onClick={() => {
                  goToSection("projects");
                  showSidebar();
                }}
                className={`rounded-xl bg-transparent p-3 w-full hover:bg-primary text-white text-2xl hover:cursor-pointer relative transition-all delay-100 ${
                  sidebar ? "-left-full duration-700" : "left-0 duration-500"
                }`}
              >
                HTML/CSS Projects
              </div>
              <div
                onClick={() => {
                  goToSection("about");
                  showSidebar();
                }}
                className={`rounded-xl bg-transparent p-3 w-full hover:bg-primary text-white text-2xl hover:cursor-pointer relative transition-all delay-150 ${
                  sidebar ? "-left-full duration-700" : "left-0 duration-500"
                }`}
              >
                About
              </div>
              <div
                onClick={() => {
                  goToSection("contact");
                  showSidebar();
                }}
                className={`rounded-xl bg-transparent p-3 w-full hover:bg-primary text-white text-2xl hover:cursor-pointer relative transition-all delay-200 ${
                  sidebar ? "-left-full duration-700" : "left-0 duration-500"
                }`}
              >
                Contact
              </div>
              <a
                href="https://drive.google.com/file/d/12gO0r0Y7h5z-atqxbfVlillOzQytkzCP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-primary rounded-lg py-2.5 md:py-3 px-3.5 md:px-4 font-medium text-white text-xl mt-auto relative transition-all ${
                  sidebar
                    ? "-bottom-full duration-700"
                    : "bottom-0 duration-300"
                }`}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
