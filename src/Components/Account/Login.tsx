import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  var navigate = useNavigate();

  const createAccountHandler = () => {
    navigate("/create");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Reset error states
    setEmailError(false);
    setPasswordError(false);

    // Validate fields
    if (!email) {
      setEmailError(true);
      return;
    }

    if (!password) {
      setPasswordError(true);
      return;
    }

    // Implement your login logic here (e.g., API call, authentication)
    console.log("Login submitted:", { email, password });
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
              <FormControl fullWidth margin="normal" error={emailError}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && (
                  <FormHelperText>Email is required</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth margin="normal" error={passwordError}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {passwordError && (
                  <FormHelperText>Password is required</FormHelperText>
                )}
              </FormControl>
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
                onClick={handleSubmit}
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
