import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BlockAccess from "@/Pages/Users/Components/BlockAccess.jsx";

const Row = ({user}) => {
    return (
        <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell><BlockAccess access={user.access} /></TableCell>
            <TableCell>{user.role}</TableCell>
        </TableRow>
    );
}

export default Row;
