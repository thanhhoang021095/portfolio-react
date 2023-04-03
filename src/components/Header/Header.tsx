import React, { FC, useCallback } from "react";
import classNames from "classnames";
import { handleScrollToElement } from "../../utils";

const sectionList = [
  {
    name: "About",
    scrollName: "about_section",
  },
  {
    name: "Skills",
    scrollName: "skill_section",
  },
  {
    name: "Projects",
    scrollName: "project_section",
  },
];

export const Header: FC = () => {
  const onScrollToElement = useCallback(handleScrollToElement, []);

  return (
    <div className="fixed bg-white top-0 w-full shadow-md z-10 opacity-95">
      <div className="relative px-14 py-6 flex flex-col md:flex-row justify-between items-center">
        <div
          className="cursor-pointer"
          onClick={() => onScrollToElement("intro_section")}
        >
          <img src="logo/logo.svg" className="w-40 h-full" alt="logo" />
        </div>
        <div className="grow md:w-3/4">
          <div className="flex flex-col md:flex-row justify-end">
            {sectionList.map(({ name, scrollName }, idx) => {
              return (
                <button
                  key={name}
                  className={classNames("mt-4 md:my-0 hover:text-cyan-600", {
                    "md:ml-8": idx !== 0,
                  })}
                  onClick={() => onScrollToElement(scrollName)}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
