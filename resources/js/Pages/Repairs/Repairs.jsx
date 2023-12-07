import * as React from 'react';
import {useEffect} from 'react';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import RepairsLayout from "@/Pages/Repairs/RepairsLayout.jsx";
import {
    Badge,
    Box,
    Button,
    ButtonGroup,
    Divider,
    IconButton,
    InputBase,
    Pagination,
    Popover,
    Table,
    TableBody,
    Typography,
} from "@mui/material";
import Row from "@/Pages/Repairs/Components/Row.jsx";
import ModalEdit from "@/Pages/Repairs/Components/ModalEdit.jsx";
import ModalAdd from "@/Pages/Repairs/Components/ModalCreate.jsx";
import {repairStore} from "@/shared/store/repairStore.js";
import {Link, router} from "@inertiajs/react";
import queryString from 'query-string';
import Paper from "@mui/material/Paper";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const Repairs = ({repairs, employees, groupWhereOrdered, groupDevices}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const openPopover = Boolean(anchorEl);

    const [openCreateModal, setOpenCreateModal] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [links, setLinks] = React.useState([
        {name: 'All', url: ''},
        {name: 'Need call', url: '?filter[need_call]=1'},
        {name: 'Need fix', url: '?filter[is_fixed]=0&filter[is_ordered_component]=0'},
        {name: 'Need order', url: '?filter[need_order]=1'},
        {name: 'Awaits order', url: '?filter[is_fixed]=0&filter[is_ordered_component]=1&filter[is_picked_up]=0'},
        {name: 'Not pick up', url: '?filter[is_picked_up]=0&filter[is_fixed]=1'},
    ]);

    useEffect(() => {
        const parsed = queryString.parse(location.search);
        if (parsed.search) {
            setSearch(parsed.search);
        }
    }, [location.search]);

    useEffect(() => {
        repairStore.employees = employees;
        repairStore.groupWhereOrdered = groupWhereOrdered || [];
        repairStore.groupDevices = groupDevices || [];
    }, [groupWhereOrdered]);

    useEffect(() => {
        links.map((link, i) => {
            axios.get('/repairs/counter' + link.url).then((response) => {
                setLinks(links => links.map((link, j) => {
                    if (i === j) {
                        link.counter = response.data.total;
                    }
                    return link;
                }));
            });
        });
    }, []);
    const handleCloseCreateModal = () => {
        setOpenCreateModal(false);
    };

    const handleChangePage = (event, value) => {
        const parsed = queryString.parse(location.search);
        parsed.page = value;
        const stringified = queryString.stringify(parsed);
        router.get('/repairs' + '?' + stringified);
    };

    const StyledButton = {
        '&.Mui-disabled': {
            color: 'white',
            backgroundColor: '#719ef8',
        },
    };
    return (
        <RepairsLayout>
            <ModalAdd open={openCreateModal} handleClose={handleCloseCreateModal}/>
            <ModalEdit/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 5,
                mb: 2,
            }}>
                <Box>
                    <Button
                        sx={{
                            p: '10px'
                        }}
                        variant='contained' color='success' onClick={() => setOpenCreateModal(true)}>
                        New repair
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2,
                    }}>
                    <Paper
                        component="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            router.get('/repairs?search=' + search);
                        }}
                        sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
                    >
                        <>

                            <IconButton color="primary" sx={{p: '10px'}}
                                        aria-owns={openPopover ? 'mouse-over-popover' : undefined}
                                        aria-haspopup="true"
                                        onMouseEnter={handlePopoverOpen}
                                        onMouseLeave={handlePopoverClose}
                            >
                                <QuestionMarkIcon/>
                            </IconButton>
                            <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                        </>
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Search ID or customer phone"
                            inputProps={{'aria-label': 'Search ID or customer phone'}}
                            value={search || ''}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <IconButton type="button" sx={{p: '10px'}} aria-label="search"
                                    onClick={() => router.get('/repairs?search=' + search)}
                        >
                            <SearchIcon/>
                        </IconButton>
                        {search && (
                            <>
                                <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                                <IconButton color="primary" sx={{p: '10px'}} aria-label="close"
                                            onClick={() => {
                                                setSearch('');
                                                router.get('/repairs');
                                            }}
                                >
                                    <CloseIcon/>
                                </IconButton>
                            </>
                        )}
                    </Paper>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        {links.map((link, i) => {
                            return (
                                <Badge key={i} color="secondary" badgeContent={link.counter || 0}>
                                    <Button sx={StyledButton} disabled={location.search === link.url}
                                            component={Link} href={'/repairs' + link.url}

                                    >{link.name}</Button>
                                </Badge>
                            );
                        })}
                    </ButtonGroup>
                </Box>

            </Box>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={openPopover}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{p: 1}}>Search ID Example: -325 (first symbol must be -)</Typography>
            </Popover>
            {repairs.data.length > 0 && (
                <>
                    <TableContainer>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell/>
                                    <TableCell/>
                                    <TableCell/>
                                    <TableCell align='center'>Diagnostic</TableCell>
                                    <TableCell align='center'>Ordered</TableCell>
                                    <TableCell align='center'>Fixed</TableCell>
                                    <TableCell align='center'>Called</TableCell>
                                    <TableCell align='center'>Picked up</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {repairs.data.map((repair) => (
                                    <Row key={repair.id} repair={repair} open={open} setOpen={setOpen}/>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {repairs.last_page > 1 && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <Pagination count={repairs.last_page} page={repairs.current_page}
                                        onChange={handleChangePage}
                                        variant="outlined" shape="rounded"/>
                        </Box>
                    )}
                </>
            )}
            {repairs.data.length === 0 && (
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <h2>No data</h2>
                </Box>
            )}
        </RepairsLayout>
    );
}

export default Repairs;
