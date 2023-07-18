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

export const Products = () => {
  return (
    <section>
      <Container>
        <Grid container mt={1} spacing={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x, index) => {
            return (
              <Grid key={index} item>
                <Card sx={{ minWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 180 }}
                    image="./cashew.jpg"
                    title="green iguana"
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
                      Cashew - 560/kg
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cashews are great source of protein
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid
                      container
                      alignItems={"space-around"}
                      justifyContent={"space-between"}
                    >
                      <Button size="small">View</Button>
                      <Button size="small">- 1 +</Button>
                      <Button
                        variant="outlined"
                        startIcon={<AddShoppingCartIcon />}
                      ></Button>
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
