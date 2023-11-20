import { ReactNode } from "react";
import { ThemeProvider, useTheme } from "./Theme";

export { useTheme };

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
