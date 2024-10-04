import React, { useEffect } from "react";

export interface ThemeProviderProps {
  children: React.ReactNode;
  primaryColor?: string;
}

function ThemeProvider(props: ThemeProviderProps) {

  const { 
    children, 
    primaryColor = document.documentElement.style.getPropertyValue("--primary-color") || "#000"
  } = props;

  useEffect(() => {
   //切换主题色
    document.documentElement.style.
    setProperty("--primary-color", primaryColor);

  }, [primaryColor]);

  return <>{children}</>;
}

export default ThemeProvider;
