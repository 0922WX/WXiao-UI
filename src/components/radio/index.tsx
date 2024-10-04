import React from "react";
import classNames from "classnames";
export interface RadioProps {
  value?: string | number;
  onChange?: (value: string | number) => void;
  option: Array<{
    label: string;
    value: string | number;
  }>;
  name?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  orientation?: "horizontal" | "vertical";
}

function Radio(props: RadioProps) {
  const {
    value = "",
    onChange = () => {},
    option = [],
    name = "",
    label = "",
    disabled = false,
    className,
    size = "small",
    rounded = "none",
    orientation = "horizontal",
  } = props;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm">{label}</span>

      <div className={classNames("flex gap-5",{
        "flex-col":orientation === "vertical",
        "pointer-events-none cursor-not-allowed":disabled
      })}>
        {option.map((opt) => (
          <div 
          key={opt.value} 
          className="flex items-center gap-2"
          >
            <div
            onClick={() => onChange(opt.value)}
              className={classNames(
                "w-4 h-4 border border-solid rounded-full cursor-pointer",
                "box-border",
                {
                  "border-4 border-primary": opt.value === value && !disabled,
                  "border-gray-300": disabled,
                  "border-4": opt.value === value,
                }
              )}
            ></div>
            <span className={classNames("cursor-default text-sm mt-[2px]",{
                "text-gray-500": disabled
            })}>{opt.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Radio;
