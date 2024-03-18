import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import SearchProduct from "./SearchProduct.jsx";
import { Context } from "../store/context/context.js";
import { Avatar, Box, Burger, Flex } from "@mantine/core";
import { logout } from "../api/authentication.js";
import whiteLogo from "../assets/shopLogowhite.png";
import CartCounter from "./cart/CartCounter.jsx";
import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

Navbar.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

function Navbar(props) {
  const [showSearch, setShowSearch] = useState(false);

  const closeSearchProducts = () => {
    setShowSearch(false);
  };
  const { usersState, dispatchUsers, dispatchCarts } = useContext(Context);

  const handleLogout = async () => {
    await logout(dispatchUsers);
    window.location.href = "/";
  };

  return (
    <Flex
      className="navbar-container"
      justify={"space-between"}
      align={"center"}
      pr={"xl"}
    >
      <Flex align={"center"} justify="space-between" w="56%">
        <Burger
          hiddenFrom="md"
          opened={props.opened}
          onClick={props.toggle}
          aria-label="Toggle navigation"
          color={"white"}
          size={"30px"}
        />
        <Box visibleFrom="md">
          <div className="navbarLeft">
            <div className=" navLeftList">
              <NavLink to="/products/man"> MEN </NavLink>
              <ul className="dropdown-list" id="men">
                <li>
                  <NavLink to="products/shirts">Shirts</NavLink>
                </li>

                <li>
                  <NavLink to="products/shoes">Shoes</NavLink>
                </li>

                <li>
                  <NavLink to="products/trousers">Trousers</NavLink>
                </li>
              </ul>
            </div>

            <div className=" navLeftList">
              <NavLink to="/products/women"> WOMEN </NavLink>
              <ul className="dropdown-list" id="women">
                <li>
                  <NavLink to="products/dresses">Dresses </NavLink>
                </li>

                <li>
                  <NavLink to="products/skirts">Skirts </NavLink>
                </li>

                <li>
                  <NavLink to="products/blouses">Blouses </NavLink>
                </li>
              </ul>
            </div>

            <div className=" navLeftList">
              <NavLink to="/products/gifts"> GIFTS </NavLink>
              <ul className="dropdown-list" id="gifts">
                <li>
                  <NavLink to="products/jewelry">Jewelry </NavLink>
                </li>

                <li>
                  <NavLink to="products/bags">Bags </NavLink>
                </li>

                <li>
                  <NavLink to="products/wallets">Wallets </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Box>

        <Box hiddenFrom="md">
          <NavLink to="/">
            <img style={{ width: 70 }} src={whiteLogo} alt="logo" />
          </NavLink>
        </Box>
      </Flex>
      <div className="navbarRight">
        <div>
          <CiSearch
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => setShowSearch(true)}
            className="searchLogo"
            alt="Search Logo"
          />
          {showSearch && (
            <div className="search">
              <SearchProduct closeSearchProducts={closeSearchProducts} />
              <button onClick={closeSearchProducts}>Close</button>
            </div>
          )}
        </div>

        <div>
          <Box className="login-dropdown" visibleFrom="md">
            {usersState.isUserLoggedIn !== true && (
              <PiUserLight style={{ fontSize: "30px", cursor: "pointer" }} />
            )}
            {usersState.isUserLoggedIn === true && (
              <Avatar src={null} alt={usersState.firstName} color="black">
                {usersState.user.firstName[0].toUpperCase() +
                  usersState.user.lastName[0].toUpperCase()}
              </Avatar>
            )}
            <div className="dropdown-list-right" id="login">
              {usersState.isUserLoggedIn !== true && (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
              {usersState.isUserLoggedIn === true && (
                <li>
                  <NavLink onClick={handleLogout}>Logout</NavLink>
                </li>
              )}
            </div>
          </Box>
        </div>

        <div>
          <div className="cart-count">{<CartCounter />}</div>
          <HiOutlineShoppingBag
            onClick={() => {
              dispatchCarts({ type: "TOGGLE_CART" });
            }}
            style={{ fontSize: "30px", cursor: "pointer" }}
            className="cartLogo"
            alt="cart logo"
          />
        </div>
      </div>
    </Flex>
  );
}
export default Navbar;
