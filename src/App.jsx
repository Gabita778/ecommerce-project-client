// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { SnackbarProvider } from "notistack";
// import "./scss/index.scss";
// import Home from "./components/Home.jsx";
// import ProductDetailPage from "./components/products/ProductDetailPage.jsx";
// import Logo from "./components/Logo";
// import Register from "./components/users/Register";
// import Login from "./components/users/Login";
// import ForgotPassword from "./components/users/ForgotPassword.jsx";
// import ResetPassword from "./components/users/ResetPassword";
// import MainProducts from "./components/products/MainPage.jsx";
// import Cart from "./components/cart/Cart.jsx";
// import { Context } from "./store/context/context.js";
// import { useContext } from "react";
// import MainLayout from "./components/MainLayout.jsx";
// import CartCheckout from "./components/cart/CartCheckout.jsx";
// import Terms from "./components/Terms.jsx";
// import ContactTheShop from "./components/ContactTheShop.jsx";
// import Products from "./components/products/PageSearchProducts.jsx";

// const App = () => {
//   const { cartsState } = useContext(Context);

//   return (
//     <BrowserRouter>
//       <SnackbarProvider>
//         <div className="container">
//           <Logo />
//           {cartsState.isOpen && <Cart />}
//           <Routes>
//             <Route element={<MainLayout />}>
//               <Route path="/" element={<Home />} />
//               <Route path="/products/:category" element={<MainProducts />} />
//               <Route path="/product/:id" element={<ProductDetailPage />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/forgot-password" element={<ForgotPassword />} />
//               <Route path="/reset-password" element={<ResetPassword />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/carts/:cartId" element={<CartCheckout />} />
//               <Route path="/terms" element={<Terms />} />
//               <Route path="/contactTheShop" element={<ContactTheShop />} />
//             </Route>
//           </Routes>
//         </div>
//       </SnackbarProvider>
//     </BrowserRouter>
//   );
// };

// export default App;


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import "./scss/index.scss";
import Home from "./components/Home.jsx";
import ProductDetailPage from "./components/products/ProductDetailPage.jsx";
import Logo from "./components/Logo";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import ForgotPassword from "./components/users/ForgotPassword.jsx";
import ResetPassword from "./components/users/ResetPassword";
import MainProducts from "./components/products/MainPage.jsx";
import Cart from "./components/cart/Cart.jsx";
import { Context } from "./store/context/context.js";
import { useContext } from "react";
import MainLayout from "./components/MainLayout.jsx";
import CartCheckout from "./components/cart/CartCheckout.jsx";
import Terms from "./components/Terms.jsx";
import ContactTheShop from "./components/ContactTheShop.jsx";
import Products from "./components/products/PageSearchProducts.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <AppContent />
      </SnackbarProvider>
    </BrowserRouter>
  );
};

const AppContent = () => {
  const { cartsState } = useContext(Context);
  const location = useLocation();
  
 
  let backgroundColorClass = location.pathname === '/' ? 'home-bg' : 'other-bg';

  return (
    <div className={`container ${backgroundColorClass}`}>
      <Logo />
      {cartsState.isOpen && <Cart />}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<MainProducts />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carts/:cartId" element={<CartCheckout />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contactTheShop" element={<ContactTheShop />} />
        </Route>
      </Routes>
    </div>
  );
};

 export default App;