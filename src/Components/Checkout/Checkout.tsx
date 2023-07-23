import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Shipping from "./Shipping";
import Payment from "./Payment";
import Review from "./TotalPrice";
import Order from "./Order";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";
import { checkoutActions } from "../../store/CheckoutSlice";
import { Divider, Grid } from "@mui/material";
import TotalPrice from "./TotalPrice";

const steps = ["Review"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(
    (store: IStoreReducer) => store.checkout.cartList
  );

  const backHandler = () => {
    navigate("/");
  };

  const placeOrderHandler = () => {
    dispatch(checkoutActions.reset());
    navigate("/");
  };

  return (
    <Container sx={{ mb: 4 }}>
      {/* <Typography variant="h2">Checkout</Typography> */}

      <Grid
        container
        display="flex"
        gap={5}
        sx={{ backgroundColor: "#fff", padding: "50px 10px" }}
      >
        <Grid
          item
          flex={1}
          sx={{ backgroundColor: "#fff" }}
          display="flex"
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={5}
        >
          <TotalPrice />

          <Order />
          <Button
            sx={{
              maxWidth: "500px",
              backgroundColor: "#2db457",
              color: "#fff !important",
              padding: "12px",
              "&:hover": {
                color: "#fff !important",
              },
            }}
            onClick={backHandler}
          >
            Add More Itmes
          </Button>
        </Grid>
        <Grid item flex={1} display="flex" flexDirection={"column"} gap={5}>
          <Shipping />
          <Payment />
          <Button
            onClick={placeOrderHandler}
            sx={{
              maxWidth: "500px",
              backgroundColor: "#2db457",
              color: "#fff !important",
              padding: "12px",
              "&:hover": {
                color: "#fff !important",
              },
            }}
          >
            Place Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
