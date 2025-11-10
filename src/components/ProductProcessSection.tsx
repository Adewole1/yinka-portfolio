const PRODUCT_ITEMS = [
  "AI & Conversational design",
  "Business & Product Strategy",
  "Product Design",
  "UI/UX Design",
  "Continous Discovery",
  "Design System",
];

const PROCESS_ITEMS = [
  "Design Critique",
  "Design Sprints",
  "Workshops",
  "Team Way of Working",
  "Developer Refinements",
  "Documentation & Dev Handover",
];

function ProductProcessSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
      <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:gap-6">
        <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8">
          <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
            Product
          </p>
          {PRODUCT_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full"
            >
              <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8">
          <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
            Process
          </p>
          {PROCESS_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center p-4 md:p-5 lg:p-6 bg-[#1C1C1C] rounded-xl lg:rounded-2xl w-full"
            >
              <p className="text-xl lg:text-2xl 2xl:text-3xl header lg:leading-8 2xl:leading-9">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductProcessSection;

