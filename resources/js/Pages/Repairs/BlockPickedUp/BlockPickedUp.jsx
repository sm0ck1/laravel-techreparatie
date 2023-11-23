import {LoadingButton} from "@mui/lab";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import {useEffect, useState} from "react";
import ConfirmDialog from "@/Pages/Repairs/Components/ConfirmDialog.jsx";
import ModalMui from "@/Components/Modal.jsx";
import {Box, TextField} from "@mui/material";
import useMutationPickedUp from "@/shared/hooks/useMutationPickedUp.js";

const BlockPickedUp = ({repair}) => {
    const field = 'is_picked_up';

    const [selected, setSelected] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const {mutate, isPending, error, isError, isSuccess} = useMutationPickedUp();

    const [data, setData] = useState({
        invoice: '',
        [field]: false,
    });


    useEffect(() => {
        setSelected(!!repair[field]);
    }, [repair]);

    const handleField = async () => {
        if (!repair[field]) {
            setModalOpen(true);
        } else {
            setConfirmOpen(true);
        }
    }

    const unmarkField = async () => {
        mutate({
            id: repair.id,
            props: {[field]: false, invoice: ''}
        });
    }

    const handleSave = async () => {
        mutate({id: repair.id, props: {...data, [field]: true}});
        handleModalClosed();
    }

    const handleModalClosed = () => {
        setModalOpen(false);
    };

    return (
        <>
            <ModalMui open={modalOpen} onClose={handleModalClosed} title={'Picked Up'}>
                <Box sx={{display: 'flex', gap: 5, flexDirection: 'column'}}>
                    <Box>
                        <TextField value={data.invoice}
                                   onChange={(e) => setData({...data, invoice: e.target.value})}
                                   error={isError}
                                   helperText={error?.invoice}
                                   sx={{width: '100%'}} id="outlined-basic" label="Invoice #"
                                   variant="outlined"
                        />
                    </Box>
                    <Box sx={{display: 'flex', gap: 3}}>
                        <LoadingButton loading={isPending} variant="contained" onClick={handleSave}>Save</LoadingButton>
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
                loading={isPending}
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
