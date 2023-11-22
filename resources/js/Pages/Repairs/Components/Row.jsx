import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Box, Collapse, IconButton, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BlockInfo from "@/Pages/Repairs/BlockInfo/BlockInfo.jsx";
import BlockFixed from "@/Pages/Repairs/BlockFixed/BlockFixed.jsx";
import BlockPickedUp from "@/Pages/Repairs/BlockPickedUp/BlockPickedUp.jsx";
import BlockOrdered from "@/Pages/Repairs/BlockOrdered/BlockOrdered.jsx";
import BlockCalled from "@/Pages/Repairs/BlockCalled/BlockCalled.jsx";
import {dateCreate} from "@/shared/helpers/formatDate.js";
import {blue} from "@mui/material/colors";
import BlockDiagnostic from "@/Pages/Repairs/BlockDiagnostic/BlockDiagnostic.jsx";

const Row = ({repair, open, setOpen}) => {

    return (
        <>
            <TableRow
                key={repair.id}
                sx={{
                    '&:last-child td, &:last-child th': {border: 0},
                    borderLeft: open === repair.id ? `5px solid ${blue[700]}` : 'none',
                    '&:hover': {backgroundColor: '#f5f5f5'}
                }}
            >
                <TableCell
                    sx={{
                        width: 50,
                        textAlign: 'center'
                    }}
                >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(open === repair.id ? false : repair.id)}
                    >
                        {open === repair.id ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}
                    </IconButton>
                </TableCell>

                <TableCell component="th" scope="row">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Typography variant='h6'>
                            {repair.id}
                        </Typography>
                        <Typography sx={{color: '#555'}} variant="body2" gutterBottom>
                            {dateCreate(repair.created_at)}
                        </Typography>
                    </Box>
                </TableCell>
                <TableCell>
                    <b>Device: </b> {repair.device}
                    <br/>
                    <b>Problem: </b> {repair.problem_description}
                    <br/>
                    <b>Need to order: </b> {repair.component}
                </TableCell>
                <TableCell align='center'>
                    <BlockDiagnostic repair={repair}/>
                </TableCell>

                <TableCell align='center'>
                    <BlockOrdered repair={repair}/>
                </TableCell>
                <TableCell align='center'>
                    <BlockFixed repair={repair}/>
                </TableCell>
                <TableCell align='center'>
                    <BlockCalled repair={repair}/>
                </TableCell>
                <TableCell align='center'>
                    <BlockPickedUp repair={repair}/>
                </TableCell>
            </TableRow>
            <TableRow
                sx={{
                    borderLeft: open === repair.id ? `5px solid ${blue[700]}` : 'none'
                }}
            >
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={9}>
                    <Collapse in={open === repair.id} timeout="auto" unmountOnExit>
                        <BlockInfo repair={repair}/>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default Row;
