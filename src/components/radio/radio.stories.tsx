import { useState } from "react";
import Radio from ".";
import { RadioProps } from ".";

export default {
  title: "Radio",
  component: Radio,
};

const Template = (args: RadioProps) => {
  const [value, setValue] = useState<string | number>("");
  return <Radio {...args} value={value} onChange={(newvalue) => setValue(newvalue)} />;
};
const option = [
        { label: "Option1", value: "item 1" },
        { label: "Option2", value: "item 2" },
        { label: "Option3", value: "item 3" },
        { label: "Option4", value: "item 4" },
        { label: "Option5", value: "item 5" },
      ]

export const Basic = {
  args: {
    label: "Select an option",
    option: option 
  },
  render: Template,
} as { args: RadioProps };


export const VerticalOption = {
    args: {
      label: "Select an option",
      option: option ,
      orientation: "vertical",
    },
    render: Template,
  } as { args: RadioProps };
  