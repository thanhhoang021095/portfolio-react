import React, { useState, FC, useRef, useEffect, useCallback } from "react";
import { BaseButton } from "../Button";

type Props = {
  children: React.ReactNode;
  cardLink?: string;
};

export const Card: FC<Props> = ({ cardLink, children }): JSX.Element => {
  const [isHoverCard, setIsHoverCard] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = cardRef.current;

    if (node) {
      if (!isHoverCard) {
        node.classList.remove("animate-slide-up");
        node.classList.add("animate-slide-down");
      } else {
        node.classList.remove("animate-slide-down");
        node.classList.add("animate-slide-up");
      }
    }
  }, [cardRef, isHoverCard]);

  const handleOpenLink = useCallback(
    () => window.open(cardLink, "_blank"),
    [cardLink]
  );

  return (
    <div
      onMouseEnter={() => setIsHoverCard(true)}
      onMouseLeave={() => setIsHoverCard(false)}
      className="relative rounded-xl w-full h-52 sm:h-72 overflow-hidden bg-no-repeat bg-no-repeat bg-cover bg-center"
    >
      {children}

      <div
        ref={cardRef}
        className="flex items-center justify-center absolute bottom-0 top-0 left-0 right-0 bg-slate-900 opacity-95 m-3 rounded-xl z-10"
      >
        <BaseButton
          onClick={handleOpenLink}
          addClass="mb-5 md:mb-0 text-white hover:bg-white"
        >
          Live Product
        </BaseButton>
      </div>
    </div>
  );
};
