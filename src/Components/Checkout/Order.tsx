import {
  Avatar,
  Box,
  Button,
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
  const cartList = useSelector(
    (store: IStoreReducer) => store.checkout.cartList
  );

  var cartProducts = useSelector(
    (store: IStoreReducer) => store.checkout.cartList
  );

  const addToCartHandler = (product: IProduct) => {
    dispatch(checkoutActions.addToCart({ product: product }));
  };

  const decrementFromCart = (product: IProduct) => {
    dispatch(checkoutActions.decrementFromCart({ product: product }));
  };

  const removeCartItemHandler = (product: IProduct) => {
    dispatch(checkoutActions.removeFromCart({ product: product }));
  };

  const cartProduct = (product: IProduct) => {
    return cartProducts.find((cartItem) => cartItem.product.id == product.id);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>

      {cartList.map((cartItem) => (
        <Grid
          container
          alignItems={"center"}
          p={2}
          sx={{
            justifyContent: "space-between",
            border: "1px dashed #f7f7f7 ",
            backgroundColor: "#f9f9f9",
          }}
          mt={0.4}
          mb={0.4}
        >
          <Grid
            item
            xs={12}
            sm={12}
            container
            display="flex"
            gap={2}
            alignItems={"center"}
            mb={1}
          >
            <img
              alt={cartItem.product.name}
              src={cartItem.product.image}
              height="60px"
            />
            <Typography
              display="flex"
              flexDirection={"column"}
              gap={1}
              alignItems={"space-around"}
            >
              {cartItem.product.name}
              <DeleteOutlinedIcon
                sx={{ color: "#2db457" }}
                onClick={(e) => removeCartItemHandler(cartItem.product)}
              />{" "}
            </Typography>
          </Grid>

          <Grid item xs={4} sm={4}>
            <Grid item alignItems={"center"} display="flex">
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
          </Grid>
          <Grid item xs={4} sm={4}>
            <Typography display="flex" alignItems={"center"}>
              <BalanceOutlinedIcon sx={{ color: "#2db457" }} />{" "}
              <Typography component="span" fontSize="0.8rem">
                {cartItem.product.weight}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Typography
              display="flex"
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <CurrencyRupeeIcon sx={{ color: "#2db457" }} />{" "}
              <Typography component="span" fontSize="0.9rem">
                {cartItem.product.price *
                  cartProduct(cartItem.product)?.quantity!}
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      ))}

      <Grid
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
      </Grid>
    </Box>
  );
};

export default Order;
