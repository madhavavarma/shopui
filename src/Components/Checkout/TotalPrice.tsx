import * as React from "react";

import Order from "./Order";
import Shipping from "./Shipping";
import Payment from "./Payment";
import { Box, Grid, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function TotalPrice() {
  return (
    <Box display="flex" flexDirection="column" sx={{ maxWidth: "500px" }}>
      <Typography
        variant="h6"
        mb={4}
        gutterBottom
        borderBottom={"5px solid #f9f9f9"}
      >
        PRICING
      </Typography>
      <Grid container sx={{ paddingLeft: "10px" }}>
        <Grid
          item
          container
          display={"flex"}
          spacing={1}
          sx={{
            backgroundColor: "#f7f7f7",
            padding: "20px",
            border: "2px dashed #2db457",
          }}
        >
          <Grid item xs={6}>
            <Typography variant="h6">ORDER PRICE</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography display={"flex"}>
              <CurrencyRupeeIcon sx={{ color: "#2db457" }} />
              900
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">SHIPPING CHARGES</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography display={"flex"}>
              <CurrencyRupeeIcon sx={{ color: "#2db457" }} />
              50
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">TOTAL AMOUNT</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography display={"flex"}>
              <CurrencyRupeeIcon sx={{ color: "#2db457" }} />
              950
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
