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
    className?: string;
}
declare function Input(props: InputProps): react_jsx_runtime.JSX.Element;

interface ThemeProviderProps {
    children: React.ReactNode;
    primaryColor?: string;
}
declare function ThemeProvider(props: ThemeProviderProps): react_jsx_runtime.JSX.Element;

interface SelectProps {
    value?: string | number;
    onChange?: (value: string | number) => void;
    option: Array<{
        label: string;
        value: string | number;
        image?: string;
    }>;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    size?: "small" | "medium" | "large";
    rounded?: "none" | "small" | "medium" | "large" | "full";
    childrenrounded?: "none" | "small" | "medium" | "large";
}
declare function Select(props: SelectProps): react_jsx_runtime.JSX.Element;

interface TabProps {
    tabsData: Array<{
        title: string;
        content: React.ReactNode;
    }>;
    activeTab: number;
    onTabChange: (index: number) => void;
    disabledTabIndexes?: number[];
    orientation?: "horizontal" | "vertical";
}
declare function Tabs(props: TabProps): react_jsx_runtime.JSX.Element;

interface RadioProps {
    value?: string | number;
    onChange?: (value: string | number) => void;
    option: Array<{
        label: string;
        value: string | number;
    }>;
    name?: string;
    label?: string;
    disabled?: boolean;
    className?: string;
    size?: "small" | "medium" | "large";
    rounded?: "none" | "small" | "medium" | "large" | "full";
    orientation?: "horizontal" | "vertical";
}
declare function Radio(props: RadioProps): react_jsx_runtime.JSX.Element;

interface SwitchProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    rounded?: "none" | "full";
    disabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
}
declare function Switch(props: SwitchProps): react_jsx_runtime.JSX.Element;

interface ModalProps {
    title?: string;
    footer?: boolean;
    children?: React.ReactNode;
    showmodal?: boolean;
    onCancel?: () => void;
    onOk?: () => void;
    size?: "small" | "medium" | "large";
    className?: string;
}
declare function Modal(props: ModalProps): react_jsx_runtime.JSX.Element | null;

export { Button, Input, Modal, Radio, Select, Switch, Tabs, ThemeProvider };
