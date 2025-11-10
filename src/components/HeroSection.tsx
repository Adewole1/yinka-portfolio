const SKILLS = [
  "AI Design",
  "Conversation Design",
  "Business & product strategy",
  "UI design",
  "User research",
  "User testing",
  "Design system",
  "Prototyping",
  "Collaboration",
];

export default function HeroSection() {
  return (
    <div
      id="welcome"
      className="flex flex-col md:grid md:grid-cols-2 max-w-[1440px] w-full mx-auto gap-6 md:gap-8 lg:gap-10 2xl:gap-14 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-32"
    >
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-10 2xl:gap-12">
        <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-6">
          <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
            Olayinka is creating user-centered solutions that drive real
            business impact.
          </p>
          <p className="lg:text-lg text-[#D9D9D9] header">
            I&apos;m a Strategic Product Designer shaping the future of
            user experience through UX, UI, and AI-driven design.
          </p>
          <p className="lg:text-lg text-[#D9D9D9] header">
            I have 6+ years of experience, combining design and strategy
            to create data-informed experiences that align user needs with
            business goals across startups, scale-ups, and global
            companies.
          </p>
          <p className="lg:text-lg text-[#D9D9D9] header">
            I thrive in cross-functional collaboration, working closely
            with stakeholders to translate complex requirements into
            intuitive, scalable solutions.
          </p>
          <p className="lg:text-lg text-[#D9D9D9] header">
            I have a technical edge in HTML, CSS & JavaScript.
          </p>
        </div>
        <p className="font-medium italic lg:text-lg text-[#D9D9D9] header">
          Netherlands work permit available.
        </p>
        <div className="flex items-center flex-wrap gap-x-2 gap-y-3 lg:gap-y-4">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="flex items-center px-3 py-2 lg:px-4 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-fit"
            >
              <p className="text-sm lg:text-base header">{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl lg:rounded-2xl w-full h-80 min-[500px]:h-[28rem] md:h-[30rem] lg:h-[36rem] xl:h-full bg-no-repeat bg-cover bg-top md:bg-[auto_140%] lg:bg-[auto_120%] xl:bg-[auto_150%] md:bg-[center_top_-10px] lg:bg-[center_top_-20px] bg-[url('/src/assets/images/yinka.jpg')]"></div>
    </div>
  );
}

