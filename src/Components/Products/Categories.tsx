import { Container, Grid, Link } from "@mui/material";

export const Categoreis = () => {
  return (
    <nav>
      <Grid container pt={2} spacing={4}>
        <Grid item xs="auto">
          <Link
            href="#"
            underline="none"
            variant="button"
            sx={{
              letterSpacing: "1px",
              borderBottom: true ? "3px dashed #2db457" : "",
              paddingBottom: "5px",
              "&:hover": {
                borderBottom: "3px solid #2db457",
              },
            }}
          >
            CASHEWS
          </Link>
        </Grid>
        <Grid item xs="auto">
          <Link
            href="#"
            underline="none"
            variant="button"
            pb={5}
            sx={{
              letterSpacing: "1px",
              borderBottom: false ? "3px solid #2db457" : "",
              paddingBottom: "5px",
              "&:hover": {
                borderBottom: "3px solid #2db457",
              },
            }}
          >
            VEGETABLES
          </Link>
        </Grid>
        <Grid item xs="auto">
          <Link
            href="#"
            underline="none"
            variant="button"
            sx={{
              letterSpacing: "1px",
              borderBottom: false ? "3px solid #2db457" : "",
              paddingBottom: "5px",
              "&:hover": {
                borderBottom: "3px solid #2db457",
              },
            }}
          >
            FRUITS
          </Link>
        </Grid>
      </Grid>
    </nav>
  );
};
