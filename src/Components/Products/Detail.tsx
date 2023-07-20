import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Button,
  Tabs,
  Tab,
  Paper,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";
import { checkoutActions } from "../../store/CheckoutSlice";
import { IProduct } from "../../models/IProduct";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlined from "@mui/icons-material/RemoveCircleOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const products = useSelector((store: IStoreReducer) => store.product.list);

  const product = products.find((p) => p.id == +productId!)!;
  var cartProducts = useSelector(
    (store: IStoreReducer) => store.checkout.cartList
  );

  // Sample specifications data
  const specifications = [
    { label: "Color", value: "Black" },
    { label: "Size", value: "Medium" },
    { label: "Material", value: "Cotton" },
  ];

  // Sample reviews data
  const reviews = [
    { user: "User1", rating: 4, comment: "Great product!" },
    { user: "User2", rating: 5, comment: "Highly recommended!" },
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };

  const addToCartHandler = (product: IProduct) => {
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
    <Container maxWidth="md">
      <Grid container spacing={3} mt={6}>
        <Grid item xs={12} sm={6}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", maxWidth: 300 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Price: ${product.price}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Grid
            container
            alignItems={"space-around"}
            justifyContent={"space-between"}
          >
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
        </Grid>
      </Grid>
      <Box mt={3}>
        <Paper square>
          <Tabs value={selectedTab} onChange={handleTabChange} centered>
            <Tab label="Overview" />
            <Tab label="Specifications" />
            <Tab label="Reviews" />
          </Tabs>
        </Paper>
        <TabPanel value={selectedTab} index={0}>
          <Typography variant="body1">Product Overview</Typography>
          {/* Additional content for the product overview */}
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <Typography variant="h6">Specifications:</Typography>
          <List>
            {specifications.map((spec, index) => (
              <ListItem key={index}>
                <ListItemText primary={spec.label} secondary={spec.value} />
              </ListItem>
            ))}
          </List>
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          <Typography variant="h6">Reviews:</Typography>
          <List>
            {reviews.map((review, index) => (
              <div key={index}>
                <ListItem>
                  <ListItemText
                    primary={review.user}
                    secondary={`Rating: ${review.rating}`}
                  />
                </ListItem>
                <Typography variant="body2">{review.comment}</Typography>
                <Divider />
              </div>
            ))}
          </List>
        </TabPanel>
      </Box>
    </Container>
  );
};

// Custom TabPanel component
function TabPanel(props: any) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default ProductDetail;
