import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { IStoreReducer } from "../../models/IStoreReducer";
import { useSelector } from "react-redux";

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
              sx={{ cursor: "pointer" }}
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
              <Button variant="outlined" onClick={accountClickHandler}>
                <Avatar sx={{ width: 24, height: 24 }}></Avatar>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </header>
  );
};
