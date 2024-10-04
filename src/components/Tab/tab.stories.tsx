import { useState } from "react";
import Tabs from ".";
import { TabProps } from ".";

export default {
  title: "Tabs",
  component: Tabs,
  tags:["autodocs"]
};

const tabsData = [
  {
    title: "Tab1",
    content: "content of tab1",
  },
  {
    title: "Tab2",
    content: "content of tab2",
  },
  {
    title: "Tab3",
    content: "content of tab3",
  },
];

const Template = (args: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return <Tabs {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
};

export const Basic = {
  args: {
    tabsData,
  },
  render: Template,
} as { args: TabProps; render: () => JSX.Element };



export const WithDisabledTab = {
  args: {
    tabsData,
    disabledTabIndexes: [1],
  },
  render:Template
} as { args: TabProps; render: () => JSX.Element };



export const Vertical = {
  args:{
    tabsData,
    orientation:"vertical"
  },
  render:Template
} as { args: TabProps; render: () => JSX.Element };