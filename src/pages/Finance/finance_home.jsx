import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '../../Components/Drawers/drawer_a';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import NearMeDisabledIcon from '@mui/icons-material/NearMeDisabled';

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
    <ThemeProvider theme={defaultTheme}>
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
                  FINANCE DASHBOARD
                </Typography>
                </TabList>
              </Box>

            </TabContext>
            
    
          </TabsContainer>
        </ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
}
