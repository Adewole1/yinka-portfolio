const PROJECTS = [
  {
    id: 1,
    title: "Mollie's Landing page",
    description:
      "A clone of Mollie's landing page created with HTML, CSS (Grid, Flexbox and positioning).",
    image: "/src/assets/images/projects/mollie.png",
    liveUrl: "https://olayinkafad.github.io/mollie_landing_page/",
    githubUrl: "https://github.com/olayinkafad/mollie_landing_page",
  },
  {
    id: 2,
    title: "Technical Documentation Page",
    description:
      "A Javascript technical documentation page created with HTML and styled with CSS (Flexbox and positioning).",
    image: "/src/assets/images/projects/documentation.png",
    liveUrl: "https://olayinkafad.github.io/techincal_documentation_page/",
    githubUrl: "https://github.com/olayinkafad/techincal_documentation_page",
  },
  {
    id: 3,
    title: "Tribute Page",
    description:
      "A static tribute page dedicated to John Charles. The page is built using HTML and CSS and showcases key milestones of his life.",
    image: "/src/assets/images/projects/tribute.png",
    liveUrl: "https://olayinkafad.github.io/tribute_page/",
    githubUrl: "https://github.com/olayinkafad/tribute_page",
  },
  {
    id: 4,
    title: "Survey Form",
    description:
      "A Javascript technical documentation page created with HTML and styled with CSS (Flexbox and positioning).",
    image: "/src/assets/images/projects/survey.png",
    liveUrl: "https://olayinkafad.github.io/survey_form/",
    githubUrl: "https://github.com/olayinkafad/survey_form",
  },
];

function ProjectsSection() {
  return (
    <div
      id="projects"
      className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto"
    >
      <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
        Projects I've built with HTML and CSS
      </p>
      <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:gap-6 lg:gap-y-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="flex flex-col p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl lg:rounded-2xl w-full h-72 lg:h-96 2xl:h-[25rem] overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out`}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </a>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9 break-words">
                  {project.title}
                </p>
                <a
                  href={project.githubUrl}
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
                  <p className="text-xs lg:text-sm header text-nowrap">
                    Github Link
                  </p>
                </a>
              </div>
              <p className="lg:text-lg text-[#D9D9D9] header lg:leading-7">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
