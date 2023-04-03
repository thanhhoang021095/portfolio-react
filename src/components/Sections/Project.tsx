import React, { FC } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { Card } from "../Card";

type Props = {};

const cardProjects = [
  {
    prjName: "omnishop",
    imgSrc: "illustrations/project_1.png",
    prjLink: "https://smarttv.shoppingtv.vn/",
  },
  {
    prjName: "parcel_public",
    imgSrc: "illustrations/project_2.png",
    prjLink: "https://www.parcelperform.com/",
  },
  {
    prjName: "airvert",
    imgSrc: "illustrations/project_3.png",
    prjLink: "https://airvert.com/",
  },
];

export const Project: FC<Props> = () => {
  return (
    <SectionWrapper sectionName="project_section">
      <div className="bg-stone-100  md:text-left xs:text-center px-16 py-16">
        <div className="mb-5 w-max mx-auto md:ml-0">
          <p className="text-2xl font-bold ">Projects</p>
          <hr className="rounded w-3/4 border-5 bg-cyan-600 my-2 mx-auto h-1.5"></hr>
        </div>
        <p className="text-base">
          These are some of my best projects. I have built these with React,
          MERN and vanilla CSS. Check them out.
        </p>
        <br></br>

        <div className="grid md:grid-cols-12 xs:grid-cols-1 gap-7">
          {cardProjects.map(({ prjName, imgSrc, prjLink }) => (
            <div key={prjName} className="md:col-span-6 xs:col-span-12 xl:col-span-4">
              <Card cardLink={prjLink}>
                <img
                  src={imgSrc}
                  className="w-full h-full"
                  alt="about illustration"
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
