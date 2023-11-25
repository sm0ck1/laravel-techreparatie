import ConfirmDialog from "@/Pages/Repairs/Components/ConfirmDialog.jsx";
import {LoadingButton} from "@mui/lab";
import * as React from "react";
import {useEffect, useState} from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";
import useMutationCalled from "@/shared/hooks/useMutationCalled.js";
import {Box, Button} from "@mui/material";
import ModalMui from "@/Components/Modal.jsx";
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';


const BlockCalled = ({repair}) => {
    const field = 'is_called';

    const [selected, setSelected] = useState(0);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState({
        [field]: 0,
    });

    const {mutate, isPending, isSuccess} = useMutationCalled();

    useEffect(() => {
        setSelected(repair[field]);
    }, [repair[field], selected]);

    useEffect(() => {
        if (isSuccess) {
            setSelected(data[field]);
            setModalOpen(false);
        }
    }, [isSuccess]);

    const handleField = async () => {
        if (selected === 1) {
            setConfirmOpen(true);
        } else {
            setModalOpen(true);
        }
    }

    const unmarkField = () => {
        mutate({id: repair.id, props: {...data, [field]: 0}});
    }
    const handleSave = async (state) => {
        mutate({id: repair.id, props: {...data, [field]: state}});

    }

    const handleModalClosed = () => {
        setModalOpen(false);
    };

    const color = !selected ? 'error' : selected === 1 ? 'success' : 'warning';

    return (
        <>
            <ModalMui open={modalOpen} onClose={handleModalClosed} title={'Called'}>
                <Box sx={{display: 'flex', gap: 5,  mt:5, flexDirection: 'column'}}>

                    <Box sx={{display: 'flex', gap: 3, justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', gap: 3}}>
                            <LoadingButton color='success'  loading={isPending}
                                           variant="contained"
                                           onClick={() => handleSave(1)}>Success call</LoadingButton>
                        </Box>
                        <Box sx={{display: 'flex', gap: 3}}>
                            <LoadingButton color='warning' loading={isPending}
                                           variant="contained"
                                           onClick={() => handleSave(2)}>Call again later</LoadingButton>
                        </Box>
                        <Box>
                            <Button variant="contained" color={'primary'} onClick={handleModalClosed}>Cancel</Button>
                        </Box>
                    </Box>
                </Box>
            </ModalMui>
            <ConfirmDialog
                title="Unmarked Called?"
                open={confirmOpen}
                setOpen={setConfirmOpen}
                onConfirm={unmarkField}
            >
                Are you sure? It will be unmarked as Called.
            </ConfirmDialog>
            <LoadingButton
                loading={isPending}
                color={color}
                size="small"
                variant="text"
                onClick={handleField}
            >
                {selected === 2 && <PhoneMissedIcon/>}
                {selected === 1 && <CheckIcon/>}
                {!selected && <RemoveIcon/>}
            </LoadingButton>
        </>
    );
}

export default BlockCalled;
