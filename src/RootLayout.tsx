import { Divider } from "@mui/material";
import { Header } from "./Components/Layout/Header";
import { Footer } from "./Components/Layout/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

export const RootLayout = () => {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <Divider />
        <Outlet />
        <Footer />
      </main>
    </Provider>
  );
};
