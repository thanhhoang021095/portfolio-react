import React, { FC } from "react";
import { About, Intro, Project, Skill } from "../Sections";

export const MainContent: FC = () => {
  return (
    <div className="relative z-0">
      <Intro />
      <About />
      <Skill />
      <Project />
    </div>
  );
};
