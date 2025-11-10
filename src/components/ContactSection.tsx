function ContactSection() {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col gap-3 items-center lg:gap-4">
        <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
          Let's Work Together!
        </p>
        <p className="text-lg font-normal text-center lg:text-xl lg:leading-10">
          You can send me an email:{" "}
          <a
            href="mailto:olayinkaodetola5@gmail.com"
            className="font-bold transition-all duration-300 ease-in-out hover:text-primary"
          >
            olayinkaodetola5@gmail.com
          </a>{" "}
          or connect with me on <br className="hidden md:block" />
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
        <div className="flex items-center gap-2 md:gap-3 2xl:gap-4">
          <a
            href="mailto:olayinkaodetola5@gmail.com"
            className="w-fit bg-primary rounded-lg py-2.5 md:py-3 px-3.5 md:px-4 fonr-medium text-white"
          >
            Work with me
          </a>
          <a
            href="https://drive.google.com/file/d/1KMSrjd7_TqhOI3cOvylozQbEAJo4o0vB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit bg-white rounded-lg py-2.5 md:py-3 px-3.5 md:px-4 fonr-medium text-gray-700"
          >
            View my resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

