import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '../../../Components/Drawers/drawer_l';
import TextField from '@mui/material/TextField';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// const defaultTheme = createTheme();
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
  width: 360, // Width of the drawer
}));

const ContentContainer = styled(Box)(({ theme, open }) => ({
  display: 'flex',
  flexGrow: 1,
  marginTop: theme.spacing(10.5), // Add margin top of 30px
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: open ? 0 : -130, // Adjust margin-left based on whether the drawer is open or closed
  width: open ? `calc(100% - 240px)` : '100%',
}));

const TabsContainer = styled(Box)(({ theme }) => ({
  width: '95%',
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

  // useEffect(() => {
  //   // Check if the login token exists
  //   const token = localStorage.getItem('logintoken');
  //   if (!token) {
  //     // Redirect to login if no token found
  //     navigate('/');
  //   }
  // }, [navigate]);

  return (
    <ThemeProvider theme={Rosetheme}>
      <MainContainer>
        <CssBaseline />
        <DrawerContainer>
          <Drawer open={open} toggleDrawer={toggleDrawer} /> {/* Use the previous drawer component */}
        </DrawerContainer>
        <ContentContainer open={open}>
          <TabsContainer>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Typography sx={{ textAlign: 'center',fontWeight: 'bold',color: '#D81730' }} paragraph>
                  DISPUTES
                </Typography>
                </TabList>
              </Box>
            </TabContext>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                mt: 3, // Margin at the top
                ml: 15, // Margin-left 50px (50px / 8 = 6.25)
                mr: 15, // Margin-right 50px (50px / 8 = 6.25)
              }}
            >
              <Paper
                sx={{
                  p: 2,
                  marginTop: '50px',
                  width: '100%',
                }}
              >
                <Toolbar />
                <Typography sx={{ textAlign: 'center',fontWeight: 'bold',color: '#D81730' }}paragraph>
                  Type your dispute here.
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  label="Dispute"
                  multiline
                  rows={6}
                  fullWidth
                />
              </Paper>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 3,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#93AB4F',
                    color: '#FFFFFF',
                    width: '40%',
                    '&:hover': { backgroundColor: '#A01523' },
                  }}
                  endIcon={<SendIcon />}
                // onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </TabsContainer>
        </ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
}