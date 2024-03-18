import { useContext } from "react";
import { Context } from "../../store/context/context.js";

const CartCounter = () => {
  const { cartsState } = useContext(Context);

  const counterItems = () => {
    if (cartsState.items) {
      return cartsState.items
        .reduce((sum, item) => sum + item?.quantity, 0)
        .toString();
    }
    return 0;
  };

  return <p>{counterItems()}</p>;
};

export default CartCounter;
