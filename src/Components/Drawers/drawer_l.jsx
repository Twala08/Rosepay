import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

//images
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Rose from '../../Images/Rosey.svg';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Toolbar />
            <Stack direction="row" sx={{ mt: 2, mb: 2, }} >
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: 100, height: 100 }}
                />
            </Stack>
            <Divider />
            <List>
                {['INVOICES', 'DISPUTES', 'PROFILE'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                        sx={{
                            // color: activePage === text ? 'red' : 'inherit',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 0, 0, 0.1)', // light red
                            },
                        }}>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <ReceiptIcon /> : <AccountCircleIcon />} */}
                                {index === 0 ? <ReceiptIcon /> : index === 1 ? <ConnectWithoutContactIcon /> : <AccountCircleIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Box sx={{ marginLeft: '20px', marginTop: '80px' }}>
                <img
                    src={Rose}
                    alt="Logo"
                    style={{ width: '200px', height: '200px' }}
                />
            </Box>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    Lecture Home
                </Typography>
            </Box>
        </Box>
    );
}

// ResponsiveDrawer.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * Remove this when copying and pasting into your project.
//      */
//     window: PropTypes.func,
// };

export default ResponsiveDrawer;