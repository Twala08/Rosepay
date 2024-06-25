import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Rose from '../../Images/Rosey.svg';

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
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            Employee_ID: data.get('Employee_ID'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={Rosetheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box >
                        <img
                            src={Rose}
                            alt="Logo"
                            style={{ width: '150px', height: '150px' }}
                        />
                    </Box>
                    {/* <Typography component="h1" variant="h5">
                        Sign in
                    </Typography> */}
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="FINANCE" />
                            <FormControlLabel value="male" control={<Radio />} label="ADMIN" />
                            <FormControlLabel value="other" control={<Radio />} label="LECTURER" />
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
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container >
                            <Grid item xs>
                                <Link href="#" variant="body2"
                                sx={{ justifyContent: 'center' }}
                                >
                                    Forgot password?
                                </Link>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}