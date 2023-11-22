import {LoadingButton} from "@mui/lab";
import CheckIcon from "@mui/icons-material/Check.js";
import RemoveIcon from "@mui/icons-material/Remove.js";
import {useEffect, useState} from "react";
import ConfirmDialog from "@/Pages/Repairs/Components/ConfirmDialog.jsx";
import {handlePatch} from "@/shared/queries/repairPatch.js";
import {router} from "@inertiajs/react";
import ModalMui from "@/Components/Modal.jsx";
import {Box, TextField} from "@mui/material";

const BlockPickedUp = ({repair}) => {
    const field = 'is_picked_up';

    const [selected, setSelected] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [disable, setDisable] = useState(false);
    const [data, setData] = useState({
        invoice: repair['invoice'] ?? '',
    });

    useEffect(() => {
        setSelected(!!repair[field]);
    }, []);

    const handleField = async () => {
        if (!repair[field]) {
            setModalOpen(true);
        } else {
            setConfirmOpen(true);
        }
    }

    const processSave = async (cb) => {
        setDisable(true);
        await cb();
        setSelected(!selected);
        setDisable(false);
    };

    const unmarkField = async () => {
        await processSave(async () => {
            await handlePatch(repair, {[field]: false});
        });
    }

    const handleSave = async () => {
        await processSave(async () => {
            await handlePatch(repair, {...data, is_picked_up: true});
            handleModalClosed();
        });
    }

    const handleModalClosed = () => {
        setModalOpen(false);
    };

    return (
        <>
            <ModalMui open={modalOpen} onClose={handleModalClosed} title={'Set pickup'}>
                <Box sx={{display: 'flex', gap: 5, flexDirection: 'column'}}>
                    <Box>
                        <TextField value={data.invoice}
                                   onChange={(e) => setData({invoice: e.target.value})}
                                   sx={{width: '100%'}} id="outlined-basic" label="Invoice #"
                                   variant="outlined"/>
                    </Box>
                    <Box sx={{display: 'flex', gap: 3}}>
                        <LoadingButton loading={disable} variant="contained" onClick={handleSave}>Save</LoadingButton>
                    </Box>
                </Box>
            </ModalMui>
            <ConfirmDialog
                title="Unmarked Called?"
                open={confirmOpen}
                setOpen={setConfirmOpen}
                onConfirm={unmarkField}
            >
                Are you sure? It will be unmarked as picked up.
            </ConfirmDialog>
            <LoadingButton
                loading={disable}
                color={selected ? "success" : "error"}
                size="small"
                variant="text"
                onClick={handleField}
            >
                {selected ? <CheckIcon/> : <RemoveIcon/>}
            </LoadingButton>
        </>

    );
}

export default BlockPickedUp;
