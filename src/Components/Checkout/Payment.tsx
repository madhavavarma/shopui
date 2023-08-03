import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";

export default function Payment() {
  return (
    <Box sx={{ maxWidth: "500px" }}>
      <Typography variant="h6" gutterBottom borderBottom={"5px solid #f9f9f9"}>
        PAYMENT METHOD
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
                control={
                  <Radio
                    sx={{
                      color: "#2db457",
                      "&.Mui-checked": {
                        color: "#2db457",
                      },
                    }}
                  />
                }
                label="UPI Payment on Delivery"
                checked
              />
              {/* <FormControlLabel
                value="pay"
                control={<Radio />}
                label="Pay via UPI/Netbanking/Cards"
                disabled
              /> */}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
