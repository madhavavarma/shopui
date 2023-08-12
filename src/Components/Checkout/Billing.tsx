import { Box, Grid, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";

export default function Billing() {
  var cartProducts = useSelector(
    (store: IStoreReducer) => store.checkout.cartList
  );

  const orderAmount = cartProducts
    .map((cartProd) => cartProd.product.price * cartProd.quantity)
    .reduce((partialSum, a) => partialSum + a, 0);

  return (
    <Box display="flex" flexDirection="column" sx={{ maxWidth: "500px" }}>
      <Typography
        variant="h6"
        mb={4}
        gutterBottom
        borderBottom={"5px solid #f9f9f9"}
      >
        BILLING | Total Amount:
        <Typography component={"span"} fontSize={"1.2rem"} color={"#ff3f40"}>
          &#x20B9;{orderAmount}
        </Typography>
      </Typography>
      <Grid container sx={{ paddingLeft: "10px" }}>
        <Grid
          item
          container
          display={"flex"}
          spacing={1}
          sx={{
            backgroundColor: "#f7f7f7",
            padding: "20px",
            border: "2px dashed #2db457",
          }}
        >
          <Grid item xs={6}>
            <Typography variant="h6">ORDER PRICE</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography display={"flex"}>
              <CurrencyRupeeIcon sx={{ color: "#2db457" }} />
              {orderAmount}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">SHIPPING</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography display={"flex"}>
              <CurrencyRupeeIcon sx={{ color: "#2db457" }} />
              {0}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">TOTAL AMOUNT</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography display={"flex"}>
              <CurrencyRupeeIcon sx={{ color: "#2db457" }} />
              {orderAmount}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
