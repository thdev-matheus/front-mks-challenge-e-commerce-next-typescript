"use client";

import { useState } from "react";
import * as S from "./styles";
import * as C from "@/components";

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      {isCartOpen && <C.Cart toggleIsCartOpen={toggleIsCartOpen} />}

      <S.Container>
        <C.Logo />
        <C.CartButton toggleIsCartOpen={toggleIsCartOpen} />
      </S.Container>
    </>
  );
};
