import classNames from "classnames";
import React from "react";
import ThemeProvider from "../theme-provider";

export interface InputProps {
  value: string | number;
  onChange?: (value: string | number) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
  type?: "text" | "number" | "password";
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  error?: string;
  errorMessage?: string[];
  className?: string;
}

function Input(props: InputProps) {
  const {
    value,
    onChange,
    name,
    placeholder,
    disabled,
    label,
    styles,
    children,
    type = "text",
    size = "medium",
    rounded = "none",
    error = "",
    className
  } = props;

  const classnames = classNames("px-5 border-solid",className, {
    "h-8": size === "small",
    "h-10": size === "medium",
    "h-12": size === "large",
    "rounded-none": rounded === "none",
    "rounded-sm": rounded === "small",
    "rounded-md": rounded === "medium",
    "rounded-lg": rounded === "large",
    "rounded-full": rounded === "full",
    "border-primary focus:outline-none": !disabled,
    "border-2 border-red-500 border-solid": error,
    "cursor-not-allowed pointer-events-none bg-gray-100 text-gray-500":
      disabled,
  });

  return (
    <ThemeProvider>
      <div className="flex flex-col gap-1">
        <label htmlFor="input" className="text-sm">
          {label}
        </label>
        <input
          style={styles}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.value)}
          className={classnames}
        />
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </ThemeProvider>
  );
}

export default Input;
