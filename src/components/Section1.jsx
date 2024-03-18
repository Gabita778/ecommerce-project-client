import { Flex, Stack, Image, Text, Box } from "@mantine/core";
import hero1 from "../assets/gift-collection.jpg";

export const Section1 = () => {
  return (
    <Flex direction={{ base: "column-reverse", sm: "row" }}>
      <Stack justify="center">
        <Box className="section1-right">
          <Text p="xl" c={"white"}>
            Stories of creativity, passion and commitment, preservation and
            promotion of culture, valorisation of the territory; projects that
            narrate HauteCouture through new perspectives. Skillful hands of the
            artisans, experimentations, places and art in its several
            manifestations take on a leading role.
          </Text>
        </Box>
      </Stack>

      <Image
        src={hero1}
        alt="homepage-cover"
        maw={{ base: "100%", sm: "50%" }}
      />
    </Flex>
  );
};
