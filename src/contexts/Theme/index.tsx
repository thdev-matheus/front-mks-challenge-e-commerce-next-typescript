import { Theme } from "@/styles/theme";
import { createContext, useState, useContext, ReactNode } from "react";

interface IThemeContext {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(Theme.getTheme());

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    Theme.setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
