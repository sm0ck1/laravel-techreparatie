import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Box, Button, Collapse, IconButton, TextField, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ToggleCompleted from "@/Pages/Repairs/Components/ToggleComplited.jsx";
import BlockInfo from "@/Pages/Repairs/Components/BlockInfo.jsx";
import {router} from "@inertiajs/react";
import ModalMui from "@/Components/Modal.jsx";

const Row = ({repair}) => {

    const [data, setData] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [disable, setDisable] = React.useState(false);

    const handleUpdateStatuses = async (field, newState) => {
        setDisable(true);
        data[field] = newState;
        await handlePatch(data);

        setDisable(false);

        if (field === 'is_fixed' && newState === true) {
            setOpenModal(true);
        }
    }

    const handlePatch = async (data) => {
        const res = await axios.patch(route('repairs.update', {
            'repair': repair.id,
        }), data);
        if (res.status === 200) {
            router.reload({only: ['repairs']});
        }
        setData({});
    }

    const handleSaveAndSendSMS = async () => {
        await handlePatch({...data, send_sms: true});

        handleClosedEditSolution();
    }


    const handleSave = async () => {
        await handlePatch(data);

        handleClosedEditSolution();
    }

    const handleClosedEditSolution = () => {
        setDisable(false);
        setOpenModal(false);
    };
    return (
        <>
            <ModalMui open={openModal} onClose={handleClosedEditSolution}>
                <Box sx={{display: 'flex', gap: 5, flexDirection: 'column'}}>
                    <Box>
                        <TextField value={data.solution_description}
                                      onChange={(e) => setData({solution_description: e.target.value})}
                                   sx={{width: '100%'}} id="outlined-basic" label="What we fixed/did"
                                   variant="outlined"/>
                    </Box>
                    <Box sx={{display: 'flex', gap: 3}}>
                        <Button variant="contained" onClick={handleSave}>Save</Button>
                        <Button variant="contained" onClick={handleSaveAndSendSMS}>Save and send SMS</Button>
                    </Box>
                </Box>
            </ModalMui>
            <TableRow
                key={repair.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>

                <TableCell component="th" scope="row">
                    <Typography variant='h6'>
                        {repair.id}
                    </Typography>
                    <Typography sx={{color: '#555'}} variant="body2" gutterBottom>
                        {repair.date}
                    </Typography>
                </TableCell>
                <TableCell>
                    <b>Device: </b> {repair.device}
                    <br/>
                    <b>Problem: </b> {repair.problem_description}
                    <br/>
                    <b>Need to order: </b> {repair.component}
                </TableCell>
                <TableCell>
                    Vitalii
                </TableCell>
                <TableCell align='center'>
                    <ToggleCompleted disabled={disable} fieldName='is_ordered_component' record={repair}
                                     handleChanged={handleUpdateStatuses}/>
                </TableCell>
                <TableCell align='center'>
                    <ToggleCompleted disabled={disable} fieldName='is_called' record={repair}
                                     handleChanged={handleUpdateStatuses}/>
                </TableCell>
                <TableCell align='center'>
                    <ToggleCompleted disabled={disable} fieldName='is_fixed' record={repair}
                                     handleChanged={handleUpdateStatuses}/>
                </TableCell>
                <TableCell align='center'><ToggleCompleted disabled={disable} fieldName='is_picked_up' record={repair}
                                                           handleChanged={handleUpdateStatuses}/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={9}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <BlockInfo repair={repair}/>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default Row;
