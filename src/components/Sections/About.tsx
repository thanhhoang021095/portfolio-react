import React, { FC } from "react";
import { SectionWrapper } from "./SectionWrapper";

type Props = {};

export const About: FC<Props> = () => {
  return (
    <SectionWrapper sectionName="about_section">
      <div className="bg-slate-100 md:text-left xs:text-center py-16 px-16">
        <div className="grid md:grid-cols-12 xs:grid-cols-1 gap-x-3">
          <div className="md:col-span-6 xl:col-span-8 xs:col-span-12">
            <div className="mb-5 w-max mx-auto md:ml-0">
              <p className="text-2xl font-bold">About Me</p>
              <hr className="rounded w-3/4 border-5 bg-cyan-600 my-2 mx-auto h-1.5"></hr>
            </div>
            <p className="text-base">
              Highly skilled and motivated Front-End Developer with 3 years of
              experience building and maintaining user-friendly websites and
              applications
            </p>
            <br></br>
            <p className="text-base">
              With a deep understanding of HTML, CSS, and JavaScript, as well as
              experience with popular front-end frameworks such as React,
              Svelte, Nextjs. I have a passion for creating responsive and
              accessible designs that provide the best user experience possible.
            </p>
            <br></br>
            <p className="text-base">
              My ability to collaborate effectively with cross-functional teams
              and my strong problem-solving skills make me an ideal candidate
              for any development project.
            </p>
          </div>

          <div className="md:col-span-6 xl:col-span-4 xs:col-span-12">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="illustrations/about.svg"
                className="w-96 h-full"
                alt="about illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
