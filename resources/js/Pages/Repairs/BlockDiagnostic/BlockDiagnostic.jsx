import {LoadingButton} from "@mui/lab";
import * as React from "react";
import {useEffect, useState} from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import ModalMui from "@/Components/Modal.jsx";
import ConfirmDialog from "@/Pages/Repairs/Components/ConfirmDialog.jsx";
import {Box, Button, TextField} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import useMutationDiagnostic from "@/shared/hooks/useMutationDiagnostic.js";

const BlockDiagnostic = ({repair}) => {
    const field = 'is_diagnostic';

    const [selected, setSelected] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState({
        diagnostic_description: '',
        component: '',
        [field]: false,
    });

    const {mutate, isPending, error, isError, isSuccess} = useMutationDiagnostic();

    useEffect(() => {
        setSelected(!!repair[field]);
    }, []);

    useEffect(() => {
        if (isSuccess) {
            setModalOpen(false);
            setSelected(!selected);
        }
    }, [isSuccess]);


    const handleField = async (event) => {
        if (!repair[field]) {
            setModalOpen(true);
        } else {
            setConfirmOpen(true);
        }
    }

    const unmarkField = async () => {
        mutate({
            id: repair.id,
            props: {[field]: false, diagnostic_description: ''}
        });
    }

    const handleModalClosed = () => {
        setModalOpen(false);
    };

    const handleSave = () => {
        mutate({id: repair.id, props: {...data, [field]: true}});
    };

    return (
        <>
            <ModalMui open={modalOpen} onClose={handleModalClosed} title={'Diagnostic'}>
                <Box sx={{display: 'flex', gap: 5, flexDirection: 'column'}}>
                    <Box>
                        <TextField value={data.diagnostic_description || ''}
                                   rows={4}
                                   multiline
                                   onChange={(e) => setData({...data, diagnostic_description: e.target.value})}
                                   sx={{width: '100%'}} id="outlined-basic" label="Result diagnostic"
                                   error={isError}
                                   helperText={error?.diagnostic_description}
                                   variant="outlined"/>
                    </Box>
                    <Box>
                        <TextField value={data.component || ''}
                                   onChange={(e) => setData({...data, 'component': e.target.value})}
                                   sx={{width: '100%'}} id="outlined-basic" label="Need to order"
                                   error={!!error?.component}
                                   helperText={error?.component}
                                   variant="outlined"/>
                    </Box>
                    <Box sx={{display: 'flex', gap: 3, justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', gap: 3}}>
                            <LoadingButton color='success' disabled={!data.diagnostic_description} loading={isPending}
                                           variant="contained"
                                           onClick={handleSave}>Save</LoadingButton>
                        </Box>
                        <Box>
                            <Button variant="contained" color={'primary'} onClick={handleModalClosed}>Cancel</Button>
                        </Box>
                    </Box>
                </Box>
            </ModalMui>
            <ConfirmDialog
                title="Unmarked Picked Up?"
                open={confirmOpen}
                setOpen={setConfirmOpen}
                onConfirm={unmarkField}
            >
                Are you sure? It will be unmarked as diagnostic.
            </ConfirmDialog>
            <LoadingButton
                loading={isPending}
                color={selected ? "success" : "error"}
                size="small"
                variant="text"
                onClick={handleField}
            >
                {selected ? <><CheckIcon/></> : <RemoveIcon/>}
            </LoadingButton>
        </>
    );
}

export default BlockDiagnostic;
