import { useEffect, useRef } from "react";

const GALLERY_IMAGES = [
  {
    id: 1,
    url: "/src/assets/images/footer/job.png",
    className: "w-[25rem] md:w-[37.5rem] 2xl:w-[47rem] h-60 md:h-[25rem] 2xl:h-[30rem]",
  },
  {
    id: 2,
    url: "/src/assets/images/footer/salary.png",
    className: "w-28 md:w-44 lg:w-44 2xl:w-60 h-60 md:h-[25rem] 2xl:h-[32rem]",
  },
  {
    id: 3,
    url: "/src/assets/images/footer/mart.png",
    className: "w-28 md:w-44 lg:w-44 2xl:w-56 h-60 md:h-[25rem] 2xl:h-[32rem]",
  },
  {
    id: 4,
    url: "/src/assets/images/footer/transfer.png",
    className: "w-28 md:w-48 2xl:w-60 h-60 md:h-[25rem] 2xl:h-[32rem]",
  },
  {
    id: 5,
    url: "/src/assets/images/footer/profile.png",
    className: "w-[25rem] md:w-[37.5rem] 2xl:w-[47rem] h-60 md:h-[25rem] 2xl:h-[32rem]",
  },
];

const FOOTER_LINKS = [
  {
    id: 1,
    text: "Email",
    url: "mailto:olayinkaodetola5@gmail.com",
  },
  {
    id: 2,
    text: "Linkedin",
    url: "https://www.linkedin.com/in/olayinka-fadare/",
  },
];

function FooterGallery() {
  const scrollContainer2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainer2Ref.current;
    const firstSet = scrollContainer?.innerHTML;

    // Clone the items to create the loop effect
    if (scrollContainer) {
      scrollContainer.innerHTML += firstSet;
      const resetScroll = () => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      };
      scrollContainer.addEventListener("scroll", resetScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", resetScroll);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 lg:gap-12 2xl:gap-16 pb-8 md:pb-12 lg:pb-16 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
      <div className="relative flex flex-col w-screen max-w-[1440px] overflow-x-scroll no-scrollbar">
        <div className="fade-effect fade-left"></div>
        <div className="fade-effect fade-right"></div>
        <div className="scroll-wrapper" ref={scrollContainer2Ref}>
          <div className="flex gap-4 items-center pt-4 pl-4 scroll-container lg:gap-6">
            {GALLERY_IMAGES.map((image) => (
              <div
                key={image.id}
                className={`scroll-item border md:border-2 border-white/80 rounded-xl md:rounded-2xl ${image.className} will-change-transform duration-500 overflow-hidden`}
              >
                <img src={image.url} alt={"Footer gallery"} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="contact" className="flex flex-col items-center w-screen overflow-x-clip">
        <div className="flex flex-col items-center py-6 md:py-8 lg:py-12 2xl:py-16 px-4 md:px-12 lg:px-16 2xl:px-20 gap-4 lg:gap-6 2xl:gap-8 overflow-x-clip w-screen max-w-[1440px]">
          <div className="flex flex-col items-center gap-4 pt-4 lg:pt-6 2xl:pt-8 border-t border-t-[#484848] w-full">
            <p className="block text-lg uppercase font-instrument lg:text-xl 2xl:text-2xl md:hidden">
              Olayinka Fadare
            </p>
            <div className="flex justify-between items-center w-full">
              <p className="text-sm lg:text-base text-[#A8A8B5]">
                © {new Date().getFullYear()}. All rights reserved.
              </p>
              <p className="hidden text-lg uppercase font-instrument lg:text-xl 2xl:text-2xl md:block">
                Olayinka Fadare
              </p>
              <div className="flex items-center gap-4 lg:gap-6 2xl:gap-8 text-[#A8A8B5] lg:text-lg">
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="hover:text-primary"
                    target={link.id === 2 ? "_blank" : undefined}
                    rel={link.id === 2 ? "noopener noreferrer" : undefined}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterGallery;

