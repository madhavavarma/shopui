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

export default function AddressForm() {
  const dispatch = useDispatch();

  const shipping = useSelector(
    (store: IStoreReducer) => store.checkout.shipping
  );
  const onMoveNext = useSelector(
    (store: IStoreReducer) => store.checkout.onMovingStep
  );

  const [name, setName] = useState(shipping.name);
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
        name: name,
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
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            error={onMoveNext && name.length == 0}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShipping();
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="phone"
            variant="standard"
            type="number"
            value={phone}
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
            variant="standard"
            value={address1}
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
            variant="standard"
            value={address2}
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
            variant="standard"
            value={city}
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
            variant="standard"
            value={state}
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
            variant="standard"
            type="number"
            value={zip}
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
            variant="standard"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setShipping();
            }}
            error={onMoveNext && country.length == 0}
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
