import React, { FC } from "react";
import classNames from "classnames";

enum VariantType {
  Round = "rounded-full",
  Outline = "outline",
}

type Props = {
  variant?: VariantType;
  children: React.ReactNode;
  addClass?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const BaseButton: FC<Props> = ({
  variant = VariantType.Round,
  onClick,
  children,
  addClass = ""
}): JSX.Element => {
  return (
    <button
      className={classNames(
        "bg-cyan-600 shadow-lg shadow-cyan-600/50 py-2 px-4",
        "hover:bg-transparent hover:text-cyan-600 hover:shadow-slate-300",
        variant,
        addClass
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
