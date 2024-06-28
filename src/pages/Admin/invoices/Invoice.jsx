import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '../../../Components/Drawers/drawer_a';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Paper, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Routing
import { Link } from 'react-router-dom';
import MediaCard from '../../../Components/InvoiceCard';

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

const IndicatorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

const Indicator = styled(Box)(({ theme, active }) => ({
  width: 30,
  height: 30,
  borderRadius: '50%',
  backgroundColor: active ? '#DA2F49' : '#ccc', 
  margin: '0 8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease', 
}));

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [invoices, setInvoices] = useState([]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [currentInvoiceIndex, setCurrentInvoiceIndex] = useState(0);

  useEffect(() => {
    fetch('https://cn6gihz1g2.execute-api.eu-west-1.amazonaws.com/production/invoices')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched invoices:', data.invoices);
        setInvoices(data.invoices);
      })
      .catch(error => console.error('Error fetching invoices:', error));
  }, []);


  const handleNextInvoice = () => {
    setCurrentInvoiceIndex((prevIndex) => (prevIndex === invoices.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevInvoice = () => {
    setCurrentInvoiceIndex((prevIndex) => (prevIndex === 0 ? invoices.length - 1 : prevIndex - 1));
  };

  const currentInvoice = invoices[currentInvoiceIndex];

  return (
    <ThemeProvider theme={defaultTheme}>
      <MainContainer>
        <CssBaseline />
        <DrawerContainer>
          <Drawer open={open} toggleDrawer={toggleDrawer} />
        </DrawerContainer>
        <ContentContainer open={open}>
          <TabsContainer>
            <TabContext value="1">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList aria-label="lab API tabs example">
                  <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#D81730' }} paragraph>
                    INVOICES
                  </Typography>
                </TabList>
              </Box>
            </TabContext>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                mt: 1,
                ml: 15,
                mr: 15,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 5,
                }}
              >
                <ChevronLeftIcon style={{ fontSize: "50px", cursor: 'pointer' }} onClick={handlePrevInvoice} />
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: '#f0f0f0',
                    borderRadius: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '280px',
                    position: 'relative',
                    width: '100%',
                    mx: 3,
                    mt: "50px",
                    color: '#D81730'
                  }}
                >
                  {currentInvoice ? (
                    <>
                      <Typography
                        paragraph
                        sx={{
                          fontWeight: 'bold',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          margin: 2,
                        }}
                      >
                        {currentInvoice.invoice_id}
                      </Typography>
                      <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#D81730', fontSize:"15px" }} paragraph>
                        Month: {currentInvoice.generated_date}
                      </Typography>
                      <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#D81730', fontSize:"15px" }} paragraph>
                        Lessons worked: {currentInvoice.sessions_worked}
                      </Typography>
                      <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#D81730', fontSize:"15px" }} paragraph>
                        Calculated fee: {currentInvoice.Amount}
                      </Typography>
                      {/* <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#D81730', fontSize:"15px" }} paragraph>
                        Date issued: {currentInvoice.sessions_worked}
                      </Typography> */}
                      <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#D81730', fontSize:"15px" }} paragraph>
                        Issued to Employee: {currentInvoice.employee_id}
                      </Typography>
                    </>
                  ) : (
                    <Typography>Loading...</Typography>
                  )}
                </Paper>
                <ChevronRightIcon style={{ fontSize: "50px", cursor: 'pointer' }} onClick={handleNextInvoice} />
              </Box>
              <IndicatorContainer sx={{ mt: "7%" }}>
                {[0, 1, 2, 3].map((index) => (
                  <Indicator
                    key={index}
                    active={index === currentInvoiceIndex % 4}
                    onClick={() => setCurrentInvoiceIndex((currentInvoiceIndex - (currentInvoiceIndex % 4)) + index)}
                  />
                ))}
              </IndicatorContainer>
            </Box>
          </TabsContainer>
        </ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
}

export default Dashboard;
