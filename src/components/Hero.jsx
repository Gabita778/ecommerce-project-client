import { NavLink } from "react-router-dom";
import hero1 from "../assets/women-collection.webp";
import hero2 from "../assets/men-collection.jpg";

import { Stack, Title, Image, Flex } from "@mantine/core";

export const Hero = () => {
  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      mt={{ base: "40px", sm: "90px" }}
      gap={{ base: 50, md: 90 }}
      mb={50} 
      className="test"
    >
      <Stack align="center">
        <Title 
          size="h3"
        >Spring 2024 Collection</Title>
        <NavLink
          to="/products/women"
          className="navLink"
        > FOR HER </NavLink>
        <Image src={hero1} alt="Top Model Image" />
      </Stack>

      <Stack align="center">
        <Title size={"h3"}>Spring 2024 Collection</Title>
        <NavLink
        to="/products/man"
        className="navLink"> FOR HIM </NavLink>
        <Image src={hero2} alt="Two men models" />
      </Stack>
    </Flex>
  );
};
