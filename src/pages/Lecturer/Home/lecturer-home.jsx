import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '../../../Components/Drawers/drawer_l';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import NearMeDisabledIcon from '@mui/icons-material/NearMeDisabled';
import UserMenuButton from '../../../Components/UserMenuButton';

//Routing
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

const DrawerContainer = styled(Box)(({ theme }) => ({
  width: 360, // Width of the drawer
}));

const ContentContainer = styled(Box)(({ theme, open }) => ({
  display: 'flex',
  flexGrow: 1,
  marginTop: 30, // Add margin top of 30px
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
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  useEffect(() => {
    if (!userDetails || (userDetails.role !== 'lecturer' && userDetails.role !== 'Lecturer')) {
      navigate("/");
    }
  }, [userDetails, navigate]);

    const handleLogout = () => {
    localStorage.removeItem("userDetails");
    navigate("/");
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <MainContainer>
        <CssBaseline />
        <DrawerContainer>
          <Drawer open={open} toggleDrawer={toggleDrawer} /> {/* Use the previous drawer component */}
        </DrawerContainer>
        <ContentContainer open={open}>
          <TabsContainer>
          <TabContext value="1">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "0.5px solid rgba(0, 0, 0, 0.12)",
                  paddingRight: "1rem",
                  marginTop: 0,
                }}
              >
                <TabList aria-label="lab API tabs example">
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#D81730",
                    }}
                    paragraph
                  >
                    LIST DISPUTES
                  </Typography>
                </TabList>
                {/* Added IconButton with Menu for user options */}
                <UserMenuButton
                  userDetails={userDetails}
                  handleLogout={handleLogout}
                />
              </Box>
            </TabContext>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                mt: 1, // Margin at the top
                ml: 15, // Margin-left 50px (50px / 8 = 6.25)
                mr: 15, // Margin-right 50px (50px / 8 = 6.25)
                // width: { sm: `calc(100% - ${drawerWidth}px - 100px)` }, // Adjust width to account for the left and right margins
              }}
            >
              <Paper
                sx={{
                  p: 2,
                  marginTop: "50px",
                  width: "100%"
                }}
              >
                
                <Typography paragraph sx={{ fontWeight: 'bold' }}>
                  Invoice: #001
                </Typography>
                <Toolbar />
                <Typography sx={{ textAlign: 'center',fontWeight: 'bold',color: '#D81730' }} paragraph>
                  Month:
                </Typography>
                <Typography sx={{ textAlign: 'center',fontWeight: 'bold',color: '#D81730' }} paragraph>
                  Lessons worked:
                </Typography>
                <Typography sx={{ textAlign: 'center',fontWeight: 'bold',color: '#D81730' }} paragraph>
                  Calculated fee:
                </Typography>
                <Typography sx={{ textAlign: 'center',fontWeight: 'bold',color: '#D81730' }} paragraph>
                  Date issued:
                </Typography>
              </Paper>
              {/* <Link style={{ flex: 1, textAlign: "right" }}> */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#93AB4F",
                  color: "#FFFFFF",
                  width: "40%",
                  marginLeft: "80px",
                  marginTop: "20px",
                  "&:hover": { backgroundColor: "#A01523" },
                }}
                endIcon={<SendIcon />}
              // onClick={handleSubmit}
              >

                Approve

              </Button>
              {/* </Link> */}
              <Link to='/s_disputes'>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#D81730",
                    color: "#FFFFFF",
                    width: "40%",
                    marginLeft: "80px",
                    marginTop: "20px",
                    "&:hover": { backgroundColor: "#A01523" },
                  }}
                  endIcon={<NearMeDisabledIcon />}
                // onClick={handleSubmit}
                >

                  Dispute

                </Button>
              </Link>
            </Box>

          </TabsContainer>
        </ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
}
