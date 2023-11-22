import { useCart } from "@/contexts";
import * as S from "./styles";
import { IoMdCloseCircle } from "react-icons/io";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { CartProductcard } from "../cartProductcard";
import { v4 as uuid } from "uuid";

interface ICartProps {
  toggleIsCartOpen: () => void;
}

export const Cart = ({ toggleIsCartOpen }: ICartProps) => {
  const { cart, resetCart, totalPay } = useCart();
  const controll = useAnimation();

  const variants = {
    hidden: { x: 500, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const transition = {
    duration: 0.5,
    ease: "easeInOut",
    type: "spring",
    damping: 12,
    stiffness: 150,
  };

  useEffect(() => {
    controll.start("visible");
  }, []);

  return (
    <S.Container>
      <S.deadArea
        onClick={() => {
          controll.start("hidden").then((_) => toggleIsCartOpen());
        }}
      />

      <S.CartBox
        variants={variants}
        transition={transition}
        initial="hidden"
        animate={controll}
      >
        <S.CartHeader>
          <h3>Carrinho de compras</h3>
          <IoMdCloseCircle
            onClick={() => {
              controll.start("hidden").then((_) => toggleIsCartOpen());
            }}
          />
        </S.CartHeader>

        <S.CartMain>
          {cart.length === 0 ? (
            <h3>Não há produtos no carrinho</h3>
          ) : (
            cart.map((prod) => <CartProductcard key={uuid()} product={prod} />)
          )}
        </S.CartMain>

        <S.CartFooter>
          <button className="reset_cart" onClick={resetCart}>
            Esvaziar Carrinho
          </button>

          <S.BoxTotal>
            <h4>Total:</h4>
            <h4>R$ {totalPay.toFixed(2).toString().replace(".", ",")}</h4>
          </S.BoxTotal>

          <button className="purchase">Finalizar Compra</button>
        </S.CartFooter>
      </S.CartBox>
    </S.Container>
  );
};
