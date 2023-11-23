import * as React from 'react';
import {useEffect} from 'react';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import RepairsLayout from "@/Pages/Repairs/RepairsLayout.jsx";
import {Badge, Box, Button, ButtonGroup, Table, TableBody, TextField,} from "@mui/material";
import Row from "@/Pages/Repairs/Components/Row.jsx";
import ModalEdit from "@/Pages/Repairs/Components/ModalEdit.jsx";
import ModalAdd from "@/Pages/Repairs/Components/ModalCreate.jsx";
import {repairStore} from "@/shared/store/repairStore.js";
import {Link} from "@inertiajs/react";
// import SearchIcon from '@mui/icons-material/Search';

const Repairs = ({repairs, employees, groupWhereOrdered, groupDevices}) => {
    const [openCreateModal, setOpenCreateModal] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const [links, setLinks] = React.useState([
        {name: 'All', url: ''},
        {name: 'Not called', url: '?filter[is_called]=0&filter[is_picked_up]=0&filter[is_fixed]=1'},
        {name: 'Not fixed', url: '?filter[is_fixed]=0&filter[is_ordered_component]=0'},
        {name: 'Awaits order', url: '?filter[is_fixed]=0&filter[is_ordered_component]=1&filter[is_picked_up]=0'},
        {name: 'Not taken yet', url: '?filter[is_picked_up]=0&filter[is_fixed]=1'},
    ]);

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
                    <Button variant='contained' color='success' onClick={() => setOpenCreateModal(true)}>
                        New repair
                    </Button>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                }}>
                    {/*<Box>*/}
                    {/*    <TextField*/}
                    {/*        sx={{maxWidth: '300px', width: '100%', flexGrow: 1}}*/}
                    {/*        size='small'*/}
                    {/*        id="search-field"*/}
                    {/*        label="Search"*/}
                    {/*    />*/}
                    {/*</Box>*/}
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
