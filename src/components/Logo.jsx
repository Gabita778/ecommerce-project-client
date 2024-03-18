import { NavLink } from "react-router-dom";
import myImage from "../assets/shopLogo1.png";
import { Box } from "@mantine/core";

function Logo() {
  return (
    <Box visibleFrom="md">
      <NavLink to="/">
        <img className="navLogo" src={myImage} alt="logo" />
      </NavLink>
    </Box>
  );
}

export default Logo;
