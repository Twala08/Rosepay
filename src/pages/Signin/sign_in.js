import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Rose from '../../Images/Rosey.svg';
import P1 from '../../Images/picture2.png';
import P2 from '../../Images/charles-deloye-2RouMSg9Rnw-unsplash.jpg';
import P3 from '../../Images/honey-yanibel-minaya-cruz-laORtJZaieU-unsplash.jpg';
import Paper from '@mui/material/Paper'; // Import the Paper component

import { ThemeProvider, createTheme } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                RoseBank
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

export default function SignIn() {
    const [user, setUser] = React.useState('');
    const [employee, setEmployee] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://fdvpj7kib0.execute-api.eu-west-1.amazonaws.com/production/user', {
            employee: employee,
            password: password,
            userType: user,
        })
        .then(response => {
            if (response.data.allowed) {
                console.log(response.data.token);
                localStorage.setItem('logintoken', response.data.token);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'You are now redirected to the appropriate page.',
                    timer: 1500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    willClose: () => {
                        // Navigate based on the user type
                        switch (user) {
                            case 'LECTURE':
                                navigate('/lectureh');
                                break;
                            case 'FINANCE':
                                navigate('/finance');
                                break;
                            case 'ADMIN':
                                navigate('/users');
                                break;
                            default:
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Unknown User Type',
                                    text: 'Please select a valid user type.',
                                });
                                break;
                        }
                    }
                });
            } 
        })
        .catch(error => {
            console.log(user);
            Swal.fire({
                icon: 'error',
                title: 'Incorrect Password/email',
                text: 'Please provide correct credentials.',
            });
        });
    };
    
    const handleUserChange = (event) => {
        setUser(event.target.value);
    };

    const handleEmployeeChange = (event) => {
        setEmployee(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <ThemeProvider theme={Rosetheme}>
            <CssBaseline />
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            >
                <Carousel
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showArrows={false}
                    showIndicators={false}
                    interval={5000}
                >
                    <div>
                        <img src={P1} alt="Slide 1" />
                    </div>
                    <div>
                        <img src={P2} alt="Slide 2" />
                    </div>
                    <div>
                        <img src={P3} alt="Slide 3" />
                    </div>
                </Carousel>
            </Box>
            <Container component="main" maxWidth="xs" sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Paper elevation={3} sx={{ padding: 3, width: '100%', textAlign: 'center' }}>
                        <Box>
                            <img
                                src={Rose}
                                alt="Logo"
                                style={{ width: '150px', height: '150px' }}
                            />
                        </Box>
                        <FormControl component="fieldset" sx={{ width: '100%' }}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={user}
                                onChange={handleUserChange}
                                sx={{ justifyContent: 'center', marginBottom: 2 }}
                            >
                                <FormControlLabel value="FINANCE" control={<Radio />} label="FINANCE" />
                                <FormControlLabel value="ADMIN" control={<Radio />} label="ADMIN" />
                                <FormControlLabel value="LECTURER" control={<Radio />} label="LECTURER" />
                            </RadioGroup>
                        </FormControl>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Employee_ID"
                                label="Employee ID"
                                name="Employee_ID"
                                autoComplete="Employee_ID"
                                autoFocus
                                value={employee}
                                onChange={handleEmployeeChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Paper>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
