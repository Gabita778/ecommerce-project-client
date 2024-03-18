import axios from "axios";

export const fetchProducts = async (dispatchProducts, category) => {
  try {
    const url = category
      ? `${import.meta.env.VITE_API}/products?category=${category}`
      : `${import.meta.env.VITE_API}/products`;
    const response = await axios.get(url);
    dispatchProducts({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductSingle = async (dispatchProduct, id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/products/${id}`
    );
    console.log(response);
    dispatchProduct({
      type: "FETCH_PRODUCT_SINGLE",
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async (dispatchProducts) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/products`);

    dispatchProducts({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};
