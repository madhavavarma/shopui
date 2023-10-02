import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IStoreReducer } from "../../models/IStoreReducer";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../store/CheckoutSlice";
import { IProduct } from "../../models/IProduct";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlined from "@mui/icons-material/RemoveCircleOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";
import SubCategories from "./SubCategories";
import { Categoreis } from "./Categories";
import React, { useEffect } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Api } from "@mui/icons-material";
import { getProducts } from "../../Api/api";
import productSlice from "../../store/ProductSlice";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Products = () => {
  var dispatch = useDispatch();
  var navigate = useNavigate();
  var products = useSelector((store: IStoreReducer) => store.product.list);

  var cartProducts = useSelector(
    (store: IStoreReducer) => store.checkout.cartList
  );

  const categories = useSelector((store: IStoreReducer) => store.category.list);
  const active = useSelector((store: IStoreReducer) => store.category.active);
  const subActive = useSelector(
    (store: IStoreReducer) => store.category.subActive
  );

  const addToCartHandler = (product: IProduct) => {
    dispatch(checkoutActions.addToCart({ product: product }));
  };

  const incrementQuantity = (product: IProduct) => {
    dispatch(checkoutActions.addToCart({ product: product }));
  };

  const decrementFromCart = (product: IProduct) => {
    dispatch(checkoutActions.reduceProductQuantity({ product: product }));
  };

  const isProductInCart = (product: IProduct) => {
    return !!cartProduct(product);
  };

  const cartProduct = (product: IProduct) => {
    return cartProducts?.find((cartItem) => cartItem.product.id == product.id);
  };

  const onViewClickHandler = (product: IProduct) => {
    navigate("/products/" + product.id);
  };

  const handleSnackbarClick = () => {
    navigate("/checkout");
  };

  const handleproductImageClick = (product: IProduct, index: number) => {
    dispatch(
      productSlice.actions.setProductImage({ id: product.id, index: index })
    );
  };

  const orderAmount = cartProducts
    .map((cartProd) => cartProd.product.price * cartProd.quantity)
    .reduce((partialSum, a) => partialSum + a, 0);

  return (
    <section className="backgroundf7">
      <Snackbar
        open={cartProducts.length > 0}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClick={handleSnackbarClick}
      >
        <Alert
          severity="success"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography component="span">
            {cartProducts.length} item(s) | &#x20B9;{orderAmount}
          </Typography>
          <Typography component="span" ml={4}>
            Checkout
          </Typography>
        </Alert>
      </Snackbar>
      <Categoreis />

      <Container>
        <SubCategories />
        <Grid container pt={4} pb={10} spacing={1}>
          {products &&
            products
              .filter((product) => product.categories?.includes(active))
              .filter(
                (product) =>
                  subActive == -1 || product.subCategories?.includes(subActive)
              )
              .map((product, index) => {
                return (
                  <Grid key={index} item xs={6} sm={6} md={3}>
                    <Card
                      sx={{
                        minWidth: 150,
                        borderRadius: "0px",
                        borderBottom: "1px solid grey",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "100%",
                          height: "150px",
                          backgroundSize: "100% 100%",
                        }}
                        image={product.images[product.selectImage]}
                        title={product.productName}
                      />

                      {/* <Box display="flex" justifyContent={"flex-end"} pr={2}>
                        {product.images.map((image, index) => (
                          <img
                            src={product.images[index]}
                            height={40}
                            width={60}
                            title={product.productName}
                            onClick={() =>
                              handleproductImageClick(product, index)
                            }
                          />
                        ))}
                      </Box> */}
                      <CardContent>
                        <Grid
                          container
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                              color: "#4c4c4c",
                              fontSize: "0.8rem",
                              fontWeight: "900",
                              minHeight: "40px",
                            }}
                          >
                            {product.productName} - {product.weight}
                          </Typography>
                        </Grid>
                        {/* <Typography
                          variant="body2"
                          color="text.secondary"
                          mt={1}
                          sx={{ height: "80px", fontSize: "0.8rem !important" }}
                        >
                          {product.productDescription}
                        </Typography> */}
                      </CardContent>
                      <CardActions sx={{ padding: "8px 16px" }}>
                        <Grid
                          container
                          alignItems={"space-around"}
                          justifyContent={"space-between"}
                        >
                          {/* <Typography
                            display="flex"
                            alignItems={"center"}
                            fontSize="0.8rem"
                            color="#ff3f40"
                          >
                            <BalanceOutlinedIcon sx={{ color: "#2db457" }} />{" "}
                            {product.weight}
                          </Typography> */}
                          <Typography
                            display="flex"
                            alignItems={"center"}
                            fontSize="1rem"
                            color="#ff3f40"
                          >
                            <CurrencyRupeeIcon sx={{ color: "#2db457" }} />{" "}
                            {product.price}
                          </Typography>
                          {/* <Button
                          size="small"
                          onClick={(e) => onViewClickHandler(product)}
                        >
                          View
                        </Button> */}
                          {isProductInCart(product) && (
                            <Grid item alignItems={"center"} display="flex">
                              <Button
                                sx={{
                                  padding: "1px 2px",
                                  fontSize: "0.8rem",
                                }}
                              >
                                <RemoveCircleOutlined
                                  sx={{ color: "#2db457" }}
                                  onClick={(e) => decrementFromCart(product)}
                                />
                                <Typography component="span" pl={1} pr={1}>
                                  {cartProduct(product)?.quantity}
                                </Typography>
                                <AddCircleOutlinedIcon
                                  sx={{ color: "#2db457" }}
                                  onClick={(e) => addToCartHandler(product)}
                                />
                              </Button>
                            </Grid>
                          )}
                          {!isProductInCart(product) && (
                            <Grid item>
                              <Button
                                variant="outlined"
                                onClick={(e) => addToCartHandler(product)}
                                startIcon={<AddShoppingCartIcon />}
                                sx={{
                                  padding: "4px 8px",
                                  backgroundColor: "#2db457",
                                  color: "#fff !important",
                                  border: "none !important",
                                  fontSize: "0.7rem",
                                  "&:hover": {
                                    backgroundColor: "#2db457",
                                    color: "#fff !important",
                                  },
                                }}
                              >
                                ADD
                              </Button>
                            </Grid>
                          )}
                        </Grid>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
        </Grid>
      </Container>
    </section>
  );
};
