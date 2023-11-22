"use client";

import { FaCartShopping } from "react-icons/fa6";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView } from "framer-motion";
import { useCart } from "@/contexts";

interface ICartButtonProps {
  toggleIsCartOpen: () => void;
}

export const CartButton = ({ toggleIsCartOpen }: ICartButtonProps) => {
  const { quant } = useCart();

  const quantRef = useRef(null);
  const quantIsInView = useInView(quantRef, { once: true });
  const quantControl = useAnimation();

  const quantTansitions = {
    duration: 0.5,
    ease: "easeInOut",
    type: "spring",
    damping: 10,
    stiffness: 200,
  };

  const quantVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  useEffect(() => {
    if (quantIsInView) {
      quantControl.start("visible");
    }
  }, [quant]);

  return (
    <S.Container onClick={toggleIsCartOpen} ref={quantRef}>
      <FaCartShopping />
      {quant > 0 && (
        <S.BoxQuant
          transition={quantTansitions}
          variants={quantVariants}
          initial={quantVariants.hidden}
          animate={quantControl}
        >
          {quant}
        </S.BoxQuant>
      )}
    </S.Container>
  );
};
