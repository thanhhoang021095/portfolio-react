import React, { FC } from "react";
import classNames from "classnames";
import { animateScroll } from "react-scroll";
import { BsArrowUpSquareFill } from "react-icons/bs";
type Props = {
  addClass?: string;
};

export const ScrollTopButton: FC<Props> = ({ addClass }): JSX.Element => {
  return (
    <button
      data-testid="scroll-top-button"
      className={classNames(
        "fixed bottom-7 right-9 rounded-full shadow-lg shadow-cyan-600/50",
        addClass
      )}
      onClick={() => animateScroll.scrollToTop()}
    >
      <BsArrowUpSquareFill className="text-cyan-600 text-4xl" />
    </button>
  );
};
