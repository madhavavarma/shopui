import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const navigate = useNavigate();

  const loginClickHandler = () => {
    navigate("/Login");
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            maxWidth: "500px",
            maxHeight: "500px",
            width: "100%",
            padding: "2.5rem",
          }}
        >
          <Grid
            container
            alignItems="stretch"
            justifyContent={"center"}
            direction="column"
            spacing={4}
          >
            <Grid item xs={12}>
              <TextField
                label="User Name"
                variant="outlined"
                sx={{ backgroundColor: "#fff" }}
                fullWidth
                color="success"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                variant="outlined"
                sx={{ backgroundColor: "#fff" }}
                fullWidth
                color="success"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Re-enter Password"
                variant="outlined"
                sx={{ backgroundColor: "#fff" }}
                fullWidth
                color="success"
              />
            </Grid>
            <Grid item>
              <Button
                fullWidth
                sx={{
                  padding: "15px",
                  color: "#fff !important",
                  backgroundColor: "#2db457",
                  "&:hover": {
                    color: "#2db457 !important",
                  },
                }}
              >
                Create Account
              </Button>
            </Grid>
            <Grid item container justifyContent={"flex-end"}>
              <Link
                href="#"
                underline="none"
                variant="button"
                onClick={loginClickHandler}
                sx={{
                  letterSpacing: "1px",
                  borderBottom: true ? "3px dashed #2db457" : "",
                  paddingBottom: "5px",
                  "&:hover": {
                    borderBottom: "3px solid #2db457",
                  },
                }}
              >
                Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
