import { AppShell, Box, Flex, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Newsletter from "./Newsletter";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 120 }}
      mt={"150px"}
      withBorder={false}
      navbar={{
        width: "100%",
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="md"
    >
      <AppShell.Header bg={{ base: "black", md: "white" }}>
        <Navbar opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar p="md" bg={"rgba(0,0,0,0.9)"}>
        <Sidebar />
      </AppShell.Navbar>

      <Flex justify={"center"}>
        <Box p={{ base: "xs", md: "xl" }} maw="1640">
          <Outlet />
        </Box>
      </Flex>
      <Box bg="black" opacity={"1"} c={"white"}>
        <Newsletter />
        <Divider my="xl" />
        <Footer />
      </Box>
    </AppShell>
  );
}
