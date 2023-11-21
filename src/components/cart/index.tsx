import { useCart } from "@/contexts";
import * as S from "./styles";

interface ICartProps {
  toggleIsCartOpen: () => void;
}

export const Cart = ({ toggleIsCartOpen }: ICartProps) => {
  const { cart } = useCart();

  return (
    <S.Container>
      <S.deadArea onClick={toggleIsCartOpen} />

      <S.CartBox></S.CartBox>
    </S.Container>
  );
};
