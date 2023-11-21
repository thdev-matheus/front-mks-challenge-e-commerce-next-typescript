import { ICartProduct } from "@/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useProducts } from "../Products";

interface ICartContext {
  cart: ICartProduct[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  resetCart: () => void;
  totalPay: number;
  quant: number;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ICartProduct[]>([]);
  const [totalPay, setTotalPay] = useState(0.0);
  const [quant, setQuant] = useState(0);

  const { products } = useProducts();

  const addToCart = (productId: string) => {
    const product = products.find((prod) => prod.objectId === productId);

    if (!product) {
      //lógica de feedback de erro
      return;
    }

    const cartProduct = cart.find((prod) => prod.objectId === product.objectId);

    if (!cartProduct) {
      setCart((prev) => [{ ...product, quantity: 1 }, ...prev]);
    } else {
      const newCart = cart.map((prod) => {
        if (prod.objectId === cartProduct.objectId) {
          return { ...prod, quantity: prod.quantity + 1 };
        } else {
          return prod;
        }
      });

      setCart(newCart);
    }
  };

  const removeFromCart = (productId: string) => {
    const cartProduct = cart.find((prod) => prod.objectId === productId);

    if (!cartProduct) {
      //lógica de feedback de erro
      return;
    } else if (cartProduct.quantity > 1) {
      const newCart = cart.filter((prod) => {
        if (prod.objectId === cartProduct.objectId) {
          return { ...prod, quantity: prod.quantity - 1 };
        } else {
          return prod;
        }
      });

      setCart(newCart);
    } else {
      const newCart = cart.filter(
        (prod) => prod.objectId !== cartProduct.objectId
      );

      setCart(newCart);
    }
  };

  const resetCart = () => setCart([]);

  useEffect(() => {
    const total = cart.reduce(
      (acc, prod) => acc + prod.price * prod.quantity,
      0
    );

    setTotalPay(total);
    setQuant(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, resetCart, totalPay, quant }}
    >
      {children}
    </CartContext.Provider>
  );
};
