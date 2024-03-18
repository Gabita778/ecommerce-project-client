import { Grid } from "@mantine/core";
import soldOut from "../../assets/sold-out.jpeg";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CardProduct = ({ product, totalProducts }) => {
  CardProduct.propTypes = {
    product: PropTypes.object.isRequired,
  };

  const { name, img, price, _id } = product;
  const navigate = useNavigate();

  const detailProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const defaultImgSrc = soldOut;
  const columnSize = totalProducts < 2 ? 12 : 6;

  return (
    <Grid.Col
      span={{
        base: 12,
        sm: totalProducts < 3 ? columnSize : 4,
        md: totalProducts < 3 ? columnSize : 3,
      }}
    >
      <div className="products-container">
        <div className="products">
          {img ? (
            <img src={img} alt="Product" />
          ) : (
            <img src={defaultImgSrc} alt="sold out" />
          )}
        </div>

        <div className="info">
          <p>{name}</p>
          <p style={{ color: "gray" }}>{price} €</p>
        </div>

        <button onClick={() => detailProduct(_id)}>view more</button>
      </div>
    </Grid.Col>
  );
};

export default CardProduct;
