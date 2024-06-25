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
import "../../styles.css"

//images
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Rose from '../../Images/Rosey.svg';

const drawerWidth = 320;

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
            <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center', mt: -2, mb: 4 }}>
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: 150, height: 150 }}
                />
            </Stack>
            <Divider sx={{ display: 'none' }} />
            <List className='lis' sx={{ borderTop: 'none' }}>
                {['USERS', 'CREATE USER', 'INVOICES', 'DISPUTES'].map((text, index, array) => (
                    <ListItem key={text} disablePadding sx={{ marginBottom: '20px' }}>
                        <ListItemButton
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 0, 0, 0.1)', // light red
                                },
                                borderBottom:  '1px solid #ccc', // conditional border
                            }}
                        >
                            <ListItemIcon>
                                {index === 0 ? <ReceiptIcon /> : index === 1 ? <ConnectWithoutContactIcon /> : <AccountCircleIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ display: 'none' }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
                <img
                    src={Rose}
                    alt="Logo"
                    style={{ width: '280px', height: '180px' }}
                />
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
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
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;
