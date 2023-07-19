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
          sx={{ justifyContent: "space-between" }}
          mt={4}
          mb={4}
        >
          {/* <Grid item xs={1}>
            <DeleteOutlinedIcon
              sx={{ color: "#2db457" }}
              onClick={(e) => removeCartItemHandler(cartItem.product)}
            />
          </Grid> */}
          <Grid item xs={5}>
            <img
              alt={cartItem.product.name}
              src={cartItem.product.image}
              height="40px"
            />
            <Typography>{cartItem.product.name}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{cartItem.product.weight}</Typography>
          </Grid>

          <Grid item xs={3}>
            <Button>
              <Grid item alignItems={"center"} display="flex">
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
              </Grid>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Typography align="right">
              {cartItem.product.price *
                cartProduct(cartItem.product)?.quantity!}
            </Typography>
          </Grid>
        </Grid>
      ))}

      <Grid
        container
        justifyContent={"flex-end"}
        fontWeight={"bold"}
        fontSize={"1.2em"}
      >
        <Grid item xs={8}>
          Total Amount
        </Grid>
        <Grid item xs={4} textAlign={"right"}>
          {cartList
            .map((item) => item.product.price * item.quantity)
            .reduce((a, b) => a + b, 0)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Order;
