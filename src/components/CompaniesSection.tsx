import randstad from "../assets/icons/randstad.png";
import opera from "../assets/icons/opera.png";
import lemfi from "../assets/icons/lemfi.png";
import opay from "../assets/icons/opay.png";
import terragon from "../assets/icons/terragon.png";

const COMPANIES = [
  { id: 1, name: "Randstad", logo: randstad },
  { id: 2, name: "Opera", logo: opera },
  { id: 3, name: "Lemfi", logo: lemfi },
  { id: 4, name: "OPay", logo: opay },
  { id: 5, name: "Terragon", logo: terragon },
];

function CompaniesSection() {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6 2xl:gap-8 py-12 md:py-16 lg:py-20 2xl:py-24 px-6 md:px-16 lg:px-24 2xl:px-[7.5rem] max-w-[1440px] mx-auto w-full">
      <p className="font-light tracking-tighter lg:text-lg header">
        Companies I've Worked With
      </p>
      <div className="flex gap-4 items-center md:gap-6 lg:gap-8 2xl:gap-12">
        {COMPANIES.map((company) => (
          <img
            key={company.id}
            src={company.logo}
            alt={company.name}
            className="w-10 min-[330px]:w-14 h-auto md:w-28 lg:w-36 xl:w-40"
          />
        ))}
      </div>
    </div>
  );
}

export default CompaniesSection;

