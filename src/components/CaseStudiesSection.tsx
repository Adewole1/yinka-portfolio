const CASE_STUDIES = [
  {
    id: 1,
    title: "HomeWise: AI Home Affordability & Savings Coach:",
    description:
      "Empowering home buyers in the Netherlands to understand their real home-buying potential through a clear, conversational AI experience.",
    image: "/src/assets/images/studies/homeWise.png",
    url: "https://www.figma.com/deck/3mQj8M3XhenvNcyzm5nip9/AI-Home-Affordability-Coach?node-id=1-318&t=oomwwpgmCN695V9z-1",
    imagePosition: "bg-center",
    height: "2xl:h-[25rem]",
    spanFull: false,
  },
  {
    id: 2,
    title: "Randstad: Helping Job Seekers make Informed Career Decisions:",
    description:
      "By Designing a Unified Salary Checker, which reduced operational Costs by 93% and increased job conversions by 40%.",
    image: "/src/assets/images/studies/randstad.png",
    url: "https://www.figma.com/deck/de8khZtOk2Mtf0ojjGtP7G/Salary-Checker-Case-Study?node-id=1-640&t=wPHXJ1FCHZT9WbXv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    imagePosition: "bg-center",
    height: "2xl:h-[25rem]",
    spanFull: false,
  },
  {
    id: 3,
    title:
      "Opera Payments (OPay): Redesigning the Merchant&Developer Payment API Documentation Experience:",
    description:
      "To reduce drop-off rate by 30%, Improve API adoption by 50% & user engagement by 20% and tap into missed revenue opportunities.",
    image: "/src/assets/images/studies/opay.png",
    url: "https://www.figma.com/deck/CAMyadjjOk0t5XD5ATYguD/Merchant-Payment-API-Documentation-Case-Study?node-id=1-640&t=A94ZtvFGYTmSt4SK-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    imagePosition: "bg-center lg:bg-right-center",
    height: "2xl:h-[25rem]",
    spanFull: false,
  },
  {
    id: 4,
    title:
      "Best Rates: Simplifying Cross-Border Payments for Nigerians in UK, Europe & North America:",
    description:
      "Designing a centralized, real-time currency comparison tool.",
    image: "/src/assets/images/studies/quick.png",
    url: "https://www.figma.com/deck/JZ3if8NguWnmbSaPh7WNCx/Simplifying-Cross-Border-Payments-Case-Study?node-id=1-640&t=xUdWHlulqQ1b5v2g-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    imagePosition: "bg-center",
    height: "2xl:h-[25rem]",
    spanFull: false,
  },
];

function CaseStudiesSection() {
  return (
    <div
      id="studies"
      className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto"
    >
      <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
        Design Case Studies
      </p>
      <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:gap-6 lg:gap-y-8">
        {CASE_STUDIES.map((study) => (
          <a
            key={study.id}
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col gap-4 lg:gap-5 2xl:gap-6 w-full p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl group ${
              study.spanFull ? "col-span-full" : ""
            }`}
          >
            <div className="overflow-clip">
              <div
                className={`rounded-xl lg:rounded-2xl w-full h-72 lg:h-96 ${study.height} bg-no-repeat bg-cover group-hover:scale-110 transition-all duration-500 ease-in-out overflow-hidden`}
              >
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4">
              <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                {study.title}
              </p>
              <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                {study.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CaseStudiesSection;

