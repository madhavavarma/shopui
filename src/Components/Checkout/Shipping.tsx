import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
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
  const [city, setCity] = useState(shipping.city || "Pithapuram");
  const [state, setState] = useState(shipping.state || "Andhra Pradesh");
  const [zip, setZip] = useState(shipping.zip || "533450");
  const [country, setCountry] = useState(shipping.country || "India");

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

  useEffect(() => {
    setShipping();
  }, [userName, phone, address1]);

  const handlePhoneChange = async function (event: any) {
    await setPhone(event.target.value);
  };

  const handleUserNameChange = async function (event: any) {
    await setUserName(event.target.value);
  };

  const handleAddressChange = async function (event: any) {
    await setAddress1(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: "500px" }}>
      <Typography variant="h6" gutterBottom>
        SHIPPING DETAILS
      </Typography>
      <Grid container spacing={3}>
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
            onChange={(e) => handlePhoneChange(e)}
            error={onMoveNext && phone.length != 10}
          />
        </Grid>
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
            onChange={(e) => handleUserNameChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="Streetaddress"
            variant="outlined"
            value={address1}
            color="success"
            placeholder="House No, Street, Nearby ..."
            onChange={(e) => handleAddressChange(e)}
            error={onMoveNext && address1.length == 0}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
