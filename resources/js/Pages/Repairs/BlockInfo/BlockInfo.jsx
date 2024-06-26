import {Box, IconButton, Typography} from "@mui/material";
import * as React from "react";
import EditIcon from '@mui/icons-material/Edit';
import {editStore} from "@/shared/store/editStore.js";
import BlockInfoCustomer from "@/Pages/Repairs/BlockInfo/Components/BlockInfoCustomer.jsx";
import BlockInfoOrdered from "@/Pages/Repairs/BlockInfo/Components/BlockInfoOrdered.jsx";
import BlockInfoFixed from "@/Pages/Repairs/BlockInfo/Components/BlockInfoFixed.jsx";
import BlockInfoDiagnostic from "@/Pages/Repairs/BlockInfo/Components/BlockInfoDiagnostic.jsx";
import PrintOrder from "@/Pages/Repairs/Components/PrintOrder.jsx";
import {useReactToPrint} from "react-to-print";
import {useRef} from "react";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

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

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <>
            <Box sx={{margin: 3, gap: 1, display: 'flex', flexDirection: 'row', marginLeft: 0}}>
                <Box sx={{alignItems: 'start', flexDirection: 'column', justifyContent: 'center', display: 'flex', width: '50px'}}>
                    <IconButton aria-label="edit" onClick={handleEdit}>
                        <EditIcon sx={styles.edit}/>
                    </IconButton>
                    <IconButton aria-label="edit" onClick={handlePrint}>
                        <LocalPrintshopIcon sx={styles.edit}/>
                    </IconButton>
                </Box>

                <Box
                    sx={{
                        display: 'none',
                    }}
                >
                    <PrintOrder ref={componentRef} repair={repair}/>
                </Box>
                <Box sx={{
                    gap: 1,
                    display: 'flex',
                    width: '100%',
                }}>
                    <BlockInfoCustomer repair={repair}/>
                    <BlockInfoDiagnostic repair={repair}/>
                    <BlockInfoOrdered repair={repair}/>
                    <BlockInfoFixed repair={repair}/>
                </Box>

            </Box>
            {!!repair.note &&
                <Typography variant="h6" sx={{
                    color: 'warning.main',
                    ml: 8,
                    p: 2
                }}>
                    <b>Note: </b> {repair.note}
                </Typography>
            }
        </>
    );
}
export default BlockInfo;
