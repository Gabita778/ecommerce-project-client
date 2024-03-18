import { Box, NavLink, rem, AppShell, Text } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { Context } from "../store/context/context.js";
import { useContext } from "react";
import { logout } from "../api/authentication.js";

const Sidebar = () => {
  const { usersState, dispatchUsers } = useContext(Context);

  const handleLogout = async () => {
    await logout(dispatchUsers);
    window.location.href = "/";
  };
  return (
    <>
      <AppShell.Section grow>
        <NavLink
          href="/products/women"
          label="WOMEN"
          childrenOffset={0}
          c="white"
          styles={{ label: { fontWeight: 500, fontSize: 25 } }}
          rightSection={<div />}
        >
          <NavLink
            href="/products/women"
            label="All"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
          <NavLink
            href="/products/dresses"
            label="Dresses"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
          <NavLink
            label="Skirts"
            href="/products/skirts"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
          <NavLink
            label="Blouses"
            href="/products/blouses"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
        </NavLink>

        <NavLink
          href="#/products/man"
          label="MEN"
          c="white"
          childrenOffset={0}
          styles={{ label: { fontWeight: 500, fontSize: 25 } }}
          rightSection={<div />}
        >
          <NavLink
            href="/products/man"
            label="All"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
          <NavLink
            href="/products/shirts"
            label="Shirts"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
          <NavLink
            label="Shoes"
            href="/products/shoes"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
          <NavLink
            label="Trousers"
            href="/products/trousers"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
        </NavLink>

        <NavLink
          href="/products/gifts"
          label="GIFT"
          c="white"
          childrenOffset={0}
          styles={{ label: { fontWeight: 500, fontSize: 25 } }}
          rightSection={<div />}
        >
          <NavLink
            href="/products/gifts"
            label="All"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
          <NavLink
            href="/products/jewelry"
            label="Jewelry"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
          <NavLink
            label="Bags"
            href="/products/bags"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
          <NavLink
            label="Wallets"
            href="/products/wallets"
            c="white"
            styles={{ label: { fontSize: 22 } }}
          />
        </NavLink>
      </AppShell.Section>
      <AppShell.Section>
        <Box>
          {!usersState.isUserLoggedIn && (
            <>
              <NavLink label="CREATE ACCOUNT" href="/register" c="white" />
              <NavLink label="SIGN IN" href="/login" c="white" />
            </>
          )}
          {usersState.isUserLoggedIn && (
            <>
              <Text pl="xs" c="white">
                {" "}
                {usersState.user.email}
              </Text>
              <NavLink
                leftSection={
                  <IconLogout style={{ width: rem(14), height: rem(14) }} />
                }
                onClick={handleLogout}
                label="Logout"
                c="white"
                href="/logout"
              ></NavLink>
            </>
          )}
        </Box>
      </AppShell.Section>
    </>
  );
};

export default Sidebar;
