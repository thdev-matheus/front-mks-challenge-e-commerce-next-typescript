"use server";

import * as S from "./styles";
import * as C from "@/components";

export const Header = () => {
  return (
    <S.Container>
      <C.Logo />
      <C.CartButton />
    </S.Container>
  );
};
