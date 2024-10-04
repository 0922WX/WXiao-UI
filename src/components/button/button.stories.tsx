import Button from ".";
import { ButtonProps } from ".";
import {User} from "lucide-react"

export default {
  title: "Button",
  component: Button,
  tags:["autodocs"]
};

export const Contained = {
  args: {
    title: "Clink Me",
    variant: "contained",
  },
} as {args: ButtonProps};


export const Outlined = {
  args: {
    title: "Click Me",
    variant: "outlined",
  },
} as {args: ButtonProps};;

export const Warning ={
  args:{
    title: "Warning",
    variant: "warning",
  }
} as {args: ButtonProps};


export const Disabled = {
  args: {
    title: "Disabled",
    disabled: true,
  },
} as {args: ButtonProps};


export const Small = {
  args: {
    title: "Click Me",
    size: "small",
  },
} as {args: ButtonProps};

export const Medium = {
  args: {
    title: "Click Me",
    size: "medium",
  },
} as {args: ButtonProps};


export const Large = {
  args: {
    title: "Click Me",
    size: "large",
  },
} as {args: ButtonProps};

export const Rounded = {
  args: {
    title: "Click Me",
    rounded: "large",
  },
} as {args: ButtonProps};

export const WithIcon = {
  args: {
    title: "Click Me",
    icon: <User 
     size={15} 
    />
  },
}


export const WithLoading = {
  args: {
    title: "Loading",
    loading: true,
  }
} as {args: ButtonProps};