import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import SearchProduct from "./SearchProduct.jsx";
import cart_icon from "../assets/cartLogo.png";
import search_icon from "../assets/searchLogo.png";
import login_icon from "../assets/loginLogo.png";
import { Context } from "../store/context/context.js";
import { Avatar } from "@mantine/core";
import { logout } from "../api/authentication.js";
import CartCounter from "./cart/CartCounter.jsx";
import PropTypes from "prop-types";

Navbar.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

function Navbar() {
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
    <div className="navbar-container">
      <div className="navbarLeft">
        <div className=" navLeftList">
          <NavLink to="/products/man"> MEN </NavLink>
          <div className="dropdown-list">
            <ul className="men">
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
        </div>

        <div className=" navLeftList">
          <NavLink to="/products/women"> WOMEN </NavLink>
          <div className="dropdown-list">
            <ul className="women">
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
        </div>

        <div className=" navLeftList">
          <NavLink to="/products/gifts"> GIFTS </NavLink>
          <div className="dropdown-list">
            <ul className="gifts">
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
      </div>

      <div className="navbarRight">
        <div>
          <img
            onClick={() => setShowSearch(true)}
            className="searchLogo"
            src={search_icon}
            alt="Search Logo"
          />
          {showSearch && (
            <div className="search">
              <SearchProduct closeSearchProducts={closeSearchProducts} />
              <button onClick={closeSearchProducts}>Close</button>
            </div>
          )}
        </div>

        <div className="login-dropdown">
          {usersState.isUserLoggedIn !== true && (
            <img className="loginLogo" src={login_icon} alt="person logo" />
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
        </div>
        <div>
          <div className="cart-count">{<CartCounter />}</div>
          <img
            onClick={() => {
              dispatchCarts({ type: "TOGGLE_CART" });
            }}
            className="cartLogo"
            src={cart_icon}
            alt="cart logo"
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
