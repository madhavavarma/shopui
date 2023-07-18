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

export const Login = () => {
  var navigate = useNavigate();

  const createAccountHandler = () => {
    navigate("/create");
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
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                sx={{ backgroundColor: "#fff" }}
                fullWidth
                color="success"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Password"
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
                Login
              </Button>
            </Grid>
            <Grid item container justifyContent={"space-between"}>
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
                Forgot Password
              </Link>
              <Link
                href="#"
                underline="none"
                variant="button"
                onClick={createAccountHandler}
                sx={{
                  letterSpacing: "1px",
                  borderBottom: true ? "3px dashed #2db457" : "",
                  paddingBottom: "5px",
                  "&:hover": {
                    borderBottom: "3px solid #2db457",
                  },
                }}
              >
                Create an Account
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
