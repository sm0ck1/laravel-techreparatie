import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import RepairsLayout from "@/Pages/Repairs/RepairsLayout.jsx";
import {Box, Button, ButtonGroup, Table, TableBody, TextField} from "@mui/material";
import Row from "@/Pages/Repairs/Components/Row.jsx";
import ModalMui from "@/Components/Modal.jsx";
import BlockDivider from "@/Pages/Components/BlockDivider.jsx";
import ModalEdit from "@/Pages/Repairs/Components/ModalEdit.jsx";

const Repairs = ({repairs}) => {

    const [openCreateModal, setOpenCreateModal] = React.useState(false);

    const handleCloseCreateModal = () => {
        setOpenCreateModal(false);
    };

    return (
        <RepairsLayout>
            <ModalMui open={openCreateModal} onClose={handleCloseCreateModal} title='New repair' width='md'>
                <BlockDivider title='Customer'>
                    <TextField fullWidth label="Name" variant="standard"/>
                    <TextField fullWidth label="Phone" variant="standard"/>
                </BlockDivider>
                <BlockDivider title='Device info'>
                    <TextField fullWidth label="Device name" variant="standard"/>
                    <TextField fullWidth label="Problem description" variant="standard"/>
                </BlockDivider>
                <BlockDivider title='Note'>
                    <TextField fullWidth multiline label="Note" variant="standard"/>
                </BlockDivider>
            </ModalMui>
            <ModalEdit />

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
            }}>
                <Button variant='contained' color='success' onClick={() => setOpenCreateModal(true)}>New repair</Button>

                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>All</Button>
                    <Button>Not fixed</Button>
                    <Button>Awaits order</Button>
                    <Button>Not taken yet</Button>
                </ButtonGroup>
            </Box>
            <TableContainer>
                <Table aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell/>
                            <TableCell/>
                            <TableCell>Worker</TableCell>
                            <TableCell align='center'>Ordered</TableCell>
                            <TableCell align='center'>Called</TableCell>
                            <TableCell align='center'>Fixed</TableCell>
                            <TableCell align='center'>Picked up</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {repairs.map((repair) => (
                            <Row key={repair.id} repair={repair}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </RepairsLayout>
    );
}

export default Repairs;
