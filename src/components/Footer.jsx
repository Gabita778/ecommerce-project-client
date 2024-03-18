import { useState } from "react";
// import { NavLink } from "react-router-dom";
import {
  Flex,
  Box,
  Title,
  Text,
  NavLink,
  Anchor,
  Grid,
  Divider,
  Stack,
} from "@mantine/core";
import gabriella from "../assets/gabriella.jpg";
import rachel from "../assets/rachel.jpg";
import esther from "../assets/esther.png";
import peculiar from "../assets/peculiar.png";

import BackToTopButton from "./BackToTop";
import { useMediaQuery, useInViewport } from "@mantine/hooks";

const Footer = () => {
  const [aboutUsVisible, setAboutUsVisible] = useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");
  const { ref, inViewport } = useInViewport();

  const toggleAboutUs = () => {
    setAboutUsVisible(!aboutUsVisible);
  };
  return (
    <>
      <Grid gutter={{ base: "0px", sm: "0px", md: "30px" }} px={"md"} ref={ref}>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Stack mb={"xl"} align="center">
            <Title size={"17px"} pb={"md"}>
              HauteCouture
            </Title>
            <Text>
              Experience the pinnacle of sartorial elegance with our haute
              couture creations. Immerse yourself in a world of opulence, where
              every stitch tells a story of artistry and refinement. From
              ethereal gowns to tailored masterpieces, our collection exudes
              timeless glamour and individuality, defining luxury at its finest.
            </Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
          <Stack mb={"xl"} align={isMobile ? undefined : "center"}>
            <Title size={"17px"} pb={"md"}>
              Customer Service
            </Title>

            <Box>
              <NavLink
                href="/terms"
                label="Shipping and Payment"
                p="0"
                py={"sm"}
              />

              <NavLink
                href="/terms"
                label="Return and Refund"
                p="0"
                py={"sm"}
              />

              <NavLink href="/terms" label="Track your Order" p="0" py={"sm"} />

              <NavLink
                href="/terms"
                label="Terms and Conditons"
                p="0"
                py={"sm"}
              />
            </Box>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
          <Stack mb={"xl"}>
            <Title size={"17px"} pb={"sm"}>
              Legal
            </Title>
            <Box>
              <NavLink href="/terms" label="Privacy | Policy" p="0" py={"sm"} />

              <NavLink href="/terms" label="Cookie Policy" p="0" py={"sm"} />

              <NavLink
                href="/terms"
                label="General terms & conditions of sale"
                p="0"
                py={"sm"}
              />

              <NavLink
                href="/terms"
                label="Terms and Conditons"
                p="0"
                py={"sm"}
              />

              <NavLink href="/terms" label="Returns" p="0" py={"sm"} />
            </Box>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          {" "}
          <Stack align="center" mb={"xl"} px={"sm"}>
            <Title size={"17px"} pb={"sm"}>
              Company
            </Title>
            <Text>
              HauteCouture, is an online store with the lateat and coolest{" "}
              fashion stuff from around the world
            </Text>
            <Box size="100px">
              <NavLink href="/contactTheShop" label="Send us a Message" />
            </Box>
            <Box size="100px" className="about">
              <Anchor onClick={toggleAboutUs} c={"white"}>
                About us{" "}
              </Anchor>

              {aboutUsVisible && (
                <Box>
                  <Title size="h4" mb={"lg"}>
                    Code Couture
                  </Title>

                  <Flex wrap={"wrap"}>
                    <div className="profile-container">
                      <img className="img-footer" src={gabriella} />
                      <p>Gabriella</p>
                      <p>Developer</p>
                    </div>
                    <div className="profile-container">
                      <img className="img-footer" src={rachel} />
                      <p>Rachel</p>
                      <p>Developer</p>
                    </div>

                    <div className="profile-container">
                      <img className="img-footer" src={esther} />
                      <p>Esther</p>
                      <p>Developer</p>
                    </div>
                    <div className="profile-container">
                      <img className="img-footer" src={peculiar} />
                      <p>Peculiar</p>
                      <p>Developer</p>
                    </div>
                  </Flex>
                </Box>
              )}
            </Box>
          </Stack>
        </Grid.Col>
      </Grid>

      <BackToTopButton inViewport={inViewport} />
      <Divider />
      <Flex align={"center"} justify="space-between" gap={"sm"} p={"xl"}>
        <Text>COUNTRY/REGION : DE (€) / GERMAN</Text>

        <Flex justify={"flex-start"} direction={{ base: "column", sm: "row" }}>
          <NavLink
            target="_blank"
            href="https://www.facebook.com"
            rel="noreferrer"
            label="FACEBOOK"
          />
          <NavLink
            target="_blank"
            href="https://www.instagram.com"
            rel="noreferrer"
            label="INSTAGRAM"
          />
          <NavLink
            target="_blank"
            href="https://www.twitter.com"
            rel="noreferrer"
            label="TWITTER"
          />
        </Flex>
      </Flex>
      <Flex justify={"center"} p="xl">
        <Text size="12px">
          {" "}
          Copyright © 2024 HauteCouture | All right Reserved
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
