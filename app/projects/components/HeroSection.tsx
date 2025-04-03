import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  tags: string[];
  timeline: string;
  sector: string;
  role: string;
  imageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  tags,
  timeline,
  sector,
  role,
  imageSrc,
}) => {
  return (
    <section className="flex flex-col md:flex-row gap-16 mt-24 h-screen py-16">
      <div className="w-full md:w-2/5">
        <p className="font-normal uppercase text-sm mb-4">{title}</p>
        <h1 className="font-black text-3xl mb-6">{subtitle}</h1>
        <div className="flex gap-3">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="py-2 px-3 dark:bg-white bg-slate-200 text-black">
              {tag}
            </p>
          ))}
        </div>
        <div className="mt-14 space-y-7">
          <div className="flex gap-16">
            <div>
              <h3 className="uppercase text-lg">timeline</h3>
              <p className="font-normal text-sm pt-2">{timeline}</p>
            </div>
            <div>
              <h3 className="uppercase text-lg">sector</h3>
              <p className="font-normal text-sm pt-2">{sector}</p>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-lg">role</h3>
            <p className="font-normal text-sm pt-2">{role}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/5">
        <div className="w-full flex items-center justify-center h-4/5">
          <Image src={imageSrc} alt="banner" width={800} height={400} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
