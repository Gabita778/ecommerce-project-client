import {
  Text,
  Box,
  Button,
  TextInput,
  Stack,
  Title,
} from "@mantine/core";

const Newsletter = () => {
  return (
    <Stack
      gap={"xl"}
      align="center"
      justify="center"
      p="xl"
      h={"400px"}
      mt={{ base: "40px", md: "0" }}
      className="double"
    >
      <Text c="white" mt={"xl"}>
        Be the first to know about our new collections{" "}
      </Text>

      <Box w="30%" miw={{ base: "250px", sm: "350px" }} pos={"relative"}>
        <TextInput
          type="email"
          placeholder="Email"
          variant="unstyled"
          width={"100%"}
          styles={{
            input: { borderBottom: "1px solid white", color: "white" },
          }}
        />
        <Button
          variant="subtle"
          c={"white"}
          pos="absolute"
          right={0}
          bottom={0}
        >
          Sign up
        </Button>
      </Box>
      <Title c="white" size={"h3"} mt={{ base: "200px", sm: "150px" }}>
        HauteCouture
      </Title>
    </Stack>
  );
};

export default Newsletter;
