import { Flex, Stack, Image, Text, Box } from "@mantine/core";
import hero1 from "../assets/handbag.jpg";

export const Section2 = () => {
  return (
    <Flex direction={{ base: "column", sm: "row" }} className="container">
      <Image
        src={hero1}
        alt="homepage-cover"
        maw={{ base: "100%", sm: "50%" }}
      />

      <Stack justify="center">
        <Box className="section2-left">

          <Text p="xl" c={"white"}>
          Versatile, roomy, functional: HauteCouture&apos;s Bags featured in the SS24 runway show overflow with objects, garments and accessories, accompanying dynamic days in the city, traveling, or on vacation and expressing the dishevelled chic style common to the entire collection.
          Timeless elegance and the soft feel of leather, along with colorful tricks, complete the captivating design of each style, perfect for creating original combinations with any look.

          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};
