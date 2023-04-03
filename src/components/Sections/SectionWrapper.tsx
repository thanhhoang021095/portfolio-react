import React, { FC } from "react";
import { Element as ScrollElement } from "react-scroll";

type Props = {
  sectionName: string;
  className?: string;
  children: React.ReactNode;
};

export const SectionWrapper: FC<Props> = ({
  className = "",
  sectionName,
  children,
}) => {
  return (
    <ScrollElement name={sectionName} className={className}>
      {children}
    </ScrollElement>
  );
};
