import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/");
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid
        item
        xs={3}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        p={4}
      >
        <p>
          Thank you for placing your order with us. Your order will be delivered
          on time.
        </p>

        <p>For any queries contact/watsapp to 9885015203</p>

        <Button
          sx={{
            maxWidth: "600px",
            backgroundColor: "#2db457",
            color: "#fff !important",
            padding: "12px",
            opacity: 0.8,
            "&:hover": {
              backgroundColor: "#2db457",
              color: "#fff !important",
              opacity: 1,
            },
          }}
          onClick={backHandler}
        >
          Go to Shop.
        </Button>
      </Grid>
    </Grid>
  );
}

export default ThankYou;
