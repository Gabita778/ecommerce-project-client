import { createContext } from "react";

// , useEffect, useReducer, useState

// import {
//   usersInitialState,
//   usersReducer,
// } from "../reducers/authenticationReducer.js";

// import {
//   cartsInitialState,
//   cartsReducer
// } from "../reducers/cartReducer.js";

// import {
//   productsInitialState,
//   productInitialState,
//   productsReducer,
//   productReducer,
// } from "../reducers/productsReducer.js";

// import { fetchProducts } from "../../api/productsApiCalls.js";
// import { getCartData } from "../../api/cartApiCalls.js";
// import { getMe } from "../../api/authentication.js";

export const Context = createContext();

// // eslint-disable-next-line react/prop-types
// const ContextProvider = ({ children }) => {

//   const [usersState, dispatchUsers] = useReducer(
//     usersReducer,
//     usersInitialState
//   );

//   const [cartsState, dispatchCarts] = useReducer(
//     cartsReducer,
//     cartsInitialState
//   );

//   const [productsState, dispatchProducts] = useReducer(
//     productsReducer,
//     productsInitialState
//   );

//   const [productState, dispatchProductSingle] = useReducer(
//     productReducer,
//     productInitialState
//   );

//   const [query, setQuery] = useState("");

//   const [filter, setFilter] = useState("");

//   const filterProducts = (text) => {
//     setFilter(text);
//   };

//   useEffect(() => {
//     fetchProducts(dispatchProducts, query);
//   }, [query]);


//   const { user, isUserLoggedIn } = usersState;

//   useEffect(() => {
//     getMe(dispatchUsers);
//   }, []);

//   useEffect(() => {
//     if (isUserLoggedIn && user?.cartId) {
//       getCartData(dispatchCarts, user.cartId);
//     }
//   }, [isUserLoggedIn, user?.cartId]);

//   return (
//     <Context.Provider
//       value={{
//         productsState,
//         dispatchProducts,
//         productState,
//         dispatchProductSingle,
//         usersState,
//         dispatchUsers,
//         cartsState,
//         dispatchCarts,
//         filter,
//         filterProducts,
//         query,
//         setQuery,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// };

// ContextProvider;
