import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Context } from "../../store/context/context.js";
import {
  PasswordInput,
  Stack,
  TextInput,
  Text,
  Button,
  Checkbox,
  Title,
  Anchor,
  Group,
} from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
import { login } from "../../api/authentication.js";

const Login = () => {
  const { dispatchUsers, usersState } = useContext(Context);

  const [data, setData] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(dispatchUsers, data);
      enqueueSnackbar({
        message: "You have successfully login",
        variant: "success",
      });
      navigate("/");
    } catch (error) {
      enqueueSnackbar({
        message: error.response.data.message,
        variant: "error",
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
      });
    }
  };

  useEffect(() => {
    usersState.isUserLoggedIn && navigate("/");
  }, [usersState.isUserLoggedIn, navigate]);

  return (
    <Stack align="center" px="xl" my="xl" gap={70}>
      <Stack maw="500px" gap={"xl"} bg="black" p="xl" c={"white"}>
        <Title size={"24px"}>SIGN IN </Title>

        <Text>
          If you are already a Haute Couture Family member, please enter your
          login information.
        </Text>

        <TextInput
          label="EMAIL"
          placeholder="hello@gmail.com"
          required
          onChange={(e) => setData({ ...data, email: e.currentTarget.value })}
          styles={{ input: { height: 50 } }}
        />

        <PasswordInput
          leftSection={<IconLock size={"1rem"} />}
          label="PASSWORD"
          placeholder="Enter Password"
          required
          onChange={(e) =>
            setData({ ...data, password: e.currentTarget.value })
          }
          styles={{ input: { height: 50 } }}
        />

        <Button
          onClick={() => {
            handleLogin();
          }}
          style={{ backgroundColor: "white", color: "black" }}
        >
          LOGIN
        </Button>
        <Group justify="space-between">
          <Checkbox label="Remember me" />
          <Anchor size="sm" href="/forgot-password" c={"white"}>
            Forgot password?
          </Anchor>
        </Group>
      </Stack>

      <Stack maw="500px" gap={"l"}>
        <Title order={5}>NEW MEMBER</Title>
        <Text>
          Create your personal account with us to become a member of the Haute
          Couture Family.
        </Text>
        <Button variant="outline" color="rgba(0, 0, 0, 1)">
          <Anchor href="/register" c={"black"}>
            CREATE ACCOUNT
          </Anchor>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
