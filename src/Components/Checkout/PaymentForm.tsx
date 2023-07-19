import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom pt={6}>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Cash on Delivery"
                checked
              />
              <FormControlLabel
                value="pay"
                control={<Radio />}
                label="Pay via UPI/Netbanking/Cards"
                disabled
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
