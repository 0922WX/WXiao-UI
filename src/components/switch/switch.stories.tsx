import { useState } from "react";
import Switch from ".";
import { SwitchProps } from ".";

export default {
  title: "Switch",
  component: Switch,
  tags:["autodocs"]
};

const Template = (args: SwitchProps) => {
  const [checked, setChecked] = useState(false);
  return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Basic = {
  args: {
    label: "Is Active ?",
    checked: false,
    disabled: false,
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };

export const Horizontal = {
  args: {
    label: "Horizontal",
    checked: false,
    orientation: "horizontal",
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };

export const vertical = {
  args: {
    label: "Vertical",
    checked: false,
    orientation: "vertical",
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };

export const Disabled = {
  args: {
    label: "Disabled",
    checked: true,
    disabled: true,
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };
