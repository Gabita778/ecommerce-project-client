import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../../store/context/context.js";
import { addProductToCart, getCartData } from "../../api/cartApiCalls.js";
import { fetchProductSingle } from "../../api/productsApiCalls.js";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    productState,
    dispatchProductSingle,
    dispatchCarts,
    cartsState,
    usersState,
    selectedSize,
    setSelectedSize
  } = useContext(Context);
  const cartId = usersState.user?.cartId;
  
  const [productQuantity, setProductQuantity] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProductSingle(dispatchProductSingle, id);
  }, [id, dispatchProductSingle]);

  const goBackHandler = () => {
    navigate(-1);
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (event) => {
    setProductQuantity(parseInt(event.target.value));
  };
console.log(productState)
  const addToCartHandler = async () => {
    if (productState.sizes?.length > 0) {
      if (!selectedSize) return setError("Please select the size");
    }
    if (usersState.isUserLoggedIn && productState) {
      await addProductToCart(
        dispatchCarts,
        cartsState,
        {
          ...productState,
          size: selectedSize,
          quantity: productQuantity,
        },
        cartId, true
      );

      await getCartData(dispatchCarts, cartId);
      dispatchCarts({ type: "TOGGLE_CART" });
    }
  };

  return (
    <>
      {productState && (
        <div className="singleProductInfo">
          <div className="singleProduct-left">
            <img
              className="singleProduct-img"
              src={productState.img}
              alt={productState.name}
            />
          </div>
          <div className="singleProduct-right">
            <h1>{productState.name}</h1>
            <p>{productState.price}€</p>
            {productState.sizes?.length > 0 ? (
              <div className="singleProduct-size">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <h1>Selected Size: {selectedSize}</h1>

                {productState.sizes.map((size) => (
                  <button key={size} onClick={() => handleSizeSelection(size)}>
                    {size}
                  </button>
                ))}
              </div>
            ) : (
              <div>Only one size available</div>
            )}
            <div className="quantity-input">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={productQuantity}
                onChange={handleQuantityChange}
                min="1"
                style={{ width: "50px", marginRight: "10px" }}
              />
            </div>
            <div className="button-container">
              <button style={{ cursor: "pointer" }} onClick={addToCartHandler}>
                ADD TO CART
              </button>
              <button className="gobackbutton" style={{ cursor: "pointer" }} onClick={goBackHandler}>
                GO BACK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
