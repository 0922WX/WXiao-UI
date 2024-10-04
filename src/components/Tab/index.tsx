import classNames from "classnames";
import React from "react";

export interface TabProps {
  tabsData: Array<{
    title: string;
    content: React.ReactNode;
  }>;
  activeTab: number;
  onTabChange: (index: number) => void;
  disabledTabIndexes?: number[];
  orientation?: "horizontal" | "vertical";
}

function Tabs(props: TabProps) {
  const {
    tabsData,
    activeTab,
    onTabChange,
    disabledTabIndexes = [],
    orientation = "horizontal",
  } = props;

  const tabcontainer = classNames("flex", {
    "flex-row justify-start": orientation === "vertical",
    "flex-col justify-start": orientation === "horizontal",
  });

  const tabarrange = classNames(
    "flex gap-5 border-0 border-solid border-gray-400",
    {
      "flex-col mr-5 border-r": orientation === "vertical",
      "flex-row  border-b": orientation === "horizontal",
    }
  );

  return (
    <div className={tabcontainer}>
      <div className={tabarrange}>
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={classNames("px-1 py-2 pr-2 cursor-pointer", {
              "border-primary border-solid border-b-4 border-0":
                activeTab === index && orientation === "horizontal",
              "border-primary border-solid border-r-4 border-0":
                activeTab === index && orientation === "vertical",
              "opacity-50 cursor-not-allowed pointer-events-none":
                disabledTabIndexes.includes(index),
            })}
            onClick={() => onTabChange(index)}
          >
            <span
              className={classNames("text-sm text-gray-500", {
                "text-primary": activeTab === index,
              })}
            >
              {tab.title}
            </span>
          </div>
        ))}
      </div>
      <div className="text-sm">{tabsData[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
