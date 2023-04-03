import React, { FC } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { handleScrollToElement } from "../../utils";
import { BaseButton } from "../Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const linkedLnUrl = "https://www.linkedin.com/in/nguyen-thanh-hoang-25b64b193/";
const githubUrl = "https://github.com/thanhhoang021095";
type Props = {};

export const Intro: FC<Props> = () => {
  return (
    <SectionWrapper
      sectionName="intro_section"
      className="bg-primary text-white md:text-left text-center"
    >
      <div className="grid md:grid-cols-12 xs:grid-cols-1 gap-x-3 py-16 px-16">
        <div className="md:col-span-6 xl:col-span-8 xs:col-span-12">
          <div className="mb-5 animate-text-focus-in">
            <p className="text-3xl text-gray-700 mb-2">
              Hello! I am <span className="text-cyan-600">Hoang</span>
            </p>
            <p className="text-cyan-600 font-bold text-3xl mb-2">
              Frontend Developer
            </p>
            <p className="text-gray-700 text-2xl">
              I am proficient in JavaScript / Typescript and React
            </p>
          </div>
          <div className="flex flex-row mb-5 md:justify-start justify-center">
            <div className="pr-3">
              <a href={linkedLnUrl} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-gray-700 text-3xl hover:text-cyan-600" />
              </a>
            </div>
            <div>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <FaGithub className="text-gray-700 text-3xl hover:text-cyan-600" />
              </a>
            </div>
          </div>
          <BaseButton
            onClick={() => handleScrollToElement("project_section")}
            addClass="mb-5 md:mb-0"
          >
            My Projects
          </BaseButton>
        </div>
        <div className="flex justify-center items-center md:col-span-6 xl:col-span-4 xs:col-span-12">
          <img
            src="illustrations/hand_coding.svg"
            className="w-96 h-full"
            alt="hand coding"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
