import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import { Theme } from "./theme";
import { ReactNode } from "react";
import { useTheme } from "@/contexts";

export const Styles = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === "light" ? Theme.light : Theme.dark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
