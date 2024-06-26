import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '../../Components/Drawers/drawer_a';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

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

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

const DrawerContainer = styled(Box)(({ theme }) => ({
  width: 360,
}));

const ContentContainer = styled(Box)(({ theme, open }) => ({
  display: 'flex',
  flexGrow: 1,
  marginTop: theme.spacing(10.5),
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: open ? 0 : -130,
  width: open ? `calc(100% - 240px)` : '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const TabsContainer = styled(Box)(({ theme }) => ({
  width: '95%',
  textAlign: 'center',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
}));

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate(); // Hook for navigation
  const isSmallScreen = useMediaQuery('(max-width:1110px)');

  return (
    <ThemeProvider theme={Rosetheme}>
      <MainContainer>
        <CssBaseline />
        <DrawerContainer>
          <Drawer open={open} toggleDrawer={toggleDrawer} />
        </DrawerContainer>
        <ContentContainer open={open}>
          <TabsContainer>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#D81730' }} paragraph>
                    CREATE USERS
                  </Typography>
                </TabList>
              </Box>
            </TabContext>

            <FormControl component="fieldset" sx={{ mt: '5%' }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{ gap: isSmallScreen ? '10px' : '80px', mb: '4%' }}
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

            <FormContainer>
              <TextField
                label="NAME"
                sx={{
                  bgcolor: "grey.200",
                  width: '57%', 
                }}
              />
              <TextField
                label="SURNAME"
                sx={{
                  bgcolor: "grey.200",
                  width: '57%'
                }}
              />
              <TextField
                label="EMPLOYEE ID"
                sx={{
                  bgcolor: "grey.200",
                  width: '57%'
                }}
              />
              <TextField
                label="PHONE"
                sx={{
                  bgcolor: "grey.200",
                  width: '57%'
                }}
              />
              <Button
                variant="contained"
                className="customButton"
                sx={{ backgroundColor: "#06D001", borderRadius: "25px", width:"15%", height:"45px" }}
              >
                ADD USER
              </Button>
            </FormContainer>
          </TabsContainer>
        </ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
}
