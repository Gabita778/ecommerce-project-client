import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/context/context.js";
import {
  addProductToCart,
  deleteCartItem,
  getCartData,
} from "../../api/cartApiCalls.js";

const Cart = () => {
  const { cartsState, dispatchCarts, usersState, productState } =
    useContext(Context);

  const deleteFromCartHandler = async (itemId) => {
    console.log(usersState.user.cartId);

    const cartId = usersState.user?.cartId;

    if (cartId && cartsState.items) {
      console.log(cartsState.items);

      const cartItem = cartsState.items.find((item) => item._id === itemId);
      console.log(cartItem);

      if (cartItem) {
        console.log(cartItem);
        await deleteCartItem(dispatchCarts, itemId, cartId);
        await getCartData(dispatchCarts, cartId);
      }
    }
  };

  const changeQuantityHandler = (size, increment) => {
    const cartId = usersState.user?.cartId;

    addProductToCart(
      dispatchCarts,
      cartsState,
      {
        ...productState,
        quantity: 1,
        size: size,
      },
      cartId,
      increment
    );
  };

  console.log(cartsState, "from CArt line 54");

  const getTotalPrice = () => {
    return cartsState.items?.reduce(
      (total, item) => total + item?.product?.price * item?.quantity,
      0
    );
  };

  return (
    <div className="bag ">
      <Link to={`/carts/${usersState.user?.cartId}`} className="to-route-bag">
        <p>checkout</p>
      </Link>
      <div className="bag-total">
        <p>Total: €{getTotalPrice()}</p>
      </div>
      <div className="bag-items">
        {cartsState.items?.length > 0 ? (
          <ul>
            {cartsState.items?.map(({ product, quantity, size, _id }) => (
              <li key={_id} className="item">
                <img src={product?.img} alt={product?.name} />
                <div className="item-description">
                  <h3>{product?.name}</h3>
                  <h4 style={{ color: "gray" }}>Price: {product?.price}€</h4>
                  {size ? (
                    <h4>Sizes: {size}</h4>
                  ) : (
                    <div style={{marginLeft:"1.2rem"}}>Only one size available</div>
                  )}
                  <span className="quantity-control">
                    <button
                      className="button-quantity"
                      onClick={() => changeQuantityHandler(size, false)}
                    >
                      -
                    </button>
                    <h4>{quantity} pieces</h4>
                    <button
                      className="button-quantity"
                      onClick={() => changeQuantityHandler(size, true)}
                    >
                      +
                    </button>
                  </span>
                  <button
                    id="button"
                    onClick={() => deleteFromCartHandler(_id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="bag-empty">
            <h3>Oh boy!</h3>
            <h3>This bag is empty</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;