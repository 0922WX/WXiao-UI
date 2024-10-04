import { useState } from "react";
import Select from ".";
import { SelectProps } from ".";

export default {
  title: "Select",
  component: Select,
  tags:["autodocs"]
};

const Template = (args: SelectProps) => {
  const [value, setValue] = useState<string | number>("");
  return (
    <Select {...args} onChange={(value) => setValue(value)} value={value} />
  );
};

export const Basic = {
  args: {
    placeholder: "Select an option",
    option: [
      { label: "Option 1", value: "item 1" },
      { label: "Option 2", value: "item 2" },
      { label: "Option 3", value: "item 3" },
      { label: "Option 4", value: "item 4" },
    ],
    onChange: (value: any) => console.log(value),
  },
  render:Template
} as { args: SelectProps };

export const WithImage = {
  args: {
    placeholder: "Select an option",
    option: [
      {
        label: "Option 1",
        value: "item 1",
        image:
          "https://picture.gptkong.com/20241003/1545a83ebdd8fb46309028d0b4abedd81d.jpg",
      },
      {
        label: "Option 2",
        value: "item 2",
        image:
          "https://picture.gptkong.com/20241003/1543c44d4b8da444e69e1f7a8dd4efa881.jpg",
      },
      {
        label: "Option 3",
        value: "item 3",
        image:
          "https://picture.gptkong.com/20241003/1544c256f1bcb2464db62cd55c74be348c.jpg",
      },
    ],
    onChange: (value: any) => console.log(value),
  },
  render:Template
} as { args: SelectProps };


export const DisabledOption = {
  args: {
    placeholder: "Disabled  option",
    option: [
    ],
    disabled: true
  },
  render:Template
} as { args: SelectProps };