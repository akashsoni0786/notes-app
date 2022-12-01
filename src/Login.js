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

export default function Login() {
  const contxt = React.useContext(contextname);
  const navigate = useNavigate();

  const [chkmail, setChkEmail] = React.useState("");
  const [chkpass, setChkPass] = React.useState("");

  const loginfunc = () => {
    let done = 0;
    if (chkmail === "" || chkpass === "") {
      alert("All fields are mandetory!");
    } else {
      contxt.user.map((i) => {
        if (i.e_mail === chkmail && i.password === chkpass) {
          done = 1;
        }
      });
    }
    if (done == 0) {
      alert("Invalid credentials");
    } else {
      contxt.setLogin("Logedin");
      alert("Logged in successfully");
      navigate("/notes");
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
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={loginfunc} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setChkEmail(e.target.value);
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
                    setChkPass(e.target.value);
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
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/register");
                  }}
                  variant="body2"
                >
                  Have no account? Register
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
