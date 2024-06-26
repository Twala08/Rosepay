import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '../../../Components/Drawers/drawer_a';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Typography from '@mui/material/Typography';
import RoomPreferencesOutlinedIcon from '@mui/icons-material/RoomPreferencesOutlined';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar, IconButton } from '@mui/material';
import profile from "../../../Images/profile.jpg";
import profile1 from "../../../Images/profile2.jpeg";
import profile3 from "../../../Images/profile3.jpeg";

const defaultTheme = createTheme();

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

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
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
                    LIST OF USERS
                  </Typography>
                </TabList>
              </Box>
            </TabContext>
            {[profile, profile3, profile1].map((profileSrc, index) => (
              <Box
                key={index}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  p: 2, 
                  mt: 3, 
                  ml: "7%", 
                  flexDirection: 'row',
                  borderRadius: "20px",
                  boxShadow: 3,
                  backgroundColor: 'background.paper',
                }}
              >
                <Avatar 
                  alt="Profile Picture" 
                  src={profileSrc} 
                  sx={{ width: 150, height: 150 }} 
                />
                <Box sx={{ ml: 2, display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexGrow: 1 }}>
                  <Typography variant="body2" noWrap sx={{ flexGrow: 1, fontSize: "17px" }}>
                    {index === 0 ? 'A Matenjwa' : index === 1 ? 'G Serino' : 'T Twala'}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" noWrap sx={{ flexGrow: 1, fontSize: "17px" }}>
                    {index === 0 ? 'Lecture' : 'Admin'}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton color="default" aria-label="Settings" sx={{ color: 'black', fontSize: 'large' }}>
                      <RoomPreferencesOutlinedIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <IconButton color="default" aria-label="Mail" sx={{ color: 'black', fontSize: 'large' }}>
                      <EmailSharpIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <IconButton color="default" aria-label="Delete" sx={{ color: 'black', fontSize: 'large' }}>
                      <DeleteOutlineIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            ))}
          </TabsContainer>
        </ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
}
