import {Box, IconButton} from "@mui/material";
import * as React from "react";
import EditIcon from '@mui/icons-material/Edit';
import {editStore} from "@/shared/store/editStore.js";
import BlockInfoCustomer from "@/Pages/Repairs/BlockInfo/Components/BlockInfoCustomer.jsx";
import BlockInfoOrdered from "@/Pages/Repairs/BlockInfo/Components/BlockInfoOrdered.jsx";
import BlockInfoFixed from "@/Pages/Repairs/BlockInfo/Components/BlockInfoFixed.jsx";
import BlockInfoPicked from "@/Pages/Repairs/BlockInfo/Components/BlockInfoPicked.jsx";
import BlockInfoCalled from "@/Pages/Repairs/BlockInfo/Components/BlockInfoCalled.jsx";

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
        <Box sx={{margin: 3, gap: 1, display: 'flex', flexDirection: 'row', marginLeft: 0}}>
            <Box sx={{alignItems: 'start', justifyContent: 'center', display: 'flex', width: '50px'}}>
                <IconButton aria-label="edit" onClick={handleEdit}>
                    <EditIcon sx={styles.edit}/>
                </IconButton>
            </Box>
            <Box sx={{
                gap: 1,
                display: 'flex',
                width: '100%',
            }}>
                <BlockInfoCustomer repair={repair}/>
                <BlockInfoOrdered repair={repair}/>
                <BlockInfoFixed repair={repair}/>
                <BlockInfoCalled repair={repair}/>
                <BlockInfoPicked repair={repair}/>
            </Box>
            {/*        <b>Note: </b> {repair.note}*/}
        </Box>
    );
}
export default BlockInfo;
