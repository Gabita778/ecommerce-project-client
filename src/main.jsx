import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./store/context/ContextProvider.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <MantineProvider>
      <App />
    </MantineProvider>
  </ContextProvider>
);
