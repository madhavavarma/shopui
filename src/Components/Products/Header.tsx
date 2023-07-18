import { Avatar, Button, Container, Grid, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Header = () => {
  return (
    <header>
      <Container>
        <Grid container pt={2} pb={1} alignItems="center">
          <Grid item xs={4} container alignItems="center">
            <Avatar
              alt="Fresh Cuts"
              src="./freshCut.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <h2>Fresh Cuts</h2>
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs="auto" alignItems="right">
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
                0
              </Button>
              <Button variant="outlined">
                <Avatar sx={{ width: 24, height: 24 }}></Avatar>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
