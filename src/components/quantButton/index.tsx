import { useCart } from "@/contexts";
import { ICartProduct } from "@/types";
import * as S from "./styles";

interface IQuantButtonProps {
  product: ICartProduct;
  animationToRemove: () => Promise<void>;
}

export const QuantButton = ({
  product,
  animationToRemove,
}: IQuantButtonProps) => {
  const { addToCart, removeFromCart, deleteFromCart } = useCart();
  return (
    <S.Container>
      <button
        className="button_sub"
        onClick={async () => {
          if (product.quantity === 1) {
            await animationToRemove();
            deleteFromCart(product.objectId);
          } else {
            removeFromCart(product.objectId);
          }
        }}
      >
        -
      </button>

      <h4>{product.quantity}</h4>

      <button
        className="button_add"
        onClick={() => addToCart(product.objectId)}
      >
        +
      </button>
    </S.Container>
  );
};
