"use client";

import Link from "next/link";
import { ReactNode } from "react";

type TAppButton = {
  label: string;
  className?: string;
  children?: any;
  type?: "button" | "reset" | "submit";
  href?: string;
  variant?: "filled" | "outlined" | "noDesign";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
};

const AppButton = ({
  label,
  className,
  children,
  type = "button",
  href,
  variant = "filled",
  icon,
  iconPosition = "right",
  onClick,
}: TAppButton) => {
  const filledClass =
    "border border-primary bg-primary/90 text-white px-4 py-2 rounded-full hover:bg-primary transition-all ";
  const outlineClass =
    "text-primary px-4 py-2 rounded-full border border-primary hover:bg-primary hover:border-primary hover:text-white transition-all";
  const noDesignClass =
    "text-white/80 px-4 py-2 hover:text-white  transition-all";

  return href ? (
    <Link href={href} className="block min-w-fit">
      <button
        className={`${icon && "flex items-center gap-2"} ${
          variant === "filled"
            ? filledClass
            : variant === "outlined"
            ? outlineClass
            : noDesignClass
        } text-sm md:text-base lg:text-lg xl:text-xl font-semibold min-w-fit ${className} `}
        type={type}
      >
        {iconPosition === "left" && icon} {label}{" "}
        {iconPosition === "right" && icon}
      </button>
    </Link>
  ) : (
    <button
      className={`${icon && "flex items-center gap-2"} ${
        variant === "filled"
          ? filledClass
          : variant === "outlined"
          ? outlineClass
          : noDesignClass
      } text-sm md:text-base xl:text-lg font-semibold min-w-fit ${className}`}
      type={type}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {iconPosition === "left" && icon} {label} {children}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default AppButton;
