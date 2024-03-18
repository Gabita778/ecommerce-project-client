import axios from "axios";

export const toggleCart = () => ({
  type: "TOGGLE_CART",
});

export const getCartData = async (dispatchCarts, cartId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/carts/${cartId}`
    );
    dispatchCarts({
      type: "GET_CART_DATA",
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addProductToCart = async (
  dispatchCarts,
  cartsState,
  product,
  cartId,
  increment
) => {

  try {
    const itemExists = cartsState.items.find(
      (item) => item.product._id === product._id && item.size === product.size
    );

    if (itemExists) {
      const response = await axios.patch(
        `${import.meta.env.VITE_API}/carts/${cartId}/${itemExists._id}`,
        {
          quantity: increment
            ? itemExists.quantity + product.quantity
            : itemExists.quantity - product.quantity,
          size: product.size,
          product: product._id,
        }
      );
      getCartData(dispatchCarts, cartId);
    } else {
      console.log("zzz");
      const response = await axios.post(
        `${import.meta.env.VITE_API}/carts/${cartId}`,
        {
          product: product._id,
          quantity: 1,
          size: product.size,
        }
      );


      dispatchCarts({ type: "ADD_CART_DATA", payload: response.data.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCartItem = async (dispatchCarts, itemId, cartId) => {
  try {
    await axios.delete(`${import.meta.env.VITE_API}/carts/${cartId}/${itemId}`);

    dispatchCarts({ type: "DELETE_FROM_CART", payload: itemId });
  } catch (error) {
    console.log(error);
  }
};


export const updateCartItemQuantity = async (cartId, itemId, newQuantity) => {
  
    const response = await axios.patch(
      `${import.meta.env.VITE_API}/carts/${cartId}/${itemId}`,
      { newQuantity }
    );
    return response.data.data; 
  
};