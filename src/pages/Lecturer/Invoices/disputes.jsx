import React from 'react';
import Drawer from '../../../Components/Drawers/drawer_l';
import { Paper, Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//Routing
import { Link } from 'react-router-dom';

// Customizing the theme
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


function Disputes() {
  const drawerWidth = 240;
  return (
    <ThemeProvider theme={Rosetheme}>
    <Box sx={{ display: 'flex' }}>
      <Drawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 3, // Margin at the top
          ml: 15, // Margin-left 50px (50px / 8 = 6.25)
          mr: 15, // Margin-right 50px (50px / 8 = 6.25)
          width: { sm: `calc(100% - ${drawerWidth}px - 100px)` }, // Adjust width to account for the left and right margins
        }}
      >
        <Paper
          sx={{
            p: 2,
            marginTop: "50px",
            width:"100%"
          }}
        >
          <Toolbar />
          <Typography paragraph>
            Type your dispute here.
          </Typography>
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={6}
        />
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
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default Disputes;
