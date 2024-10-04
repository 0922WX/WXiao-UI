import React from "react";
import classNames from "classnames";

export interface FlexContainerProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  justify?: "start" | "end" | "center";
  align?: "top" | "end" | "bottom";
  gap?: number;
  height?: number;
  showborder?: boolean;
}

function FlexContainer(props: FlexContainerProps) {
  const {
    children,
    direction = "column",
    justify = "start",
    align = "top",
    gap,
    height,
    showborder = false,
  } = props;

  return (
    <div style={{ height,gap }} className={classNames("flex",{
        "flex-col" : direction === "column",
        "justify-start" : justify === "start",
        "justify-end" : justify === "end",
        "justify-center" : justify === "center",
        "items-start": align === "top",
        "items-end": align === "bottom",
        "border border-gray-500 border-solid": showborder
    })}>
      {children}
    </div>
  );
}

export default FlexContainer;
