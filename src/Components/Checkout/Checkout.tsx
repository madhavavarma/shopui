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
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Order from "./Order";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";
import { checkoutActions } from "../../store/CheckoutSlice";
import { Divider } from "@mui/material";

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
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center" mb={4}>
            Checkout
          </Typography>

          {cartItems.length > 0 && (
            <React.Fragment>
              <Order />
              <Divider />
              <AddressForm />
              <Divider />
              <PaymentForm />
              <Divider />
            </React.Fragment>
          )}

          <React.Fragment>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={backHandler} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
              {cartItems.length > 0 && (
                <Button onClick={placeOrderHandler} sx={{ mt: 3, ml: 1 }}>
                  Place order
                </Button>
              )}
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
