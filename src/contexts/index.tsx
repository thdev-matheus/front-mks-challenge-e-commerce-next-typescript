import { ReactNode } from "react";

import { ThemeProvider, useTheme } from "./Theme";
import { ProductsProvider, useProducts } from "./Products";

export { useTheme, useProducts };

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ProductsProvider>
  );
};
