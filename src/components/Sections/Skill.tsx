import React, { FC } from "react";
import { SectionWrapper } from "./SectionWrapper";

type Props = {};

const skills = [
  {
    name: "HTML",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "Tailwind",
    link: "https://tailwindcss.com/docs/",
  },
  {
    name: "Javascript",
    link: "https://www.w3schools.com/js/",
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "ReactJS",
    link: "https://react.dev/",
  },
  {
    name: "Redux",
    link: "https://redux.js.org/",
  },
  {
    name: "NodeJS",
    link: "https://nodejs.dev/en/",
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    name: "ExpressJS",
    link: "https://expressjs.com/",
  },
  {
    name: "Github",
    link: "https://github.com/",
  },
  {
    name: "Storybook",
    link: "https://storybook.js.org/",
  },
  {
    name: "AntDesign",
    link: "https://ant.design/",
  },
  {
    name: "MaterialUI",
    link: "https://mui.com/",
  },
  {
    name: "Jest",
    link: "https://jestjs.io/",
  },
  {
    name: "Webpack",
    link: "https://webpack.js.org/",
  },
];

export const Skill: FC<Props> = () => {
  return (
    <SectionWrapper sectionName="skill_section">
      <div className="md:text-left xs:text-center px-16 py-16">
        <div className="mb-5 w-max mx-auto md:ml-0">
          <p className="text-2xl font-bold ">Skills</p>
          <hr className="rounded w-3/4 border-5 bg-cyan-600 my-2 mx-auto h-1.5"></hr>
        </div>
        <p className="text-base">
          I enjoy diving into and learning new things. Here's a list of
          technologies I've worked with
        </p>
        <br></br>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
          {skills.map(({ name, link }) => (
            <a
              href={link}
              target="_blank"
              key={name}
              className="shadow-md hover:shadow-cyan-600/50 rounded-lg hover:text-white hover:bg-cyan-600 hover:scale-105 duration-500 cursor-pointer"
              rel="noreferrer"
            >
              <p className="my-4">{name}</p>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
