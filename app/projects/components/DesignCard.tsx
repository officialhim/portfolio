import React, { ReactNode } from "react";

interface DesignCardProps {
  title: string;
  children: ReactNode;
}

export const DesignCard: React.FC<DesignCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md w-fit h-80">
      <article className="p-6 text-lg font-normal text-black">
        <h1 className="mb-2">{title}</h1>
        <p className="text-gray-800 text-base font-thin">{children}</p>
      </article>
    </div>
  );
};
