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

export const Create = () => {
  const navigate = useNavigate();

  const loginClickHandler = () => {
    navigate("/Login");
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [reenterPasswordError, setReenterPasswordError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Reset error states
    setUsernameError(false);
    setEmailError(false);
    setPasswordError(false);
    setReenterPasswordError(false);

    // Validate fields
    if (!username) {
      setUsernameError(true);
      return;
    }

    if (!email) {
      setEmailError(true);
      return;
    }

    if (!password) {
      setPasswordError(true);
      return;
    }

    if (password !== reenterPassword) {
      setReenterPasswordError(true);
      return;
    }

    // Implement your signup logic here (e.g., API call, database insertion)
    console.log("Signup submitted:", { username, email, password });
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
              <FormControl fullWidth margin="normal" error={usernameError}>
                <TextField
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {usernameError && (
                  <FormHelperText>Username is required</FormHelperText>
                )}
              </FormControl>
            </Grid>
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
              <FormControl
                fullWidth
                margin="normal"
                error={reenterPasswordError}
              >
                <TextField
                  label="Re-enter Password"
                  type="password"
                  variant="outlined"
                  value={reenterPassword}
                  onChange={(e) => setReenterPassword(e.target.value)}
                  required
                />
                {reenterPasswordError && (
                  <FormHelperText>Passwords do not match</FormHelperText>
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
