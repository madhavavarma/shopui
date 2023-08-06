import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStoreReducer } from "../../models/IStoreReducer";
import { checkoutActions } from "../../store/CheckoutSlice";
import { Box } from "@mui/material";

export default function Shipping() {
  const dispatch = useDispatch();

  const shipping = useSelector(
    (store: IStoreReducer) => store.checkout.shipping
  );
  const onMoveNext = true;

  const [userName, setUserName] = useState(shipping.userName);
  const [phone, setPhone] = useState(shipping.phone);
  const [address1, setAddress1] = useState(shipping.address1);
  const [address2, setAddress2] = useState(shipping.address2);
  const [city, setCity] = useState(shipping.city);
  const [state, setState] = useState(shipping.state);
  const [zip, setZip] = useState(shipping.zip);
  const [country, setCountry] = useState(shipping.country);

  const setShipping = () => {
    dispatch(
      checkoutActions.setShipping({
        userName,
        phone,
        address1,
        address2,
        city,
        state,
        zip,
        country,
      })
    );
  };

  return (
    <Box sx={{ maxWidth: "500px" }}>
      <Typography variant="h6" gutterBottom borderBottom={"5px solid #f9f9f9"}>
        SHIPPING DETAILS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="userName"
            name="userName"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            error={onMoveNext && userName?.length == 0}
            value={userName}
            color="success"
            onChange={(e) => {
              setUserName(e.target.value);
              setShipping();
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="phone"
            variant="outlined"
            type="number"
            value={phone}
            color="success"
            onChange={(e) => {
              setPhone(e.target.value);
              setShipping();
            }}
            error={onMoveNext && phone.length == 0}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="street address"
            variant="outlined"
            value={address1}
            color="success"
            onChange={(e) => {
              setAddress1(e.target.value);
              setShipping();
            }}
            error={onMoveNext && address1.length == 0}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            value={address2}
            color="success"
            onChange={(e) => {
              setAddress2(e.target.value);
              setShipping();
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={city}
            color="success"
            onChange={(e) => {
              setCity(e.target.value);
              setShipping();
            }}
            error={onMoveNext && city.length == 0}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
            value={state}
            color="success"
            onChange={(e) => {
              setState(e.target.value);
              setShipping();
            }}
            error={onMoveNext && state.length == 0}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            type="number"
            value={zip}
            color="success"
            onChange={(e) => {
              setZip(e.target.value);
              setShipping();
            }}
            error={onMoveNext && zip.length == 0}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
            value={country}
            color="success"
            onChange={(e) => {
              setCountry(e.target.value);
              setShipping();
            }}
            error={onMoveNext && country.length == 0}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                value="yes"
                checked
              />
            }
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </Box>
  );
}
