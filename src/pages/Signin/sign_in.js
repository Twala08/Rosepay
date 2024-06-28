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
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2'; // Import SweetAlert

function SignIn() {
    const [role, setRole] = React.useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const payload = {
            user_id: parseInt(data.get('Employee_ID')), // Convert to integer
            password: data.get('password'),
            role: role,
        };

        try {
            const response = await fetch('https://fdvpj7kib0.execute-api.eu-west-1.amazonaws.com/production/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const result = await response.json();

            if (response.ok) {
                // Successful login
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful!',
                    showConfirmButton: false,
                    timer: 1500
                });

                // Handle redirection based on role if UserDetails is defined
                if (result.UserDetails && result.UserDetails.role) {
                    const userRole = result.UserDetails.role.toLowerCase();
                    const selectedRole = role.toLowerCase();

                    if (userRole === selectedRole) {
                        switch (userRole) {
                            case 'admin':
                                navigate('/users');
                                break;
                            case 'lecturer':
                                navigate('/lectureh');
                                break;
                            case 'finance':
                                navigate('/finance');
                                break;
                            default:
                                console.warn('Unknown role:', userRole);
                                break;
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Unauthorized',
                            text: 'You are not authorized with the selected role.',
                        });
                    }
                }
            } else {
                // Error handling
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                    text: 'Invalid credentials',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: 'Something went wrong. Please try again later.',
            });
        }
    };

    const Rosetheme = createTheme({
        // Your theme customization
    });

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
                    <Box>
                        <img
                            src={Rose}
                            alt="Logo"
                            style={{ width: '150px', height: '150px' }}
                        />
                    </Box>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={role}
                            onChange={handleRoleChange}
                        >
                            <FormControlLabel value="finance" control={<Radio />} label="FINANCE" />
                            <FormControlLabel value="admin" control={<Radio />} label="ADMIN" />
                            <FormControlLabel value="lecturer" control={<Radio />} label="LECTURER" />
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
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" sx={{ justifyContent: 'center' }}>
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignIn;
