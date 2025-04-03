import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "Javascript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Typescript" },
  { skill: "TailWind CSS" },
  { skill: "Material UI" },
  { skill: "Version control - Github" },
  { skill: "UI/UX Design- Figma" },
  { skill: "Animation - Lottie" },
  { skill: "Motion Design" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className=" pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to Know Me!
            </h1>
            <p>
              {""}
              Hi, my name is Jefwa and Im a
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" Goal-oriented"}</span>, and
              <span className="font-bold">{" self-driven "}</span>UI/UX Designer
              & Front-end Developer- based in Machakos, Kenya.
            </p>
            <br />
            <p>
              I am currently pursuing a Bachelor of Science in Computer Science 
              at Machakos University while actively gaining experience in the field
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From Designing, Prototyping, Developement, to deployment, I am
              always seeking new experiences and love to keep myself engaged and
              learning new things.
            </p>
            <br />
            <p>
              I believe that you should
              <span className="font-bold text-teal-500 pl-1">
                never stop growing/learning
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap  flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 hover:bg-teal-700 hover:text-white rounded font-semibold">
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:block md:relative md:bottom-4 md:left-12 md:z-0"
              src="/image.png"
              alt="banner"
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
