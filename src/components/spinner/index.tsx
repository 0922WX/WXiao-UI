import classNames from "classnames";
export interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

function Spinner(props: SpinnerProps) {
  const { size, color } = props;

  const spinner = classNames(
    "border border-solid border-t-transparent rounded-full animate-spin",
    {
      "h-12 w-12 border-4": size === "small",
      "h-16 w-16 border-8": size === "medium",
      "h-20 w-20 border-8": size === "large",
    }
  );

  return (
    <div className="w-max ">
      <div
        className={spinner}
        style={{borderTopColor: "transparent" ,
                borderRightColor: color,
                borderBottomColor: color,
                borderLeftColor: color,
        }}
      ></div>
    </div>
  );
}

export default Spinner;
