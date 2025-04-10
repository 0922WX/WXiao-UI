import React from "react";
import classNames from "classnames";
import ThemeProvider from "../theme-provider";

export interface ButtonProps {
  title?: string;
  variant?: "outlined" | "contained" | "warning";
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  className?: string;
  advanced?: boolean;

}

function Button(props: ButtonProps) {
  const {
    title,
    onClick,
    children,
    variant = "contained",
    disabled,
    size = "medium",
    rounded = "small",
    icon,
    iconPosition = "left",
    loading = false,
    className,
    advanced = false,

  } = props;

  
  return (
    <ThemeProvider>
      <button
        onClick={onClick}
        className={classNames(
          "px-2 cursor-pointer shadow-none text-sm relative",
          className,
          {
            "border-2 border-solid border-primary bg-white text-primary hover:bg-gray-400 ":
              variant === "outlined" ,
            " bg-primary text-white border-none":
              variant === "contained" && !disabled,
            " bg-red-600 text-white border-none  hover:bg-red-400":
              variant === "warning",
            "pointer-events-none  cursor-not-allowed pointer-event-none bg-gray-300 border-none text-gray-500":
              disabled,
            "h-8": size === "small",
            "h-10": size === "medium",
            "h-12": size === "large",
            "rounded-none": rounded === "none",
            "rounded-sm": rounded === "small",
            "rounded-md": rounded === "medium",
            "rounded-lg": rounded === "large",
            "rounded-full": rounded === "full",
            "flex gap-3 items-center": icon || loading,
            "flex-row-reverse": icon && iconPosition === "right",
          }
        )}
      >
        {icon && icon}
        {title || children}
        {loading && (
          <div
            className={classNames(
              "w-2 h-2 border-2 border-solid border-primary border-t-transparent animate-spin rounded-full",
              {
                "border-white": variant === "contained",
                "border-gray-300": variant === "warning",
                "border-primary": variant === "outlined",
              }
            )}
          ></div>
        )}
      </button>
    </ThemeProvider>
  );
}

export default Button;
