#  HauteCouture Online Boutique  Overview


### Client-Side (Frontend) Overview

- **Framework**: The client-side is built using React, a popular JavaScript library for building user interfaces.
 
- **Styling**: Sass is used for styling, allowing more complex stylesheets with variables, nesting, and mixins.


- **Structure**:
  - **Components**: Organized into subdirectories for different functionalities. For instance, `products` for displaying product items, `user` for user authentication components, and `cart` for shopping cart components.

  - **API Calls**: Separate JavaScript files (`cartsApiCalls.js`, `productApiCalls.js`, `usersApiCalls.js`) are dedicated to handling API requests to the server.

  - **Assets**: Contains images and other static files used in the application.

  - **Styling (SCSS and mantine UI)**: The `scss` directory contains Sass files, including partials for modular styling.
  - It is also using the mantine UI mostly for the responsiveness.

  - **Routing**: Utilizes React Router for managing navigation within the application.

  - **State Management**: The project is using React's context API and useReducer hook.





### Server-Side (Backend) Overview

- **Framework**: Built on Node.js using Express, and flexible Node.js web application framework.

- **Database**: Uses MongoDB, a NoSQL database, with Mongoose as an ODM (Object Data Modeling) library to manage relationships between data and provide schema validation.

- **API Endpoints**:
  - **Products Endpoint**: Handles operations related to products like fetching all products or a specific record.
  - **Users Endpoint**: Manages user data, including authentication (signup and login) and user details retrieval.
  - **Cart Endpoint**: Deals with shopping cart operations, such as adding items to the cart, updating them, and retrieving cart details.
  
- **Models**: Defines the data structure for `Product`, `User`, and `Cart` using Mongoose schemas.

- **Middleware**: Includes error handling and possibly other middleware for tasks like request logging, request body parsing, etc.






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





