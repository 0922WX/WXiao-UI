import ThemeProvider from ".";
import { ThemeProviderProps } from ".";
import Button from "../button";
import Modal from "../modal";

export default {
    title: "ThemeProvider",
    component: ThemeProvider,
    tags:["autodocs"]
}


const children = (
    <>
        <Button>Button</Button>
    </>
)

export const BasicTheme = {
    args: {
        primaryColor: "#000",
        children: children
    }
} as { args:ThemeProviderProps};