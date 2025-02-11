import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import Header from "./components/Header";
import confluence from "./assets/images/tools/confluence.png";
import miro from "./assets/images/tools/miro.png";
import figma from "./assets/images/tools/figma.png";
import framer from "./assets/images/tools/framer.png";
import jira from "./assets/images/tools/jira.png";
import randstad from "./assets/icons/randstad.png";
import opera from "./assets/icons/opera.png";
import lemfi from "./assets/icons/lemfi.png";
import opay from "./assets/icons/opay.png";
import terragon from "./assets/icons/terragon.png";

function App() {
  const settings = {
    dots: true,
    infinite: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <svg
        width="14"
        height="24"
        viewBox="0 0 14 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="white"
      >
        <path
          d="M1.75 1.5L12.25 12L1.75 22.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    prevArrow: (
      <svg
        width="14"
        height="24"
        viewBox="0 0 14 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="white"
      >
        <path
          d="M12.25 22.5L1.75 12L12.25 1.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

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
    <div className="flex flex-col items-center w-full h-full bg-[#121212] font-lato no-scrollbar">
      <Header />
      <div className="flex flex-col items-center bg-[#121212] w-full h-full">
        <div className="flex flex-col bg-[#121212] w-full h-full text-white">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 max-w-[1440px] mx-auto gap-6 md:gap-8 lg:gap-10 2xl:gap-10 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-32">
            <div className="flex flex-col gap-4 md:gap-8 lg:gap-10 2xl:gap-12">
              <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-6">
                <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                  Designing solutions that makes your user's lives easier and
                  aligns with your business strategy.
                </p>
                <p className="lg:text-lg text-[#D9D9D9] header">
                  A Data-driven UX Designer with 6 years of experience
                  delivering strategic, end-to-end design for startups,
                  scale-ups, and global companies. I combine design with
                  user/market/product research and business strategy. I
                  collaborate with stakeholders and facilitate strategic
                  workshops to drive impactful solutions, and I have a technical
                  background in HTML, CSS & Javascript.
                </p>
              </div>
              <div className="flex gap-3 items-center lg:gap-4">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.1167 0.333363H2.88333C2.56597 0.328955 2.25084 0.387109 1.95594 0.504503C1.66105 0.621896 1.39217 0.796231 1.16466 1.01755C0.937154 1.23887 0.75547 1.50284 0.629988 1.79438C0.504505 2.08592 0.437682 2.39933 0.433334 2.7167V31.2834C0.437682 31.6007 0.504505 31.9141 0.629988 32.2057C0.75547 32.4972 0.937154 32.7612 1.16466 32.9825C1.39217 33.2038 1.66105 33.3782 1.95594 33.4956C2.25084 33.6129 2.56597 33.6711 2.88333 33.6667H31.1167C31.434 33.6711 31.7492 33.6129 32.0441 33.4956C32.3389 33.3782 32.6078 33.2038 32.8353 32.9825C33.0628 32.7612 33.2445 32.4972 33.37 32.2057C33.4955 31.9141 33.5623 31.6007 33.5667 31.2834V2.7167C33.5623 2.39933 33.4955 2.08592 33.37 1.79438C33.2445 1.50284 33.0628 1.23887 32.8353 1.01755C32.6078 0.796231 32.3389 0.621896 32.0441 0.504503C31.7492 0.387109 31.434 0.328955 31.1167 0.333363ZM10.4833 28.2334H5.48333V13.2334H10.4833V28.2334ZM7.98333 11.1334C7.29377 11.1334 6.63245 10.8594 6.14486 10.3718C5.65726 9.88425 5.38333 9.22293 5.38333 8.53336C5.38333 7.8438 5.65726 7.18248 6.14486 6.69489C6.63245 6.20729 7.29377 5.93336 7.98333 5.93336C8.34949 5.89184 8.72029 5.92812 9.07146 6.03984C9.42262 6.15155 9.74623 6.33618 10.0211 6.58163C10.296 6.82709 10.5159 7.12783 10.6665 7.46417C10.817 7.80051 10.8949 8.16486 10.8949 8.53336C10.8949 8.90187 10.817 9.26622 10.6665 9.60256C10.5159 9.9389 10.296 10.2396 10.0211 10.4851C9.74623 10.7305 9.42262 10.9152 9.07146 11.0269C8.72029 11.1386 8.34949 11.1749 7.98333 11.1334ZM28.5167 28.2334H23.5167V20.1834C23.5167 18.1667 22.8 16.85 20.9833 16.85C20.4211 16.8541 19.8736 17.0305 19.4147 17.3553C18.9558 17.6801 18.6075 18.1378 18.4167 18.6667C18.2862 19.0584 18.2297 19.471 18.25 19.8834V28.2167H13.25C13.25 28.2167 13.25 14.5834 13.25 13.2167H18.25V15.3334C18.7042 14.5452 19.3648 13.8959 20.1607 13.4554C20.9566 13.0148 21.8576 12.7998 22.7667 12.8334C26.1 12.8334 28.5167 14.9834 28.5167 19.6V28.2334Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="34"
                  height="28"
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.3484 4.69451H33.6667V0.805542H21.1996L17.0566 16.0833H16.9432L12.8378 0.805542H0.333328V4.69441H1.61394C1.90999 4.74259 2.18466 4.87883 2.40217 5.08537C2.61967 5.29191 2.76991 5.55918 2.83333 5.85234V22.2362C2.76599 22.5189 2.61248 22.7736 2.39402 22.9652C2.17556 23.1567 1.90297 23.2757 1.61394 23.3055H0.333328V27.1945H10.3333V23.3055H7.83333V6.08336H7.9792L13.7418 27.1945H18.2618L24.0998 6.08336H24.2224V23.3055H21.7223V27.1945H33.6667V23.3055H32.3484C32.066 23.2688 31.8015 23.1467 31.5904 22.9556C31.3792 22.7645 31.2314 22.5136 31.1667 22.2362V5.85244C31.2279 5.5646 31.3727 5.30121 31.5829 5.09524C31.7931 4.88928 32.0594 4.74988 32.3484 4.69451Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="font-medium italic lg:text-lg text-[#D9D9D9] header">
                Netherlands work permit available.
              </p>
            </div>
            <div className="rounded-xl lg:rounded-2xl w-full h-[28rem] md:h-[30rem] lg:h-[36rem] xl:h-[39.5rem] bg-no-repeat bg-[auto_170%] bg-center md:bg-[auto_160%] lg:bg-[auto_160%] xl:bg-[auto_180%] md:bg-[center_top_-150px] lg:bg-[center_top_-200px] xl:bg-[center_top_-280px] bg-[url('/src/assets/images/yinka.jpg')]"></div>
          </div>
          <div
            id="studies"
            className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto"
          >
            <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
              Design Case Studies
            </p>
            <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:gap-6 lg:gap-y-8">
              <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6 w-full p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl">
                <div className="rounded-xl lg:rounded-2xl w-full h-72 lg:h-96 2xl:h-[25rem] bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/studies/randstad.png')]"></div>
                <div className="flex flex-col gap-3 lg:gap-4">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Randstad: Helping Job Seekers make Informed Career
                    Decisions:
                  </p>
                  <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                    By Designing a Unified Salary Checker, which reduced
                    operational Costs by 93% and increased job conversions by
                    40%.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6 w-full p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl">
                <div className="rounded-xl lg:rounded-2xl w-full h-72 lg:h-96 2xl:h-[25rem] bg-no-repeat bg-cover bg-center lg:bg-right-center bg-[url('/src/assets/images/studies/opay.png')]"></div>
                <div className="flex flex-col gap-3 lg:gap-4">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Opera Payments (OPay): Redesigning the Merchant&Developer
                    Payment API Documentation Experience:
                  </p>
                  <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                    To Improve Usability & Engagement and tap into missed
                    revenue opportunities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6 w-full p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl col-span-full">
                <div className="rounded-xl lg:rounded-2xl w-full h-72 lg:h-96 2xl:h-[34rem] bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/studies/quick.png')]"></div>
                <div className="flex flex-col gap-3 lg:gap-4">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Best Rates: Simplifying Cross-Border Payments for Nigerians
                    in UK, Europe & North America:
                  </p>
                  <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                    Designing a centralized, real-time currency comparison tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
            <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:gap-6">
              <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8">
                <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                  Product
                </p>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Business Strategy
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Product Strategy
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Product Design
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    UI/UX Design
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Continous Discovery
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Design System
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8">
                <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                  Process
                </p>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Design Critique
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Design Sprints
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Workshops
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Team Way of Working
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Developer Refinements
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Documentation & Dev Handover
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="projects"
            className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto"
          >
            <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
              Projects I've built with HTML and CSS
            </p>
            <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:gap-6 lg:gap-y-8">
              <div className="flex flex-col p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                <a
                  href="https://olayinkafad.github.io/mollie_landing_page/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl lg:rounded-2xl w-full h-72 lg:h-96 2xl:h-[25rem] bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/projects/mollie.png')] hover:scale-105 transition-all duration-500 ease-in-out"
                ></a>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                      Mollie's Landing page
                    </p>
                    <a
                      href="https://github.com/olayinkafad/mollie_landing_page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-1 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg hover:text-primary transition-all duration-200 ease-in-out"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.61888 8.62795L2.37057 9.87626C1.33831 10.9085 1.33831 12.5969 2.37057 13.6292C3.40283 14.6615 5.09125 14.6615 6.12351 13.6292L9.25229 10.5004C10.2845 9.46816 10.2845 7.77974 9.25229 6.74748M6.74766 9.25211C5.7154 8.21985 5.7154 6.53142 6.74766 5.49917L9.87644 2.37038C10.9087 1.33813 12.5971 1.33813 13.6294 2.37038C14.6616 3.40264 14.6616 5.09107 13.6294 6.12332L12.3811 7.37164"
                          stroke="#FD5D00"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                      </svg>
                      <p className="text-xs lg:text-sm header">Github Link</p>
                    </a>
                  </div>
                  <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                    A clone of Mollie's landing page created with HTML, CSS
                    (Grid, Flexbox and positioning).
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                <a
                  href="https://olayinkafad.github.io/techincal_documentation_page/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl lg:rounded-2xl w-full h-72 lg:h-96 2xl:h-[25rem] bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/projects/documentation.png')] hover:scale-105 transition-all duration-500 ease-in-out"
                ></a>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                      Technical Documentation Page
                    </p>
                    <a
                      href="https://github.com/olayinkafad/techincal_documentation_page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-1 items-center bg-[#2C2C2C] hover:text-primary py-1.5 px-4 rounded-lg transition-all duration-200 ease-in-out"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.61888 8.62795L2.37057 9.87626C1.33831 10.9085 1.33831 12.5969 2.37057 13.6292C3.40283 14.6615 5.09125 14.6615 6.12351 13.6292L9.25229 10.5004C10.2845 9.46816 10.2845 7.77974 9.25229 6.74748M6.74766 9.25211C5.7154 8.21985 5.7154 6.53142 6.74766 5.49917L9.87644 2.37038C10.9087 1.33813 12.5971 1.33813 13.6294 2.37038C14.6616 3.40264 14.6616 5.09107 13.6294 6.12332L12.3811 7.37164"
                          stroke="#FD5D00"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                      </svg>
                      <p className="text-xs lg:text-sm header">Github Link</p>
                    </a>
                  </div>
                  <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                    A Javascript technical documentation page created with HTML
                    and styled with CSS (Flexbox and positioning).
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                <a
                  href="https://olayinkafad.github.io/tribute_page/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl lg:rounded-2xl w-full h-72 lg:h-96 2xl:h-[25rem] bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/projects/tribute.png')] hover:scale-105 transition-all duration-500 ease-in-out"
                ></a>
                <div className="flex flex-col gap-3 lg:gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                      Tribute Page
                    </p>
                    <a
                      href="https://github.com/olayinkafad/tribute_page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-1 items-center bg-[#2C2C2C] hover:text-primary py-1.5 px-4 rounded-lg transition-all duration-200 ease-in-out"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.61888 8.62795L2.37057 9.87626C1.33831 10.9085 1.33831 12.5969 2.37057 13.6292C3.40283 14.6615 5.09125 14.6615 6.12351 13.6292L9.25229 10.5004C10.2845 9.46816 10.2845 7.77974 9.25229 6.74748M6.74766 9.25211C5.7154 8.21985 5.7154 6.53142 6.74766 5.49917L9.87644 2.37038C10.9087 1.33813 12.5971 1.33813 13.6294 2.37038C14.6616 3.40264 14.6616 5.09107 13.6294 6.12332L12.3811 7.37164"
                          stroke="#FD5D00"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                      </svg>
                      <p className="text-xs lg:text-sm header">Github Link</p>
                    </a>
                  </div>
                  <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                    A static tribute page dedicated to John Charles. The page is
                    built using HTML and CSS and showcases key milestones of his
                    life.
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full">
                <a
                  href="https://olayinkafad.github.io/survey_form/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl lg:rounded-2xl w-full h-72 lg:h-96 2xl:h-[25rem] bg-no-repeat bg-cover bg-center bg-[url('/src/assets/images/projects/survey.png')] hover:scale-105 transition-all duration-500 ease-in-out"
                ></a>
                <div className="flex flex-col gap-3 lg:gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                      Survey Form
                    </p>
                    <a
                      href="https://github.com/olayinkafad/survey_form"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-1 items-center bg-[#2C2C2C] hover:text-primary py-1.5 px-4 rounded-lg transition-all duration-200 ease-in-out"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.61888 8.62795L2.37057 9.87626C1.33831 10.9085 1.33831 12.5969 2.37057 13.6292C3.40283 14.6615 5.09125 14.6615 6.12351 13.6292L9.25229 10.5004C10.2845 9.46816 10.2845 7.77974 9.25229 6.74748M6.74766 9.25211C5.7154 8.21985 5.7154 6.53142 6.74766 5.49917L9.87644 2.37038C10.9087 1.33813 12.5971 1.33813 13.6294 2.37038C14.6616 3.40264 14.6616 5.09107 13.6294 6.12332L12.3811 7.37164"
                          stroke="#FD5D00"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                      </svg>
                      <p className="text-xs lg:text-sm header">Github Link</p>
                    </a>
                  </div>
                  <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                    A Javascript technical documentation page created with HTML
                    and styled with CSS (Flexbox and positioning).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="about"
            className="flex flex-col bg-gradient-to-tr from-[#422f7d] to-black w-full"
          >
            <div className="flex flex-col max-w-[1440px] mx-auto gap-4 lg:gap-12 2xl:gap-16 items-center w-full py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] ">
              <div className="grid grid-cols-1 gap-4 w-full xl:grid-cols-2 md:gap-5 lg:gap-6">
                <div className="grid grid-cols-1 gap-4 w-full min-[330px]:grid-cols-2 md:gap-5 lg:gap-6">
                  <div className="bg-no-repeat bg-[auto_120%] bg-center bg-[url('/src/assets/images/about/about1.jpg')] h-[32rem] md:h-[43.5rem] w-full rounded-xl lg:rounded-2xl -rotate-y-180"></div>
                  <div className="bg-no-repeat bg-[auto_120%] bg-center bg-[url('/src/assets/images/about/about2.jpg')] h-[32rem] md:h-[43.5rem] w-full rounded-xl lg:rounded-2xl -rotate-y-180"></div>
                  <div className="bg-no-repeat bg-[auto_120%] bg-[left_45%_center] bg-[url('/src/assets/images/about/about3.jpg')] h-[32rem] md:h-[43.5rem] w-full rounded-xl lg:rounded-2xl -rotate-y-180"></div>
                  <div className="bg-no-repeat bg-[auto_120%] bg-center bg-[url('/src/assets/images/about/about4.jpg')] h-[32rem] md:h-[43.5rem] w-full rounded-xl lg:rounded-2xl -rotate-y-180"></div>
                </div>
                <div className="rounded-xl lg:rounded-2xl bg-[#1C1C1C] flex p-4 md:p-5 lg:p-6 flex-col gap-4 lg:gap-6 2xl:gap-8 w-full h-fit">
                  <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5">
                    <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                      About Me
                    </p>
                    <p className="lg:text-lg text-[#D9D9D9] header">
                      A strategic UX Designer with over six years of experience
                      shaping user-centered solutions across industries like
                      recruitment, fintech, and payments. With a background in
                      Computer Science, I have a solid technical background in
                      HTML & CSS.
                    </p>
                    <p className="lg:text-lg text-[#D9D9D9] header">
                      I've designed and scaled impactful projects for start-ups,
                      scale-ups and global companies, across Africa, Europe, and
                      North America. Beyond design execution, I bring a
                      strategic perspective to design, combining design with
                      business strategy.
                    </p>
                    <p className="lg:text-lg text-[#D9D9D9] header">
                      From facilitating workshops using strategic tools, I help
                      teams uncover opportunities, co-create innovative ideas,
                      and track success with meaningful metrics. I thrive at the
                      intersection of creativity, strategy, and collaboration,
                      and I'm always learning to stay ahead in this
                      ever-evolving field.
                    </p>
                    <p className="lg:text-lg text-[#D9D9D9] header">
                      Additionally, I promote design culture within the
                      organizations I've worked at, having initiated a monthly
                      UX newsletter, creating a wireframing library for rapid
                      idea communication, concept validation, and stakeholder
                      buy-in and hosting monthly design events.
                    </p>
                    <p className="lg:text-lg text-[#D9D9D9] header">
                      Outside of work, I enjoy parenting my energetic 5 year
                      old, traveling, biking, and swimming. Life is a balancing
                      act, but I'm fully committed both professionally and
                      personally. Let's connect and create something amazing!
                    </p>
                  </div>
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Soft Skills
                  </p>
                  <div className="flex flex-wrap gap-3 items-center lg:gap-4">
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">Ownership</p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Data-Driven Decision Making
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">Communication</p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Workshop Facilitation
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Strategic Problem Solving
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Stakeholder Collaboration
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">Empathy</p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Critical Thinking
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Time Management
                      </p>
                    </div>
                  </div>
                  <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                    Hard Skills
                  </p>
                  <div className="flex flex-wrap gap-3 items-center lg:gap-4">
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Business Strategy
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Product Strategy
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">User Research</p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Usability Testing
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Workshop Facilitation
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Market Analysis
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Prototyping and Wireframing
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">Design System</p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        A/B Testing and Data Analysis
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">
                        Strategic Alignment
                      </p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">Figma</p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">Sketch</p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">Framer</p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">HTML</p>
                    </div>
                    <div className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg">
                      <div className="rounded-full size-2 bg-primary"></div>
                      <p className="text-xs lg:text-sm header">CSS</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 col-span-full gap-4 lg:grid-cols-2 md:gap-5 lg:gap-6">
                  <div className="rounded-xl lg:rounded-2xl bg-[#1C1C1C] flex p-4 md:p-5 lg:p-6 flex-col gap-4 lg:gap-6 2xl:gap-8 w-full h-full">
                    <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                      Experience
                    </p>
                    <div className="flex flex-col gap-1 lg:gap-1.5">
                      <div className="flex justify-between items-center">
                        <p className="text-lg lg:text-xl">Senior UX Designer</p>
                        <p className="lg:text-lg">2022 - Present</p>
                      </div>
                      <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                        Randstad Global
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-1.5">
                      <div className="flex justify-between items-center">
                        <p className="text-lg lg:text-xl">
                          Senior Product Designer
                        </p>
                        <p className="lg:text-lg">2021 - 2022</p>
                      </div>
                      <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                        Pastel Africa
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-1.5">
                      <div className="flex justify-between items-center">
                        <p className="text-lg lg:text-xl">Product Designer</p>
                        <p className="lg:text-lg">2020 - 2021</p>
                      </div>
                      <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                        Opera Payments (OPay)
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-1.5">
                      <div className="flex justify-between items-center">
                        <p className="text-lg lg:text-xl">Product Designer</p>
                        <p className="lg:text-lg">2018 - 2020</p>
                      </div>
                      <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                        Terragon Group
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl lg:rounded-2xl bg-[#1C1C1C] flex p-4 md:p-5 lg:p-6 flex-col gap-4 lg:gap-6 2xl:gap-8 w-full h-full">
                    <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                      Education
                    </p>
                    <div className="flex flex-col gap-1 lg:gap-1.5">
                      <div className="flex justify-between items-center">
                        <p className="text-lg lg:text-xl">
                          Strategic Design Career Accelerator
                        </p>
                        <p className="lg:text-lg">2024</p>
                      </div>
                      <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                        Maven
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-1.5">
                      <div className="flex justify-between items-center">
                        <p className="text-lg lg:text-xl">Data-Driven Design</p>
                        <p className="lg:text-lg">2024</p>
                      </div>
                      <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                        Interaction Design Foundation (IDF)
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-1.5">
                      <div className="flex justify-between items-center">
                        <p className="text-lg lg:text-xl">AI for Designers</p>
                        <p className="lg:text-lg">2024</p>
                      </div>
                      <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                        Interaction Design Foundation (IDF)
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-1.5">
                      <div className="flex justify-between items-center">
                        <p className="text-lg lg:text-xl">
                          Product Strategy for Designers
                        </p>
                        <p className="lg:text-lg">2023</p>
                      </div>
                      <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                        Maven
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-1.5">
                      <div className="flex justify-between items-center">
                        <p className="text-lg lg:text-xl">
                          Bsc. Computer Science
                        </p>
                        <p className="lg:text-lg">2013</p>
                      </div>
                      <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                        Ajayi Crowther University
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl lg:rounded-2xl bg-[#1C1C1C] flex p-4 md:p-5 lg:p-6 flex-col gap-4 lg:gap-5 w-full h-full col-span-full">
                  <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                    Tool Stack
                  </p>
                  <div className="flex justify-between items-center w-full">
                    <img
                      src={confluence}
                      alt="confluence"
                      className="w-24 min-[330px]:w-32 h-auto md:w-40 lg:w-56"
                    />
                    <img
                      src={miro}
                      alt="miro"
                      className="w-5 min-[330px]:w-7 h-auto md:w-10 lg:w-12"
                    />
                    <img
                      src={figma}
                      alt="figma"
                      className="w-5 min-[330px]:w-7 h-auto md:w-10 lg:w-12"
                    />
                    <img
                      src={framer}
                      alt="framer"
                      className="w-5 min-[330px]:w-7 h-auto md:w-10 lg:w-12"
                    />
                    <img
                      src={jira}
                      alt="jira"
                      className="w-12 min-[330px]:w-16 h-auto md:w-24 lg:w-28"
                    />
                  </div>
                </div>
              </div>
              <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                What My Colleagues are Saying About Me
              </p>
              <div className="py-4 md:py-8 lg:py-12 2xl:py-16 w-full md:w-[80%] 2xl:w-[70%] mx-auto">
                <Slider {...settings}>
                  <div className="!flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 !w-[75%] mx-auto">
                    <p className="text-lg text-center md:text-xl lg:text-2xl md:leading-8 lg:leading-10">
                      “I've worked with Olayinka for the past 3 years, creating
                      web applications to serve Randstad's job seekers. She's a
                      driven designer with an interest in strategy, and the
                      bigger picture, so that she can solve the real underlying
                      problems, and not just the symptoms. Any organization
                      would be happy to have her as part of their product team.”
                    </p>
                    <div className="flex flex-col gap-3 items-center lg:gap-4">
                      <div className="size-12 lg:size-14 bg-cover bg-no-repeat rounded-full bg-[url('/src/assets/images/testimonials/david.jpg')]"></div>
                      <div className="flex flex-col items-center">
                        <p className="text-sm font-medium lg:text-base">
                          David Guiza Caicedo
                        </p>
                        <p className="text-xs font-light lg:text-sm">
                          Design Manager, Randstad
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="!flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 !w-[75%] mx-auto">
                    <p className="text-lg text-center md:text-xl lg:text-2xl md:leading-8 lg:leading-10">
                      “I had the pleasure of working with Olayinka for almost 3
                      years, during which she consistently impressed me with her
                      ambition, enthusiasm, and ability to adapt the approach to
                      achieve exceptional results. Her design and technical
                      expertise consistently elevated the quality of her
                      deliverables, while her clear, thoughtful communication
                      made collaboration seamless and effective. What sets her
                      apart is her proactive attitude and commitment to excel.
                      She takes full ownership of her responsibilities, ensuring
                      every task is completed with care and precision. At the
                      same time, she is deeply invested in her own learning and
                      development, consistently seeking opportunities to try new
                      methods, grow and refine her skills. I wholeheartedly
                      recommend Olayinka to anyone seeking an invested, driven,
                      and collaborative professional who delivers impactful
                      results and inspires those around her.”
                    </p>
                    <div className="flex flex-col gap-3 items-center lg:gap-4">
                      <div className="size-12 lg:size-14 bg-cover bg-no-repeat rounded-full bg-[url('/src/assets/images/testimonials/alex.jpg')]"></div>
                      <div className="flex flex-col items-center">
                        <p className="text-sm font-medium lg:text-base">
                          Alexandra Timus
                        </p>
                        <p className="text-xs font-light lg:text-sm">
                          Strategic Senior UX Designer, Randstad
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="!flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 !w-[75%] mx-auto">
                    <p className="text-lg text-center md:text-xl lg:text-2xl md:leading-8 lg:leading-10">
                      “I've had a great time working with Olayinka on YourRoomz;
                      she's a very talented designer and has a bright future.
                      Olayinka's ability to understand and digest new problems
                      is uniquely quick. She was able to produce the current
                      YourRoomz UX within 1-2 weeks of hearing our initial
                      problem statement, on top of tending to her primary job.
                      What's even more impressive, however, is that she was able
                      to do so when online furniture shopping - the basis of our
                      product - doesn't exist in her home country. Olayinka has
                      done things the right way; she designed a beautiful UX
                      because she focused on listening to users and their pain
                      points. I'm very excited to continue working with her and
                      can't wait to see what else she comes up with.”
                    </p>
                    <div className="flex flex-col gap-3 items-center lg:gap-4">
                      <div className="size-12 lg:size-14 bg-cover bg-no-repeat rounded-full bg-[url('/src/assets/images/testimonials/patt.jpg')]"></div>
                      <div className="flex flex-col items-center">
                        <p className="text-sm font-medium lg:text-base">
                          Patt Quinn
                        </p>
                        <p className="text-xs font-light lg:text-sm">
                          Digital Experience Consultant, IBM
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
            <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
              Writing
            </p>
            <a
              href="https://olayinkaodetola5.medium.com/redesigning-the-opay-developer-documentation-site-f509b902c20a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-[#D9D9D9] w-fit underline hover:text-primary transition-all duration-300 ease-in-out"
            >
              Redesigning the OPay Developer Documentation site
            </a>
            <div className="h-px w-full bg-[#484848]"></div>
            <a
              href="https://olayinkaodetola5.medium.com/ui-ux-design-and-why-it-is-important-2b54920501a1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-[#D9D9D9] w-fit underline hover:text-primary transition-all duration-300 ease-in-out"
            >
              UI/UX Design and Why It Is Important!
            </a>
            <div className="h-px w-full bg-[#484848]"></div>
            <a
              href="https://olayinkaodetola5.medium.com/how-i-redesigned-adrenaline-terragon-groups-flagship-product-37aa148c6d35"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-[#D9D9D9] w-fit underline hover:text-primary transition-all duration-300 ease-in-out"
            >
              How I redesigned Adrenaline — Terragon Group's flagship product
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
            <p className="font-light tracking-tighter lg:text-lg header">
              Companies I've Worked With
            </p>
            <div className="flex gap-4 items-center md:gap-6 lg:gap-8 2xl:gap-12">
              <img
                src={randstad}
                className="w-10 min-[330px]:w-14 h-auto md:w-28 lg:w-36 xl:w-40"
              />
              <img
                src={opera}
                className="w-10 min-[330px]:w-14 h-auto md:w-28 lg:w-36 xl:w-40"
              />
              <img
                src={lemfi}
                className="w-10 min-[330px]:w-14 h-auto md:w-28 lg:w-36 xl:w-40"
              />
              <img
                src={opay}
                className="w-10 min-[330px]:w-14 h-auto md:w-28 lg:w-36 xl:w-40"
              />
              <img
                src={terragon}
                className="w-10 min-[330px]:w-14 h-auto md:w-28 lg:w-36 xl:w-40"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
            <div className="flex flex-col gap-3 items-center lg:gap-4">
              <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                Let’s Work Together!
              </p>
              <p className="text-lg font-normal text-center lg:text-xl lg:leading-10">
                You can send me an email:{" "}
                <a
                  href="mailto:olayinkaodetola5@gmail.com"
                  className="font-bold transition-all duration-300 ease-in-out hover:text-primary"
                >
                  olayinkaodetola5@gmail.com
                </a>{" "}
                or connect with me on <br />
                <a
                  href="https://www.linkedin.com/in/olayinka-fadare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-all duration-300 ease-in-out text-primary underline-offset-4"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-8 lg:gap-12 2xl:gap-16 pb-8 md:pb-12 lg:pb-16 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
            <div className="relative flex flex-col w-screen max-w-[1440px] overflow-x-scroll no-scrollbar">
              <div className="fade-effect fade-left"></div>
              <div className="fade-effect fade-right"></div>
              <div className="scroll-wrapper" ref={scrollContainer2Ref}>
                <div className="flex gap-4 items-center pt-4 pl-4 scroll-container lg:gap-6">
                  <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/footer/job.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-[25rem] md:min-w-[37.5rem] 2xl:min-w-[47rem] h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[30rem]"></div>
                  <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/footer/salary.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-28 md:min-w-44 lg:min-w-44 2xl:min-w-60 h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
                  <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/footer/mart.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-28 md:min-w-44 lg:min-w-44 2xl:min-w-56 h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
                  <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/footer/transfer.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-28 md:min-w-48 2xl:min-w-60 h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem] "></div>
                  <div className="scroll-item bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/footer/profile.png')] border md:border-2 border-white/80 rounded-xl md:rounded-2xl min-w-[25rem] md:min-w-[37.5rem] 2xl:min-w-[47rem] h-full will-change-transform duration-500 min-h-60 md:min-h-[25rem] 2xl:min-h-[32rem]"></div>
                </div>
              </div>
            </div>
            <div
              id="contact"
              className="flex flex-col items-center w-screen overflow-x-clip"
            >
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
                      <a
                        href="mailto:olayinkaodetola5@gmail.com"
                        className="hover:text-primary"
                      >
                        Email
                      </a>
                      <a
                        href="https://www.linkedin.com/in/olayinka-fadare/"
                        className="hover:text-primary"
                      >
                        Linkedin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
