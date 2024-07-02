import * as React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Rose from "../../Images/Rosey.svg";
import "../../styles.css";

function SignIn() {
  const [role, setRole] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();
  const [blinkError, setBlinkError] = useState(false);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      user_id: parseInt(data.get("Employee_ID")),
      password: data.get("password"),
      role: role,
    };

    try {
      const response = await fetch(
        "https://fdvpj7kib0.execute-api.eu-west-1.amazonaws.com/production/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("userDetails", JSON.stringify(result.UserDetails));
        if (result.UserDetails && result.UserDetails.role) {
          const userRole = result.UserDetails.role.toLowerCase();
          const selectedRole = role.toLowerCase();

          if (userRole === selectedRole) {
            Swal.fire({
              icon: "success",
              title: "Login successful!",
              showConfirmButton: false,
              timer: 1500,
            });

            switch (userRole) {
              case "admin":
                navigate("/users");
                break;
              case "lecturer":
                navigate("/lectureh");
                break;
              case "finance":
                navigate("/finance");
                break;
              default:
                console.warn("Unknown role:", userRole);
                break;
            }
          } else {
            setErrorMessage("You are not authorized with the selected role.");
            setBlinkError(true); 
            setTimeout(() => {
              setErrorMessage("");
              setBlinkError(false); 
            }, 5000);
          }
        }
      } else {
        
        setErrorMessage("Invalid user Id or Password");
        setBlinkError(true); 
        setTimeout(() => {
          setErrorMessage("");
          setBlinkError(false); 
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
      setBlinkError(true); 
      setTimeout(() => {
        setErrorMessage("");
        setBlinkError(false); 
      }, 5000);
    }
  };

  // Customizing the theme
  const Rosetheme = createTheme({
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              borderColor: "#D81730",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: "#D81730",
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: "#D81730",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D81730",
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: "#D81730",
            "&.Mui-checked": {
              color: "#D81730",
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "#D81730",
            "&.Mui-checked": {
              color: "#D81730",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#D81730",
            "&:hover": {
              backgroundColor: "#A01523",
            },
            color: "#fff",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#D81730",
            "&:hover": {
              color: "#A01523",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={Rosetheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <img
              src={Rose}
              alt="Logo"
              style={{ width: "150px", height: "150px" }}
            />
          </Box>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={role}
              onChange={handleRoleChange}
            >
              <FormControlLabel
                value="finance"
                control={<Radio />}
                label="FINANCE"
              />
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="ADMIN"
              />
              <FormControlLabel
                value="lecturer"
                control={<Radio />}
                label="LECTURER"
              />
            </RadioGroup>
          </FormControl>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="Employee_ID"
              label="Employee ID"
              name="Employee_ID"
              autoComplete="Employee_ID"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {errorMessage && (
              <Typography
                className={blinkError ? "blink blink-show" : "blink"}
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#D81730",
                }}
                paragraph
              >
                {errorMessage}
              </Typography>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ justifyContent: "center" }}
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
