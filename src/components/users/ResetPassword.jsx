import React, { useState } from "react";
// import bcrypt from "bcrypt";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { resetPassword } from "../../api/authentication";
import { Stack, TextInput, PasswordInput, Button } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";

const ResetPassword = () => {
  const [data, setData] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      const response = await resetPassword(data);
      enqueueSnackbar({
        message: response.message,
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
      <Stack
        w={{ base: "100%", sm: 500 }}
        maw="500px"
        gap={"xl"}
        bg="black"
        c={"white"}
        p="xl"
      >
        <TextInput
          label="RESET CODE"
          required
          onChange={(e) => setData({ ...data, code: e.currentTarget.value })}
          styles={{ input: { height: 50 } }}
        />

        <PasswordInput
          leftSection={<IconLock size={"1rem"} />}
          label=" NEW PASSWORD"
          placeholder="New password"
          onChange={(e) =>
            setData({ ...data, newPassword: e.currentTarget.value })
          }
          required
          styles={{ input: { height: 50 } }}
        />

        <PasswordInput
          leftSection={<IconLock size={"1rem"} />}
          label=" CONFIRM PASSWORD"
          placeholder="Confirm password"
          required
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.currentTarget.value })
          }
          styles={{ input: { height: 50 } }}
        />
        <Button
          onClick={() => {
            handleResetPassword();
          }}
          style={{ backgroundColor: "white", color: "black" }}
        >
          RESET
        </Button>
      </Stack>
    </Stack>
  );
};

export default ResetPassword;
