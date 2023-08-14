import {
  AppBar,
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Icon,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { IStoreReducer } from "../../models/IStoreReducer";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Categoreis } from "../Products/Categories";
import { getCategories, getProducts } from "../../Api/api";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: IStoreReducer) => state.checkout.cartList);
  const loader = useSelector((state: IStoreReducer) => state.layout.loader);

  const logoClickHandler = () => {
    navigate("/");
  };

  const accountClickHandler = () => {
    navigate("/Login");
  };

  const cartClickHandler = () => {
    navigate("/Checkout");
  };

  var checkout = useSelector((store: IStoreReducer) => store.checkout);

  useEffect(() => {
    localStorage.setItem("checkout", JSON.stringify(checkout));
  }, [checkout]);

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
    getCategories(dispatch);
  }, []);

  return (
    <header>
      <aside>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </aside>
      <ElevationScroll>
        <Box>
          <AppBar sx={{ backgroundColor: "#f9f9f9", padding: "0" }}>
            <Toolbar
              sx={{ backgroundColor: "#f9f9f9", padding: "0 !important" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                sx={{ backgroundColor: "#fff", width: "100%" }}
              >
                <Container>
                  <Grid display="flex" pt={1} alignItems="center">
                    <Grid
                      item
                      xs={6}
                      container
                      display={"flex"}
                      alignItems="center"
                      onClick={logoClickHandler}
                      sx={{ position: "relative", left: "-12px" }}
                    >
                      <Avatar
                        alt="Village Ahar"
                        src="./images/valogo.png"
                        sx={{ width: "5.5rem", height: "5.5rem" }}
                        variant="square"
                      />
                      {/* <Typography
                        fontSize={"1.3rem"}
                        fontWeight={"bold"}
                        sx={{ cursor: "pointer", color: "black" }}
                      >
                        Village Ahar
                      </Typography> */}
                    </Grid>
                    <Grid item xs></Grid>
                    <Grid item xs="auto" alignItems="right">
                      <Stack direction="row" spacing={2}>
                        <Typography
                          sx={{ color: "#2db457", fontSize: "1.5rem" }}
                        >
                          Fresh Food to Home <br />
                        </Typography>
                        {/* <Button
                          variant="outlined"
                          onClick={cartClickHandler}
                          startIcon={<AddShoppingCartIcon />}
                        >
                          {cart?.length}
                        </Button> */}
                        {/* <Button
                          variant="outlined"
                          onClick={accountClickHandler}
                        >
                          <Avatar sx={{ width: 24, height: 24 }}></Avatar>
                        </Button> */}
                      </Stack>
                    </Grid>
                  </Grid>
                </Container>
                <Divider />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </ElevationScroll>
      <Box mt={12}></Box>
    </header>
  );
};
