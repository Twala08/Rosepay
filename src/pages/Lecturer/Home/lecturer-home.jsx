import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "../../../Components/Drawers/drawer_l";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Paper } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import NearMeDisabledIcon from "@mui/icons-material/NearMeDisabled";
import UserMenuButton from "../../../Components/UserMenuButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//Routing
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const DrawerContainer = styled(Box)(({ theme }) => ({
  width: 360,
}));

const ContentContainer = styled(Box)(({ theme, open }) => ({
  display: "flex",
  flexGrow: 1,
  marginTop: 30,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: open ? 0 : -130,
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

  const navigate = useNavigate();
  const [currentInvoiceIndex, setCurrentInvoiceIndex] = useState(0);
  const [invoices, setInvoices] = useState([]);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const id = userDetails.user_id;

  useEffect(() => {
    fetch(
      `https://cn6gihz1g2.execute-api.eu-west-1.amazonaws.com/production/user_invoice?user_id=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched invoice:", data);
        setInvoices(data);
      })
      .catch((error) => console.error("Error fetching invoice:", error));
  }, []);

  const handleNextInvoice = () => {
    if (currentInvoiceIndex < invoices.length - 1) {
      setCurrentInvoiceIndex(currentInvoiceIndex + 1);
    }
  };

  const handlePreviousInvoice = () => {
    if (currentInvoiceIndex > 0) {
      setCurrentInvoiceIndex(currentInvoiceIndex - 1);
    }
  };

  const currentInvoice = invoices[currentInvoiceIndex] || {};

  useEffect(() => {
    if (
      !userDetails ||
      (userDetails.role !== "lecturer" && userDetails.role !== "Lecturer")
    ) {
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
          <Drawer open={open} toggleDrawer={toggleDrawer} />{" "}
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
                mt: 1,
                ml: 15,
                mr: 15,
              }}
            >
              <Paper
                sx={{
                  p: 2,
                  marginTop: "50px",
                  width: "100%",
                }}
              >
                <Typography paragraph sx={{ fontWeight: "bold" }}>
                  Invoice: {currentInvoice.invoice_id}
                </Typography>
                <Toolbar />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#D81730",
                  }}
                  paragraph
                >
                  Month: {currentInvoice.generated_date}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#D81730",
                  }}
                  paragraph
                >
                  Lessons worked: {currentInvoice.sessions_worked}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#D81730",
                  }}
                  paragraph
                >
                  Calculated fee: {currentInvoice.amount}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#D81730",
                  }}
                  paragraph
                >
                  Date issued: {currentInvoice.generated_date}
                </Typography>
              </Paper>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <IconButton
                  onClick={handlePreviousInvoice}
                  disabled={currentInvoiceIndex === 0}
                >
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton
                  onClick={handleNextInvoice}
                  disabled={currentInvoiceIndex === invoices.length - 1}
                >
                  <ChevronRightIcon />
                </IconButton>
              </Box>
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
              >
                Approve
              </Button>
              <Link to="/s_disputes">
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
