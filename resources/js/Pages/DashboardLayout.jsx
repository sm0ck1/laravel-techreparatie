import React from 'react';
import {Head, router, usePage} from "@inertiajs/react";
import {AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

const DashboardLayout = ({header, children, submenu = null}) => {
    const {auth} = usePage().props
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (key) => {
        if (route().has(key)) {
            router.visit(route(key))
        }
        setAnchorElNav(null);
    };
    const logout = (key) => {
        router.visit('logout', {
            method: 'post',
        })
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const pages = [

        {
            key: 'repairs.index',
            label: "Repairs"
        },
        {
            key: 'employees.index',
            label: "Employees"
        },
        {
            key: 'profile.edit',
            label: auth.user.name
        },
    ];

    const settings = [
        {
            key: 'profile.edit',
            label: "Profile"
        },
    ];

    return (
        <>
            <Head title={header}/>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                            }}
                        >
                            <img width="100"
                                 src="https://www.techreparatie.nl/wp-content/uploads/2021/02/techreparatie.png"
                                 alt=""/>
                        </Box>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.key} onClick={() => handleCloseNavMenu(page.key)}>
                                        <Typography textAlign="center">{page.label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                width: '100px',
                            }}
                        >
                            <img width="100"
                                 src="https://www.techreparatie.nl/wp-content/uploads/2021/02/techreparatie.png"
                                 alt=""/>
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page.key}
                                    disabled={route().current() === page.key}
                                    onClick={() => handleCloseNavMenu(page.key)}
                                    variant={route().current() === page.key ? 'contained' : 'text'}
                                    sx={{my: 2, color: 'white', display: 'block', '&:disabled': {color: 'white'}}}
                                >
                                    {page.label}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{flexGrow: 0}}>
                            <Button
                                sx={{my: 2, color: 'white', display: 'block', '&:disabled': {color: 'white'}}}
                                onClick={logout}>
                                <LogoutIcon/>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container maxWidth="xl" sx={{
                p: 5,
            }}>
                {children}
            </Container>

        </>
    );
};
export default DashboardLayout;
