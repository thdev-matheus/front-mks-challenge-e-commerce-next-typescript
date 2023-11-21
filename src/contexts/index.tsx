import { ReactNode } from "react";

import { ThemeProvider, useTheme } from "./Theme";
import { ProductsProvider, useProducts } from "./Products";
import { CartProvider, useCart } from "./Cart";

export { useTheme, useProducts, useCart };

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsProvider>
      <CartProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CartProvider>
    </ProductsProvider>
  );
};
