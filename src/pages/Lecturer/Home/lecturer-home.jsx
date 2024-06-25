import React from 'react';
import Drawer from '../../../Components/Drawers/drawer_l';
import { Paper, Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import NearMeDisabledIcon from '@mui/icons-material/NearMeDisabled';

//Routing
import { Link } from 'react-router-dom';

function Lecturer() {
  const drawerWidth = 240;
  return (
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
            Lecture Home
          </Typography>
          <Toolbar />
          <Typography paragraph>
            Month: 
          </Typography>
          <Typography paragraph>
            Lessons worked:
          </Typography>
          <Typography paragraph>
            Calculated fee:
          </Typography>
          <Typography paragraph>
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
        <Link to='disputes'>
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
    </Box>
  );
}

export default Lecturer;
