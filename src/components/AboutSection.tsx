import Slider from "react-slick";
import confluence from "../assets/images/tools/confluence.png";
import miro from "../assets/images/tools/miro.png";
import figma from "../assets/images/tools/figma.png";
import framer from "../assets/images/tools/framer.png";
import jira from "../assets/images/tools/jira.png";
import lovable from "../assets/images/tools/lovable.png";

const ABOUT_IMAGES = [
  {
    id: 1,
    url: "/src/assets/images/about/about1.jpg",
    position: "bg-center",
  },
  {
    id: 2,
    url: "/src/assets/images/about/about2.jpg",
    position: "bg-center",
  },
  {
    id: 3,
    url: "/src/assets/images/about/about3.jpg",
    position: "bg-[left_45%_center]",
  },
  {
    id: 4,
    url: "/src/assets/images/about/about4.jpg",
    position: "bg-center",
  },
];

const SOFT_SKILLS = [
  "Ownership",
  "Data-Driven Decision Making",
  "Communication",
  "Workshop Facilitation",
  "Strategic Problem Solving",
  "Stakeholder Collaboration & Management",
  "Empathy",
  "Critical Thinking",
  "Time Management",
  "Presentation",
];

const HARD_SKILLS = [
  "AI Design",
  "Business Strategy",
  "Conversational Design",
  "Product Strategy",
  "User Research",
  "Usability Testing",
  "Workshop Facilitation",
  "Market Analysis",
  "Prototyping and Wireframing",
  "Design System",
  "A/B Testing and Data Analysis",
  "Strategic Alignment",
  "Figma",
  "Sketch",
  "Framer",
  "HTML",
  "CSS",
];

const EXPERIENCE = [
  {
    id: 1,
    title: "Senior UX Designer",
    period: "2022 - Present",
    company: "Randstad Global",
  },
  {
    id: 2,
    title: "Senior Product Designer",
    period: "2021 - 2022",
    company: "Pastel Africa",
  },
  {
    id: 3,
    title: "Product Designer",
    period: "2020 - 2021",
    company: "Opera Payments (OPay)",
  },
  {
    id: 4,
    title: "Product Designer",
    period: "2018 - 2020",
    company: "Terragon Group",
  },
];

const EDUCATION = [
  {
    id: 1,
    title: "Master UX Design for AI",
    year: "2025",
    institution: "Maven",
  },
  {
    id: 2,
    title: "Strategic Design Career Accelerator",
    year: "2024",
    institution: "Maven",
  },
  {
    id: 3,
    title: "Data-Driven Design",
    year: "2024",
    institution: "Interaction Design Foundation (IDF)",
  },
  {
    id: 4,
    title: "AI for Designers",
    year: "2024",
    institution: "Interaction Design Foundation (IDF)",
  },
  {
    id: 5,
    title: "Product Strategy for Designers",
    year: "2023",
    institution: "Maven",
  },
  {
    id: 6,
    title: "Bsc. Computer Science",
    year: "2013",
    institution: "Ajayi Crowther University",
  },
];

const TOOLS = [
  { id: 1, name: "confluence", src: confluence, className: "w-24 min-[330px]:w-32 h-auto md:w-40 lg:w-56" },
  { id: 2, name: "miro", src: miro, className: "w-5 min-[330px]:w-7 h-auto md:w-10 lg:w-12" },
  { id: 3, name: "figma", src: figma, className: "w-5 min-[330px]:w-7 h-auto md:w-10 lg:w-12" },
  { id: 4, name: "framer", src: framer, className: "w-5 min-[330px]:w-7 h-auto md:w-10 lg:w-12" },
  { id: 5, name: "jira", src: jira, className: "w-12 min-[330px]:w-16 h-auto md:w-24 lg:w-28" },
  { id: 6, name: "lovable", src: lovable, className: "w-20 min-[330px]:w-28 h-auto md:w-36 lg:w-52" },
];

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "I've worked with Olayinka for the past 3 years, creating web applications to serve Randstad's job seekers. She's a driven designer with an interest in strategy, and the bigger picture, so that she can solve the real underlying problems, and not just the symptoms. Any organization would be happy to have her as part of their product team.",
    name: "David Guiza Caicedo",
    title: "Design Manager, Randstad",
    image: "/src/assets/images/testimonials/david.jpg",
  },
  {
    id: 2,
    quote:
      "I had the pleasure of working with Olayinka for almost 3 years, during which she consistently impressed me with her ambition, enthusiasm, and ability to adapt the approach to achieve exceptional results. Her design and technical expertise consistently elevated the quality of her deliverables, while her clear, thoughtful communication made collaboration seamless and effective. What sets her apart is her proactive attitude and commitment to excel. She takes full ownership of her responsibilities, ensuring every task is completed with care and precision. At the same time, she is deeply invested in her own learning and development, consistently seeking opportunities to try new methods, grow and refine her skills. I wholeheartedly recommend Olayinka to anyone seeking an invested, driven, and collaborative professional who delivers impactful results and inspires those around her.",
    name: "Alexandra Timus",
    title: "Strategic Senior UX Designer, Randstad",
    image: "/src/assets/images/testimonials/alex.jpg",
  },
  {
    id: 3,
    quote:
      "I've had a great time working with Olayinka on YourRoomz; she's a very talented designer and has a bright future. Olayinka's ability to understand and digest new problems is uniquely quick. She was able to produce the current YourRoomz UX within 1-2 weeks of hearing our initial problem statement, on top of tending to her primary job. What's even more impressive, however, is that she was able to do so when online furniture shopping - the basis of our product - doesn't exist in her home country. Olayinka has done things the right way; she designed a beautiful UX because she focused on listening to users and their pain points. I'm very excited to continue working with her and can't wait to see what else she comes up with.",
    name: "Patt Quinn",
    title: "Digital Experience Consultant, IBM",
    image: "/src/assets/images/testimonials/patt.jpg",
  },
];

function AboutSection() {
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

  return (
    <div
      id="about"
      className="flex flex-col bg-gradient-to-tr from-[#422f7d] to-black w-full"
    >
      <div className="flex flex-col max-w-[1440px] mx-auto gap-4 lg:gap-12 2xl:gap-16 items-center w-full py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] ">
        <div className="grid grid-cols-1 gap-4 w-full xl:grid-cols-2 md:gap-5 lg:gap-6">
          <div className="grid grid-cols-1 gap-4 w-full min-[330px]:grid-cols-2 md:gap-5 lg:gap-6">
            {ABOUT_IMAGES.map((image) => (
              <div
                key={image.id}
                className={`bg-no-repeat bg-[auto_120%] ${image.position} h-96 sm:h-[32rem] md:h-[43.5rem] w-full rounded-xl lg:rounded-2xl -rotate-y-180 overflow-hidden`}
              >
                <img src={image.url} alt={"About me"} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="rounded-xl lg:rounded-2xl bg-[#1C1C1C] flex p-4 md:p-5 lg:p-6 flex-col gap-4 lg:gap-6 2xl:gap-8 w-full h-fit">
            <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5">
              <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                About Me
              </p>
              <p className="lg:text-lg text-[#D9D9D9] header">
                A strategic UX Designer with +6 years of experience shaping
                user-centered solutions across industries like recruitment,
                fintech, and payments. With a background in Computer Science, I
                have a solid technical background in HTML & CSS.
              </p>
              <p className="lg:text-lg text-[#D9D9D9] header">
                I've designed and scaled impactful projects for start-ups,
                scale-ups and global companies, across Africa, Europe, and North
                America. Beyond design execution, I bring a strategic
                perspective to design, combining design with business strategy.
              </p>
              <p className="lg:text-lg text-[#D9D9D9] header">
                From facilitating workshops using strategic tools, I help teams
                uncover opportunities, co-create innovative ideas, and track
                success with meaningful metrics. I thrive at the intersection of
                creativity, strategy, and collaboration, and I'm always learning
                to stay ahead in this ever-evolving field.
              </p>
              <p className="lg:text-lg text-[#D9D9D9] header">
                Additionally, I promote design culture within the organizations
                I've worked at, having initiated a monthly UX newsletter,
                creating a wireframing library for rapid idea communication,
                concept validation, and stakeholder buy-in and hosting monthly
                design events.
              </p>
              <p className="lg:text-lg text-[#D9D9D9] header">
                Outside of work, I enjoy parenting my energetic 5 year old,
                traveling, biking, and swimming. Life is a balancing act, but
                I'm fully committed both professionally and personally. Let's
                connect and create something amazing!
              </p>
            </div>
            <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
              Soft Skills
            </p>
            <div className="flex flex-wrap gap-3 items-center lg:gap-4">
              {SOFT_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg"
                >
                  <div className="rounded-full size-2 bg-primary"></div>
                  <p className="text-xs lg:text-sm header">{skill}</p>
                </div>
              ))}
            </div>
            <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
              Hard Skills
            </p>
            <div className="flex flex-wrap gap-3 items-center lg:gap-4">
              {HARD_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="flex gap-1 lg:gap-1.5 items-center bg-[#2C2C2C] py-1.5 px-4 rounded-lg"
                >
                  <div className="rounded-full size-2 bg-primary"></div>
                  <p className="text-xs lg:text-sm header">{skill}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 col-span-full gap-4 lg:grid-cols-2 md:gap-5 lg:gap-6">
            <div className="rounded-xl lg:rounded-2xl bg-[#1C1C1C] flex p-4 md:p-5 lg:p-6 flex-col gap-4 lg:gap-6 2xl:gap-8 w-full h-full">
              <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                Experience
              </p>
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-1 lg:gap-1.5">
                  <div className="flex justify-between items-center">
                    <p className="text-lg lg:text-xl">{exp.title}</p>
                    <p className="lg:text-lg">{exp.period}</p>
                  </div>
                  <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                    {exp.company}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-xl lg:rounded-2xl bg-[#1C1C1C] flex p-4 md:p-5 lg:p-6 flex-col gap-4 lg:gap-6 2xl:gap-8 w-full h-full">
              <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
                Education
              </p>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="flex flex-col gap-1 lg:gap-1.5">
                  <div className="flex justify-between items-center">
                    <p className="text-lg lg:text-xl">{edu.title}</p>
                    <p className="lg:text-lg">{edu.year}</p>
                  </div>
                  <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl lg:rounded-2xl bg-[#1C1C1C] flex p-4 md:p-5 lg:p-6 flex-col gap-4 lg:gap-5 w-full h-full col-span-full">
            <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
              Tool Stack
            </p>
            <div className="flex justify-between items-center w-full">
              {TOOLS.map((tool) => (
                <img
                  key={tool.id}
                  src={tool.src}
                  alt={tool.name}
                  className={tool.className}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
          What My Colleagues are Saying About Me
        </p>
        <div className="py-4 md:py-8 lg:py-12 2xl:py-16 w-full md:w-[80%] 2xl:w-[70%] mx-auto">
          <Slider {...settings}>
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="!flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 !w-[75%] mx-auto"
              >
                <p className="text-lg text-center md:text-xl lg:text-2xl md:leading-8 lg:leading-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex flex-col gap-3 items-center lg:gap-4">
                  <div
                    className={`size-12 lg:size-14 overflow-hidden rounded-full`}
                  >
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-medium lg:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs font-light lg:text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

