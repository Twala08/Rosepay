import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "../../../Components/Drawers/drawer_a";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Paper } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import NearMeDisabledIcon from "@mui/icons-material/NearMeDisabled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//Routing
import { Link } from "react-router-dom";

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
  display: "flex",
}));

const DrawerContainer = styled(Box)(({ theme }) => ({
  width: 360, // Width of the drawer
}));

const ContentContainer = styled(Box)(({ theme, open }) => ({
  display: "flex",
  flexGrow: 1,
  marginTop: theme.spacing(10.5), // Add margin top of 30px
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: open ? 0 : -130, // Adjust margin-left based on whether the drawer is open or closed
  width: open ? `calc(100% - 240px)` : "100%",
}));

const TabsContainer = styled(Box)(({ theme }) => ({
  width: "95%",
}));

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [value, setValue] = React.useState("1");

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

  const [currentInvoiceIndex, setCurrentInvoiceIndex] = useState(0);

  const disputeMessages = [
    {
      message:
        "Invoice #001 dated June 25, 2024, appears to have incorrect charges. Upon reviewing our records, we noticed discrepancies in the billed amount for services rendered during this period.",
      date: "31/07/2024",
    },
    {
      message:
        "Regarding invoice #002 issued on July 15, 2024, there seems to be a significant discrepancy in the number of lessons worked as compared to our documented records. We believe there might be an error in the calculation of fees.",
      date: "31/06/2024",
    },
    {
      message:
        "We received invoice #003 for services rendered in August 2024, but it shows an overcharge in the calculated fee. According to our agreement, the fee should reflect the actual hours worked, which does not align with the invoice details provided.",
      date: "31/09/2024",
    },
    {
      message:
        "Upon reviewing invoice #004 dated July 15, 2024, we noticed discrepancies in the services billed. The invoice does not accurately reflect the terms agreed upon for the services provided, leading to confusion regarding the total amount due.",
      date: "31/12/2024",
    },
  ];

  const handleNextInvoice = () => {
    setCurrentInvoiceIndex((prevIndex) =>
      prevIndex === disputeMessages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevInvoice = () => {
    setCurrentInvoiceIndex((prevIndex) =>
      prevIndex === 0 ? disputeMessages.length - 1 : prevIndex - 1
    );
  };

  const currentInvoice = disputeMessages[currentInvoiceIndex];
  const isSmallScreen = useMediaQuery('(max-width:1110px)');

  return (
    <ThemeProvider theme={Rosetheme}>
      <MainContainer>
        <CssBaseline />
        <DrawerContainer>
          <Drawer open={open} toggleDrawer={toggleDrawer} />{" "}
          {/* Use the previous drawer component */}
        </DrawerContainer>
        <ContentContainer open={open}>
          <TabsContainer>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#D81730",
                    }}
                    paragraph
                  >
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
                mt: 1,
                ml: 15,
                mr: 15,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 5,
                }}
              >
                <ChevronLeftIcon
                  style={{ fontSize: "50px", cursor: "pointer" }}
                  onClick={handlePrevInvoice}
                />
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: "white",
                    borderRadius: "25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "280px",
                    position: "relative",
                    width: "100%",
                    mx: 3,
                    mt: "50px",
                  }}
                >
                  <Typography
                    paragraph
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      margin: 2,
                      // mt: "1%",
                    }}
                  >
                    {currentInvoice.message}
                  </Typography>
                </Paper>
                <ChevronRightIcon
                  style={{ fontSize: "50px", cursor: "pointer" }}
                  onClick={handleNextInvoice}
                />
              </Box>
            </Box>

            <Box>
              {" "}
              <div style={{ textAlign: 'center' }}>
      <Typography variant="body1">
        DATE SUBMITTED: {currentInvoice.date}
      </Typography>
    </div>

    <Box>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
  <Typography variant="body1" style={{ marginRight: '0px' }}>
    RESOLUTION STATUS:
  </Typography>
  <FormControl component="fieldset" sx={{ marginLeft: '20px' }}>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      sx={{ gap: isSmallScreen ? '0' : '4px' }}
    >
      <FormControlLabel
        value="pending"
        control={<Radio />}
        label="Pending"
        sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
        labelPlacement="start"
      />
      <FormControlLabel
        value="resolved"
        control={<Radio />}
        label="Resolved"
        sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
        labelPlacement="start"
      />
    </RadioGroup>
  </FormControl>
</div>
<IndicatorContainer sx={{ mt: "3%" }}>
                {[0, 1, 2, 3].map((index) => (
                  <Indicator
                    key={index}
                    active={index === currentInvoiceIndex % 4}
                    onClick={() => setCurrentInvoiceIndex((currentInvoiceIndex - (currentInvoiceIndex % 4)) + index)}
                  />
                ))}
              </IndicatorContainer>


</Box>



            </Box>
          </TabsContainer>
        </ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
}
