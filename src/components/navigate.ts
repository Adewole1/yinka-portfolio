const goToSection = (id: string) => {
  const section = document.getElementById(id);
  section &&
    window.scrollTo({
      top: section?.offsetTop,
      behavior: "smooth",
    });
};

export default goToSection;
