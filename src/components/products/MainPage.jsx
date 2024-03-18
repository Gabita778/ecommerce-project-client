import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context/context.js";
import CardProduct from "./CardProduct.jsx";
import { useParams } from "react-router-dom";
import { Grid, Container, Box } from "@mantine/core";
import ImageGallery from "../Banner.jsx";
import arrowdown from "../../assets/Arrows-Down-4-icon.png";
import arrowup from "../../assets/Arrows-Up-4-icon.png";

const MainProducts = () => {
  const { category } = useParams();
  const { productsState, setQuery } = useContext(Context);
  const { data } = productsState;
  const [isLoading, setIsLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(8);

  useEffect(() => {
    setQuery(category);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [category, setQuery]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleShowMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 8); 
  };

  const handleShowLess = () => {
    setItemsToShow(8); 
  };

  if (!data || data.length === 0) {
    return (
      <div className="products-container">
        We are sorry, we have not found any products matching your search.
      </div>
    );
  }

  return (
    <Container fluid mb={"30px"}>
       <ImageGallery/>
     
      <Grid className="products-container" gutter={{ base: 50, md: 80 }}>
        {data.slice(0, itemsToShow).map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
        {/* <Box pl={"xl"} pt={{ base: 0, sm: "lg", md: "0" }}>
          {itemsToShow < data.length ? ( 
            <button onClick={handleShowMore}>Show More</button>
          ) : (
            <button onClick={handleShowLess}>Show Less</button>
          )}
        </Box> */}
       
      </Grid>

      <Box style={{ display:"flex", justifyContent:"center", marginTop:"5rem", cursor: "pointer" }}>
          {itemsToShow < data.length ? (
           <img onClick={handleShowMore} style={{ width: 50 }} src={arrowdown} alt="logo" />
          ) : (
            <img onClick={handleShowLess} style={{ width: 50 }} src={arrowup} alt="logo" />
          )}
        </Box>
        
    </Container>
  );
};

export default MainProducts;
