import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Categoreis } from "./Categories";
import { IStoreReducer } from "../../models/IStoreReducer";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../store/CheckoutSlice";
import { IProduct } from "../../models/IProduct";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlined from "@mui/icons-material/RemoveCircleOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  var dispatch = useDispatch();
  var navigate = useNavigate();
  var products = useSelector((store: IStoreReducer) => store.product.list);
  var cartProducts = useSelector(
    (store: IStoreReducer) => store.checkout.cartList
  );
  var activeCategory = useSelector(
    (store: IStoreReducer) => store.category.active
  );

  const addToCartHandler = (product: IProduct) => {
    dispatch(checkoutActions.addToCart({ product: product }));
  };

  const incrementQuantity = (product: IProduct) => {
    dispatch(checkoutActions.addToCart({ product: product }));
  };

  const decrementFromCart = (product: IProduct) => {
    dispatch(checkoutActions.decrementFromCart({ product: product }));
  };

  const isProductInCart = (product: IProduct) => {
    return !!cartProduct(product);
  };

  const cartProduct = (product: IProduct) => {
    return cartProducts.find((cartItem) => cartItem.product.id == product.id);
  };

  const onViewClickHandler = (product: IProduct) => {
    navigate("/products/" + product.id);
  };

  return (
    <section className="backgroundf7">
      <Categoreis />
      <Container>
        <Grid container mt={1} pt={6} pb={10}>
          {products
            .filter((product) => product.categories.includes(activeCategory))
            .map((product, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  sx={{
                    opacity: "0.9",
                    "&:hover": {
                      opacity: "1",
                    },
                  }}
                >
                  <Card
                    sx={{
                      minWidth: 345,
                      borderRadius: "0px",
                      border: "1px solid #f7f7f7",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 240, backgroundSize: "200px 200px" }}
                      image={product.image}
                      title={product.name}
                    />
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
                            color: "#030303",
                            fontSize: "19px",
                            fontWeight: "normal",
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          display="flex"
                          alignItems={"center"}
                          fontSize="0.9rem"
                        >
                          <BalanceOutlinedIcon sx={{ color: "#2db457" }} />{" "}
                          {product.weight}
                        </Typography>

                        <Typography
                          display="flex"
                          alignItems={"center"}
                          fontSize="1.1rem"
                        >
                          <CurrencyRupeeIcon sx={{ color: "#2db457" }} />{" "}
                          {product.price}
                        </Typography>
                      </Grid>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mt={1}
                        sx={{ height: "80px" }}
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ padding: "8px 16px" }}>
                      <Grid
                        container
                        alignItems={"space-around"}
                        justifyContent={"space-between"}
                      >
                        <Button
                          size="small"
                          onClick={(e) => onViewClickHandler(product)}
                        >
                          View
                        </Button>
                        {isProductInCart(product) && (
                          <Grid item alignItems={"center"} display="flex">
                            <Button>
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
                              sx={{ padding: "6px 15px" }}
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
