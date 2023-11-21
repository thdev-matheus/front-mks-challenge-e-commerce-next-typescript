"use client";

import { FaCartShopping } from "react-icons/fa6";
import * as S from "./styles";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

interface ICartButtonProps {
  toggleIsCartOpen: () => void;
}

export const CartButton = ({ toggleIsCartOpen }: ICartButtonProps) => {
  const quant = 10;

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
  }, [quantIsInView]);

  return (
    <S.Container onClick={toggleIsCartOpen}>
      <FaCartShopping />
      {quant > 0 && (
        <S.BoxQuant
          ref={quantRef}
          transition={quantTansitions}
          variants={quantVariants}
          initial={quantVariants.hidden}
          animate={quantControl}
        >
          10
        </S.BoxQuant>
      )}
    </S.Container>
  );
};
