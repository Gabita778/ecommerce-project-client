import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context/context.js";
import CardProduct from "./CardProduct.jsx";
import { Grid, Container } from "@mantine/core";

const Products = () => {
  const { productsState, filter } = useContext(Context);
  const { data: productsData } = productsState;

  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const filteredProducts = productsData?.filter((product) => {
      if (filter) {
        const lowerCaseFilter = filter.toLowerCase();
        const concatenatedValues = Object.values(product)
          .join(" ")
          .toLowerCase();
        return concatenatedValues.includes(lowerCaseFilter);
      } else {
        return true;
      }
    });
    setFilteredData(filteredProducts);
  }, [productsData, filter]);

  console.log(filteredData);
  console.log(filter);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid mb={"30px"}>
      <Grid className="products-container" gutter={{ base: 50, md: 80 }}>
        {filteredData?.length > 0 ? (
          filteredData.map((product) => (
            <CardProduct
              key={product._id}
              product={product}
              totalProducts={filteredData.length}
            />
          ))
        ) : (
          <div>
            We are sorry, we have not found any products matching your search.
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default Products;
