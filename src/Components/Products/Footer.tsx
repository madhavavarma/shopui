import { Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container mt={4} mb={4} justifyContent={"center"}>
          <Typography>@2023 All rights reserved</Typography>
        </Grid>
      </Container>
    </footer>
  );
};
