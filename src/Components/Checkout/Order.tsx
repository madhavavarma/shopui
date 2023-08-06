import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";
import { RemoveCircleOutlined } from "@mui/icons-material";
import { IProduct } from "../../models/IProduct";
import { checkoutActions } from "../../store/CheckoutSlice";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import productSlice from "../../store/ProductSlice";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Order = () => {
  var dispatch = useDispatch();

  var cartProducts = useSelector(
    (store: IStoreReducer) => store.checkout.cartList
  );

  const addToCartHandler = (product: IProduct) => {
    dispatch(checkoutActions.addToCart({ product: product }));
  };

  const decrementFromCart = (product: IProduct) => {
    dispatch(checkoutActions.reduceProductQuantity({ product: product }));
  };

  const removeCartItemHandler = (product: IProduct) => {
    dispatch(checkoutActions.removeFromCart({ product: product }));
  };

  const cartProduct = (product: IProduct) => {
    return cartProducts?.find((cartItem) => cartItem.product.id == product.id);
  };

  return (
    <Box sx={{ backgroundColor: "#fff", maxWidth: "500px" }}>
      <Typography variant="h6" gutterBottom borderBottom={"5px solid #f9f9f9"}>
        ORDER SUMMARY
      </Typography>

      <Box>
        {cartProducts.length == 0 && (
          <Box>
            <Button>Your Cart is Empty</Button>
          </Box>
        )}

        {cartProducts.map((cartItem) => (
          <Grid
            container
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Card
              sx={{
                minWidth: 345,
                borderRadius: "0px",
                display: "flex",
                width: "100%",
                border: "none",
                borderBottom: "5px solid #fff",
                boxShadow: "none",
                backgroundColor: "#f7f7f7",
              }}
            >
              <CardMedia
                sx={{
                  width: 100,
                  backgroundSize: "80px 80px",
                }}
                image={cartItem.product.image}
                title={cartItem.product.productName}
              />
              <CardContent sx={{ flexBasis: "100%" }}>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid item xs={6}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        color: "#030303",
                        fontSize: "16px",
                        fontWeight: "normal",
                      }}
                    >
                      {cartItem.product.productName}
                    </Typography>
                  </Grid>

                  <Grid item alignItems={"center"} display="flex" xs={4}>
                    <Button>
                      <RemoveCircleOutlined
                        sx={{ color: "#2db457" }}
                        onClick={(e) => decrementFromCart(cartItem.product)}
                      />
                      <Typography component="span" pl={1} pr={1}>
                        {cartProduct(cartItem.product)?.quantity}
                      </Typography>
                      <AddCircleOutlinedIcon
                        sx={{ color: "#2db457" }}
                        onClick={(e) => addToCartHandler(cartItem.product)}
                      />
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      display="flex"
                      alignItems={"center"}
                      fontSize="1rem"
                    >
                      <CurrencyRupeeIcon sx={{ color: "#2db457" }} />{" "}
                      {cartItem.product.price * cartItem.quantity}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  container
                  alignItems={"space-around"}
                  justifyContent={"space-between"}
                >
                  <Typography
                    display="flex"
                    alignItems={"center"}
                    fontSize="0.9rem"
                  >
                    <BalanceOutlinedIcon sx={{ color: "#2db457" }} />{" "}
                    {cartItem.product.weight}
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Box>

      {/* <Grid
        container
        justifyContent={"flex-start"}
        fontWeight={"bold"}
        fontSize={"1.2em"}
      >
        <Grid item xs={8}>
          Total Amount
        </Grid>
        <Grid item xs={4}>
          <Typography
            display="flex"
            alignItems={"right"}
            justifyContent={"flex-start"}
          >
            <CurrencyRupeeIcon sx={{ color: "#2db457" }} />{" "}
            <Typography component="span" fontSize="1.2rem">
              {cartList
                .map((item) => item.product.price * item.quantity)
                .reduce((a, b) => a + b, 0)}
            </Typography>
          </Typography>
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default Order;
