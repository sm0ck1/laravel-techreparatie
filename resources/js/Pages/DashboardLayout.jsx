import React from 'react';
import {Head, Link, router, usePage} from "@inertiajs/react";
import {AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
// import HeaderMenu from "@/Pages/Components/HeaderMenu.jsx";

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
            key: 'dashboard',
            label: `Dashboard`,
        },
        {
            key: 'repairs.index',
            label: "Repairs"
        },
        {
            key: 3,
            label: "Employees"
        },
        {
            key: 4,
            label: "Settings"
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
                        <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

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
                        <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page.key}
                                    disabled={route().current() === page.key}
                                    onClick={() => handleCloseNavMenu(page.key)}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page.label}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting.key} onClick={() => handleCloseNavMenu(setting.key)}>
                                        <Typography textAlign="center">{setting.label}</Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem key='logout' onClick={logout}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
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
