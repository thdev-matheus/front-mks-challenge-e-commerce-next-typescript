import * as S from "./styles";

interface ICartProps {
  toggleIsCartOpen: () => void;
}

export const Cart = ({ toggleIsCartOpen }: ICartProps) => {
  return (
    <S.Container>
      <S.deadArea onClick={toggleIsCartOpen} />

      <S.CartBox></S.CartBox>
    </S.Container>
  );
};
