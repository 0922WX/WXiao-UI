import Input from ".";
import { InputProps } from ".";


export default {
  title: "Input",
  component: Input,
};

export const Basic = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
} as { args: InputProps };

export const WithError = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    error: "This field is required",
  },
} as { args: InputProps };

export const Disabled = {
    args: {
        label: "Username",
        placeholder: "Enter your username",
        disabled: true,
        value: "wx"
    },
} as { args: InputProps };

export const Small = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    size: "small",
  },
} as { args: InputProps };

export const Medium = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    size: "medium",
  },
} as { args: InputProps };

export const Large = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    size: "large",
  },
} as { args: InputProps };

export const Rounded = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    rounded: "large"
  },
} as { args: InputProps };