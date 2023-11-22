import {useEffect} from 'react';
import GuestLayout from '@/Components/Layouts/GuestLayout';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";

export default function Login({status, canResetPassword}) {

    const {flash} = usePage().props
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: true,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in"/>

            <form onSubmit={submit}>
                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    padding: 3,
                    width: '400px',
                    backgroundColor: '#f5f5f5',
                }}>
                    {flash.message && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: 'red',
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                            }}
                        >
                            {flash.message}
                        </Box>
                    )}
                    <div>

                        <TextField
                            fullWidth
                            error={!!errors.email}
                            helperText={!!errors.email && errors.email}
                            isFocused={true}
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

                    <div className="mt-4">
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

                    <div>
                        <FormControlLabel control={<Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />} label="Remember me"/>

                    </div>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        {canResetPassword && (
                            <Link
                                href={route('register')}
                            >
                                Register
                            </Link>
                        )}

                        <Button type='submit' variant="contained" disabled={processing}>
                            Log in
                        </Button>
                    </Box>
                </Paper>
            </form>
        </GuestLayout>
    );
}
