import React, { ReactNode } from "react";

interface ProblemSectionProps {
  title: string;
  subtitle: string;
  content: string;
  text: string;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  title,
  subtitle,
  content,
  text,
}) => {
  return (
    <section>
      <div className="flex gap-3 items-center mb-4">
        <div className="h-2 w-2 bg-white rounded-full"></div>
        <h1 className="font-medium text-teal-500 text-xl">{title}</h1>
      </div>
      <article className="space-y-8">
        <h1 className="text-xl font-medium">{subtitle}</h1>
        <h3 className="text-base leading-6 font-thin">{content}</h3>
        <p className="text-base leading-6 font-thin">{text}</p>
      </article>
    </section>
  );
};
