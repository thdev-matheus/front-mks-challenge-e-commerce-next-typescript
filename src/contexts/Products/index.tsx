import { api } from "@/api";
import { IProduct } from "@/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IProductsContext {
  isLoading: boolean;
  products: IProduct[];
}

const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    setIsLoading(true);

    await api
      .get("/classes/Product")
      .then((res) => setProducts(res.data.results));

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ isLoading, products }}>
      {children}
    </ProductsContext.Provider>
  );
};
