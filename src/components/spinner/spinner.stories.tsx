import Spinner from ".";
import { SpinnerProps } from ".";

export default {
  title: "Spinner",
  component: Spinner,
  tags:["autodocs"]
};

export const Small = {
  args: {
    size: "small",
    color: "green",
  },
} as { args: SpinnerProps };


export const Medium = {
  args: {
    size: "medium",
    color: "blue",
  },
} as { args: SpinnerProps };

export const Large = {
  args: {
    size: "large",
    color: "red",
  },
} as { args: SpinnerProps };