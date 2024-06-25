import Sidebar from "../../Components/Drawers/drawer_l";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./dmin_home.css";

const Rosetheme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        borderColor: '#D81730',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#D81730',
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#D81730',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#D81730',
                    },
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: '#D81730',
                    '&.Mui-checked': {
                        color: '#D81730',
                    },
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#D81730',
                    '&.Mui-checked': {
                        color: '#D81730',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#D81730',
                    '&:hover': {
                        backgroundColor: '#A01523',
                    },
                    color: '#fff',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#D81730',
                    '&:hover': {
                        color: '#A01523',
                    },
                },
            },
        },
    },
});

const admin_home = () => {
  return (
    <ThemeProvider theme={Rosetheme}>
      <div className="sidebar">
        <Sidebar />
        <div className="homeContent">
          <h1>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{ gap: '100px' , mb: '4%'}} 
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
          </h1>
          <div className="formContainer">
            <TextField
              label="NAME"
              sx={{
                bgcolor: "grey.200"
              }}
            />
            <TextField
              label="SURNAME"
              sx={{
                bgcolor: "grey.200"
              }}
            />
            <TextField
              label="EMPLOYEE ID"
              sx={{
                bgcolor: "grey.200"
              }}
            />
            <TextField
              label="PHONE"
              sx={{
                bgcolor: "grey.200"
              }}
            />
            <Button
              variant="contained"
              className="customButton"
              sx={{ backgroundColor: "#06D001", borderRadius: "25px" }}
            >
              ADD USER
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default admin_home;
