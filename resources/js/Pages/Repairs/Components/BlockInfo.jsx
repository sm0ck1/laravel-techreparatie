import {Box, Divider, IconButton} from "@mui/material";
import * as React from "react";
import EditIcon from '@mui/icons-material/Edit';
import {editStore} from "@/store/editStore.js";

const styles = {
    edit: {
        color: "#888",
        cursor: "pointer",
        '&:hover': {
            color: "#555",
        }
    }
};

const BlockInfo = ({repair}) => {

    const handleEdit = () => {
        editStore.edit = true;
        editStore.data = repair;
    };

    return (
        <Box sx={{margin: 3, gap: 1, display: 'flex', flexDirection: 'row', paddingLeft: 1, marginLeft: 0}}>
            <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', paddingRight: 1}}>
                <IconButton aria-label="edit" onClick={handleEdit}>
                    <EditIcon sx={styles.edit}/>
                </IconButton>
            </Box>
            <Box sx={{pl: 18,margin: 3, gap: 1, display: 'flex', flexDirection: 'column'}}>
                <Box>
                    <b>Price: </b> {repair.price}
                </Box>
                <Box>
                    <b>Cost: </b> {repair.cost}
                </Box>
                <Box>
                    <b>Invoice: </b> {repair.invoice}
                </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem/>

            <Box sx={{margin: 3, gap: 1, display: 'flex', flexDirection: 'column'}}>
                <Box>
                    <b>Customer: </b> {repair.customer_name}
                </Box>
                <Box>
                    <b>Phone: </b> {repair.customer_phone}
                </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <Box sx={{margin: 3, gap: 1, display: 'flex', flexDirection: 'column'}}>
                <Box>
                    <b>Solution: </b> {repair.solution_description}
                </Box>
                <Box>
                    <b>Note: </b> {repair.note}
                </Box>
            </Box>
        </Box>
    );
}
export default BlockInfo;
