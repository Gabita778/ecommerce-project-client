import { Stack } from "@mantine/core";
import { Hero } from "./Hero";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";

function Home() {
  return (
    <Stack gap={"sm"}>
      <Hero />
      <Section1 />
      <Section2 />
    </Stack>
  );
}

export default Home;
