import { Box, Divider, Grid } from "@mui/material";
import { Header } from "./Components/Layout/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Footer from "./Components/Layout/Footer";

export const RootLayout = () => {
  return (
    <Provider store={store}>
      <Grid display="flex" minHeight="100%" flexDirection={"column"}>
        <Header />
        <Box sx={{ flex: "1" }}>
          <Outlet />
        </Box>
      </Grid>
      <Footer />
    </Provider>
  );
};
