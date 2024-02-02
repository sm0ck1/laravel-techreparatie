import DashboardLayout from "@/Pages/DashboardLayout.jsx";
import React from "react";
import {Box, Table, TableBody} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Row from "@/Pages/Users/Components/Row.jsx";

const Users = ({users}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <DashboardLayout header={'Employees'}>
            <Box>
                <h1>Users</h1>
                <TableContainer>
                    <Table aria-label="simple table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell >ID</TableCell>
                                <TableCell >Name</TableCell>
                                <TableCell >Email</TableCell>
                                <TableCell >Access</TableCell>
                                <TableCell >Role</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <Row key={user.id} user={user} open={open} setOpen={setOpen}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </DashboardLayout>
    );
}

export default Users;
