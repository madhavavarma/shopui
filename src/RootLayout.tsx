import { Box, Divider, Grid } from "@mui/material";
import { Header } from "./Components/Layout/Header";
import { Footer } from "./Components/Layout/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

export const RootLayout = () => {
  return (
    <Provider store={store}>
      <Grid container display="flex" minHeight="100%" flexDirection={"column"}>
        <Header />
        <Divider />
        <Box sx={{ flex: "1" }}>
          <Outlet />
        </Box>
      </Grid>
      <Footer />
    </Provider>
  );
};
