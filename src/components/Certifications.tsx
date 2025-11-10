export default function Certifications() {
  const CERTIFICATIONS = [
    {
      id: 1,
      title: "Master UX Design for AI",
      link: "https://maven.com/wrap-up/1cfc831f",
      description:
        "Completed an advanced program focused on the strategic integration of AI into product design. Learned to identify high-impact AI opportunities, design human-centered and trustworthy AI experiences, and align AI-driven solutions with business goals. Developed a repeatable framework for defining AI use cases, driving cross-functional alignment, and shaping intuitive, explainable, and value-driven AI products that enhance user trust and long-term engagement.",
    },
    {
      id: 2,
      title: "Strategic Design Career Accelerator",
      link: "https://maven.com/certificate/SmXYCgoI",
      description:
        "Connecting design with business strategy by conducting market research, analyzing trends, communicate design ROI, align strategic goals, and influence decision-making as a designer. It strengthened my storytelling abilities, provided frameworks to turn research insights into opportunities, and taught me to lead cross-functional collaboration.",
    },
    {
      id: 3,
      title: "Product Strategy for Designers",
      link: "https://maven.com/certificate/btmeuTmo",
      description:
        'Diving deep into product requirements and context, aligning design decisions with business goals and driving product success. The course focused on stakeholder collaboration, effective communication, and advocating for ideas to influence product direction. It was an enriching experience that sharpened my ability to step up into a "product thinking designer" by connecting design with overall strategy and impact.',
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
      <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header text-left w-full">
        My Certifications
      </p>
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 min-[1440px]:gap-8">
        {CERTIFICATIONS.map((certification) => (
          <div key={certification.id} className="flex flex-col gap-0.5">
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-2xl lg:text-3xl hover:text-primary transition-all duration-300 w-fit"
            >
              {certification.title}
            </a>
            <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
              {certification.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
