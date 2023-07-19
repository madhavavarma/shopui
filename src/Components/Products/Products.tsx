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

export const Products = () => {
  var dispatch = useDispatch();
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

  return (
    <section>
      <Container>
        <Categoreis />

        <Grid container mt={1} spacing={4}>
          {products
            .filter((product) => product.categories.includes(activeCategory))
            .map((product, index) => {
              return (
                <Grid key={index} item>
                  <Card sx={{ minWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 180 }}
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent>
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
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid
                        container
                        alignItems={"space-around"}
                        justifyContent={"space-between"}
                      >
                        <Button size="small">View</Button>
                        {isProductInCart(product) && (
                          <Button>
                            <Grid item alignItems={"center"} display="flex">
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
                            </Grid>
                          </Button>
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
