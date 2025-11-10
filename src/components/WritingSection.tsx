import React from "react";

const ARTICLES = [
  {
    id: 1,
    title: "Redesigning the OPay Developer Documentation site",
    url: "https://olayinkaodetola5.medium.com/redesigning-the-opay-developer-documentation-site-f509b902c20a",
  },
  {
    id: 2,
    title: "UI/UX Design and Why It Is Important!",
    url: "https://olayinkaodetola5.medium.com/ui-ux-design-and-why-it-is-important-2b54920501a1",
  },
  {
    id: 3,
    title: "How I redesigned Adrenaline — Terragon Group's flagship product",
    url: "https://olayinkaodetola5.medium.com/how-i-redesigned-adrenaline-terragon-groups-flagship-product-37aa148c6d35",
  },
];

function WritingSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
      <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:leading-[60px] lg:leading-[72px] 2xl:leading-[90px] tracking-tighter header">
        Writing
      </p>
      {ARTICLES.map((article, index) => (
        <React.Fragment key={article.id}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg lg:text-xl text-[#D9D9D9] w-fit underline hover:text-primary transition-all duration-300 ease-in-out"
          >
            {article.title}
          </a>
          {index < ARTICLES.length && (
            <div className="h-[0.64px] w-full bg-[#484848]"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default WritingSection;
