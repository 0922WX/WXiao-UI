import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface ButtonProps {
    title?: string;
    variant?: "outlined" | "contained" | "warning";
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    rounded?: "none" | "small" | "medium" | "large" | "full";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    loading?: boolean;
    className?: string;
}
declare function Button(props: ButtonProps): react_jsx_runtime.JSX.Element;

interface InputProps {
    value: string | number;
    onChange?: (value: string | number) => void;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    styles?: React.CSSProperties;
    children?: React.ReactNode;
    type?: "text" | "number" | "password";
    size?: "small" | "medium" | "large";
    rounded?: "none" | "small" | "medium" | "large" | "full";
    error?: string;
    errorMessage?: string[];
}
declare function Input(props: InputProps): react_jsx_runtime.JSX.Element;

interface ThemeProviderProps {
    children: React.ReactNode;
    primaryColor?: string;
}
declare function ThemeProvider(props: ThemeProviderProps): react_jsx_runtime.JSX.Element;

export { Button, Input, ThemeProvider };
