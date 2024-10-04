import classNames from "classnames";
import React, { useState } from "react";
import ThemeProvider from "../theme-provider";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface SelectProps {
  value?: string | number;
  onChange?: (value: string | number) => void;
  option: Array<{
    label: string;
    value: string | number;
    image?: string;
  }>;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  childrenrounded?: "none" | "small" | "medium" | "large";
}

function Select(props: SelectProps) {
  const [showOption, setShowOption] = useState(false);

  const {
    value = "",
    onChange = () => {},
    option = [],
    name = "",
    placeholder = "",
    disabled = false,
    className,
    size = "small",
    rounded = "none",
    childrenrounded = "none",
  } = props;

  let selectedOption = null;
  if (value) {
    selectedOption = option.find((opt) => opt.value === value);
  }

  let labelToShow = selectedOption ? (
    <div className="flex items-center gap-2">
      {selectedOption.image && (
        <img
          src={selectedOption.image}
          alt={selectedOption.label}
          className="w-6 h-6 mr-2"
        />
      )}
      {selectedOption.label}
    </div>
  ) : (
    placeholder
  );

  const maincontainer = classNames(
    "border border-solid  p-2 border-primary cursor-pointer px-3 flex justify-between",
    "items-center gap-2",
    className,
    {
      "h-6": size === "small",
      "h-8": size === "medium",
      "h-10": size === "large",
      "rounded-none": rounded === "none",
      "rounded-sm": rounded === "small",
      "rounded-md": rounded === "medium",
      "rounded-lg": rounded === "large",
      "rounded-full": rounded === "full",
      "bg-gray-200 cursor-not-allowed pointer-events-none": disabled,
    }
  );

  const childrencontainer = classNames(
    "flex flex-col gap-3 border border-solid ",
    "p-2 cursor-pointer mt-1",
    {
      "rounded-none": childrenrounded === "none",
      "rounded-sm": childrenrounded === "small",
      "rounded-md": childrenrounded === "medium",
      "rounded-lg": childrenrounded === "large",
    }
  );
  return (
    <ThemeProvider>
      <div className="w-max">
          {/*主选框 */}
        <div
          className={maincontainer}
          onClick={() => setShowOption(!showOption)}
        >
          {labelToShow}
          <span>
            {showOption ? (
              <ChevronUp size={15} className="text-pretty" />
            ) : (
              <ChevronDown size={15} className="text-pretty" />
            )}
          </span>
        </div>

        {/* 子列表  
          showOption为true时，显示子列表
        */}
        {showOption && 
        (
          <div
            className={childrencontainer}
          >
            {option.map((opt) => (
              <div
                key={opt.value}
                className={
                  classNames(
                  "hover:bg-gray-300 transition-all duration-500 ease-in-out",
                  " p-1 rounded-sm flex items-center gap-2",
                  {
                    // 选中项高亮的实现
                    "bg-gray-300": opt.value === value,
                  }
                )}
                onClick={() => {
                  onChange(opt.value);
                  setShowOption(false);
                }}
              >
                {opt.image && (
                  <img
                    src={opt.image}
                    alt={opt.label}
                    className="w-6 h-6 mr-2"
                  />
                )}
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default Select;
