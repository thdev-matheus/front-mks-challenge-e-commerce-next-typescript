import { ICartProduct } from "@/types";
import * as S from "./styles";
import { IoMdCloseCircle } from "react-icons/io";
import { useCart } from "@/contexts";
import { useAnimation } from "framer-motion";

interface ICartProductCardProps {
  product: ICartProduct;
}

export const CartProductcard = ({ product }: ICartProductCardProps) => {
  const { removeFromCart, addToCart, deleteFromCart } = useCart();

  const controll = useAnimation();

  const variants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 500, opacity: 0 },
  };

  const transition = {
    duration: 0.5,
    ease: "easeInOut",
    type: "spring",
    damping: 12,
    stiffness: 150,
  };

  return (
    <S.Container
      variants={variants}
      transition={transition}
      initial="visible"
      animate={controll}
    >
      <IoMdCloseCircle
        onClick={async () => {
          await controll.start("hidden");
          deleteFromCart(product.objectId);
        }}
      />

      <S.BoxImage>
        <img src={product.image} alt={product.name} />
      </S.BoxImage>

      <S.BoxInfo>
        <h4>{`${product.brand} ${product.name}`}</h4>
      </S.BoxInfo>

      <S.BoxQuant></S.BoxQuant>

      <S.BoxValue>
        <h4>R$ {product.price}</h4>
      </S.BoxValue>
    </S.Container>
  );
};
