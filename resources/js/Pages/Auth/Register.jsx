import {useEffect} from 'react';
import GuestLayout from '@/Components/Layouts/GuestLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import Paper from "@mui/material/Paper";
import {Box, Button, TextField} from "@mui/material";

export default function Register() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register"/>

            <form onSubmit={submit}>
                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    padding: 3,
                    width: '400px',
                }}>
                    <div>
                        <TextField
                            fullWidth
                            error={!!errors.name}
                            helperText={!!errors.name && errors.name}
                            isFocused={true}
                            value={data.name}
                            autoComplete="name"
                            id="name"
                            type="text"
                            name="name"
                            label="Name"
                            variant="outlined"
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            error={!!errors.email}
                            helperText={!!errors.email && errors.email}
                            value={data.email}
                            autoComplete="username"
                            id="email"
                            type="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            variant="outlined"
                            error={!!errors.password}
                            helperText={!!errors.password && errors.password}
                            value={data.password}
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <TextField
                            fullWidth
                            variant="outlined"
                            error={!!errors.password_confirmation}
                            helperText={!!errors.password_confirmation && errors.password_confirmation}
                            value={data.password_confirmation}
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            label="Confirm Password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                    </div>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <Button type='submit' variant="contained" disabled={processing}>
                            Register
                        </Button>
                    </Box>
                </Paper>
            </form>
        </GuestLayout>
    );
}
