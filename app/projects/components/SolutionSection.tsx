import React from "react";
import Image from "next/image";

interface SolutionSectionProps {
  images: string[];
  title: string;
  description: string;
}

const ImageSection: React.FC<SolutionSectionProps> = ({
  images,
  title,
  description,
}) => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-10 items-center">
      <div className="w-full md:w-3/5 flex gap-8 overflow-x-auto overflow-y-auto h-96">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="design"
            width={800}
            height={400}
          />
        ))}
      </div>
      <div className="w-full md:w-2/5">
        <div className="flex gap-3 items-center mb-4">
          <div className="h-2 w-2 bg-white rounded-full"></div>
          <h1 className="font-medium text-teal-500 text-xl">Solution</h1>
        </div>
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-sm font-normal mt-4">{description}</p>
      </div>
    </section>
  );
};

export default ImageSection;
