import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { contextname } from "./Context";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

export default function SignUp() {
  const contxt = React.useContext(contextname);
  const navigate = useNavigate();
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [mail, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const signupfunc = () => {
    if (fname === "" || lname === "" || mail === "" || pass === "") {
      alert("All fields are mandetory!");
    } else {
      const users = {
        f_name: fname,
        l_name: lname,
        e_mail: mail,
        password: pass,
      };
      contxt.setUser([...contxt.user, users]);
      alert("Account Created successfully!");
      setFname("");
      setLname("");
      setEmail("");
      setPass("");
      navigate("/");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "white",
            padding: "40px",
            marginTop: 8,
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/889/889648.png"
            style={{ width: "40px" }}
          />

          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={signupfunc} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/");
                  }}
                  variant="body2"
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
