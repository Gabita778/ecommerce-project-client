import { useContext } from "react";
import { deleteCartItem, getCartData } from "../../api/cartApiCalls.js";
import { Context } from "../../store/context/context.js";
import CartCounter from "./CartCounter.jsx";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";


const CartCheckout = () => {
  const { cartsState, dispatchCarts, usersState } = useContext(Context);

  console.log("PRODUCTS_BAG:", cartsState.items);
  console.log("CART:", cartsState);

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

  const getTotalPrice = () =>
    cartsState.items?.reduce(
      (total, item) => total + item.product?.price * item.quantity,
      0
    );

  return (
      <main className="checkout-bag">
        <section className="checkout-items-section">
          <div className="shopping-bag">
            <h3>Shopping Bag</h3>
            <b>{<CartCounter />}</b>
            <p> pieces</p>
          </div>

        {cartsState.items?.length > 0 ? (
            <ul style={{ marginTop: "0", marginLeft:"2rem" }}>
              {cartsState.items.map(({ _id, product, quantity, size }) => (
                <li key={_id} className="checkout-item">
                  <img src={product?.img} alt={product?.name} />
                  <div className="item-info">
                    <h4>{product?.name}</h4>
                    <p>{product?.gender}</p>
                    <p>{product?.season}</p>
                    <p>{product?.description}</p>
                    {size ? (
                      <h4>Sizes:{size}</h4>
                    ) : (
                      <h4>Only one size available</h4>
                    )}
                    <p>{product?.price}€</p>
                    <p>{quantity} pieces</p>
                    <button onClick={() => deleteFromCartHandler(_id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-bag">
              <h2>Oh boy!</h2>
              <h2> This bag is empty.</h2>
            </div>
          )}
        </section>
        <section className="global-price-section">
          <p>Subtotal: €{getTotalPrice()}</p>
          <p>Shipping: Free</p>
          <h4>Total: €{getTotalPrice()}</h4>
          <div>
            <button>Checkout</button>
            <button>PayPal</button>
            <h4>Secure Payments</h4>
            <FaCcVisa style={{ fontSize: "2rem", marginRight: "1rem" }} />
            <FaCcMastercard style={{ fontSize: "2rem", marginRight: "1rem" }} />
            <FaCcPaypal style={{ fontSize: "2rem", marginRight: "1rem" }} />
          </div>
          <h4>NEED HELP ?</h4>
          <p>Call +800 0000 4857</p>
          <p>
            Email:{" "}
            <a
              href="http://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@hautecouture.com
            </a>
          </p>
          <h4>Services</h4>
          <p>Free delivery & returns</p>
          <p>HauteCouture Gifts wrapping</p>
        </section>
      </main>
  );
};

export default CartCheckout;
