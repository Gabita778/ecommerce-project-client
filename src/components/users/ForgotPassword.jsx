import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { forgotPassword } from "../../api/authentication";

import {
  Title,
  Text,
  TextInput,
  Button,
  Group,
  Anchor,
  Center,
  Box,
  rem,
  Stack,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

const ForgotPassword = () => {
  const [data, setData] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      const response = await forgotPassword(data);
      console.log(response.data);
      enqueueSnackbar({
        message: "A code has been sent to you, please reset your password",
        variant: "success",
      });
      navigate("/reset-password");
    } catch (error) {
      enqueueSnackbar({
        message: error.response?.data.message ?? "Something went wrong",
        variant: "error",
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
      });
    }
  };

  return (
    <Stack align="center" px="xl" my="xl">
      <Stack
        w={{ base: "100%", sm: 500 }}
        maw="500px"
        gap={"xl"}
        bg="black"
        p="xl"
        c={"white"}
      >
        <Title>Forgot your password?</Title>
        <Text fz="sm" ta="center">
          Enter your email to get a reset link
        </Text>

        <TextInput
          label="Your email"
          placeholder="hello.gmail.com"
          onChange={(e) => setData({ ...data, email: e.currentTarget.value })}
          required
          w={"100%"}
          styles={{ input: { height: 50 } }}
        />
        <Group justify="space-between" mt="lg">
          <Anchor size="sm" href="/login">
            <Center inline>
              <IconArrowLeft
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
                color="white"
              />
              <Box ml={5} c={"white"}>
                Back to the login page
              </Box>
            </Center>
          </Anchor>

          <Button
            onClick={() => {
              handleForgotPassword();
            }}
            bg={"white"}
            c={"black"}
          >
            Reset password
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
};

export default ForgotPassword;
