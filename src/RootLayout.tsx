import { Box, Divider, Grid, ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./Components/Layout/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Footer from "./Components/Layout/Footer";
import ScrollToTop from "./Helpers/ScrollToTop";

export const RootLayout = () => {
  const defaultTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Roboto",
      },
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <ScrollToTop>
          <Grid display="flex" minHeight="100%" flexDirection={"column"}>
            <Header />
            <Box sx={{ flex: "1", backgroundColor: "#f7f7f7" }}>
              <Outlet />
            </Box>
          </Grid>
        </ScrollToTop>
        <Footer />
      </Provider>
    </ThemeProvider>
  );
};
