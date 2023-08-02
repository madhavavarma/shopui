import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { IStoreReducer } from "../../models/IStoreReducer";
import { useSelector } from "react-redux";
import React from "react";
import { Categoreis } from "../Products/Categories";

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

  const logoClickHandler = () => {
    navigate("/");
  };

  const accountClickHandler = () => {
    navigate("/Login");
  };

  const cartClickHandler = () => {
    navigate("/Checkout");
  };

  return (
    <header>
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
                  <Grid display="flex" pt={2} pb={1} alignItems="center">
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
                        alt="Fresh Cuts"
                        src="./freshCut.jpg"
                        sx={{ width: 40, height: 40 }}
                      />
                      <Typography
                        fontSize={"1.3rem"}
                        fontWeight={"bold"}
                        sx={{ cursor: "pointer", color: "black" }}
                      >
                        Fresh Cuts
                      </Typography>
                    </Grid>
                    <Grid item xs></Grid>
                    <Grid item xs="auto" alignItems="right">
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="outlined"
                          onClick={cartClickHandler}
                          startIcon={<AddShoppingCartIcon />}
                        >
                          {cart.length}
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={accountClickHandler}
                        >
                          <Avatar sx={{ width: 24, height: 24 }}></Avatar>
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Container>
                <Divider />
                <Categoreis />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </ElevationScroll>
      <Box mt={16}></Box>
    </header>
  );
};