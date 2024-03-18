import { useState, useContext } from "react";
import { useSnackbar } from "notistack";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../store/context/context.js";

import {
  PasswordInput,
  Stack,
  TextInput,
  Text,
  Button,
  Title,
  Flex,
  Anchor,
  Select,
} from "@mantine/core";
import { IconLock } from "@tabler/icons-react";

import { register } from "../../api/authentication";

const Register = () => {
  const [data, setData] = useState({});
  const { dispatchUsers, usersState } = useContext(Context);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await register(dispatchUsers, data);
      enqueueSnackbar({
        message: "You have successfully registered",
        variant: "success",
      });
      navigate("/login");
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
      <Stack maw="500px" gap={"xl"} bg="black" c={"white"} p="xl">
        <Title>CREATE AN ACCOUNT</Title>

        <Text>
          Be the first to know about new collections and exclusive events
          through your personal account.
        </Text>

        <Flex>
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            required
            onChange={(e) =>
              setData({ ...data, firstName: e.currentTarget.value })
            }
            mr={15}
            w={"100%"}
            styles={{ input: { height: 50 } }}
          />

          <TextInput
            label="Last Name"
            placeholder=" Enter your last name"
            required
            onChange={(e) =>
              setData({ ...data, lastName: e.currentTarget.value })
            }
            w={"100%"}
            styles={{ input: { height: 50 } }}
          ></TextInput>
        </Flex>

        <Select
          label="Country"
          placeholder="Select Country"
          data={["Germany", "France", "Italy", "England"]}
          value={data.country ?? undefined}
          onChange={(value) => setData({ ...data, country: value })}
          styles={{ input: { height: 50 } }}
        />

        <TextInput
          label="EMAIL"
          placeholder="hello@gmail.com"
          required
          onChange={(e) => setData({ ...data, email: e.currentTarget.value })}
          styles={{ input: { height: 50 } }}
        />

        <TextInput
          label="PHONE"
          placeholder="Enter your Email"
          onChange={(e) => setData({ ...data, phone: e.currentTarget.value })}
          styles={{ input: { height: 50 } }}
        />

        <PasswordInput
          leftSection={<IconLock size={"1rem"} />}
          label="PASSWORD"
          placeholder="Your password"
          required
          onChange={(e) =>
            setData({ ...data, password: e.currentTarget.value })
          }
          styles={{ input: { height: 50 } }}
        />

        <Button
          style={{ backgroundColor: "white", color: "black" }}
          onClick={() => {
            handleSubmit();
          }}
        >
          {" "}
          CREATE AN ACCOUNT
        </Button>

        <Flex gap={"sm"} justify={{ sm: "center" }}>
          <Text> Already have an account!</Text>
          <Anchor href="/login" c={"white"}>
            LOGIN
          </Anchor>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Register;
