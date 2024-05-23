import BlockDivider from "@/Pages/Components/BlockDivider.jsx";
import {Box, Button, TextField} from "@mui/material";
import ModalMui from "@/Components/Modal.jsx";
import * as React from "react";
import {useEffect} from "react";
import {useForm} from "@inertiajs/react";
import InputText from "@/Pages/Components/InputText.jsx";
import {LoadingButton} from "@mui/lab";
import { Autocomplete } from '@mui/material'
import {repairStore} from "@/shared/store/repairStore.js";
import {useSnapshot} from "valtio";

const ModalCreate = ({open, handleClose}) => {

    const snapRepairStore = useSnapshot(repairStore);
    const groupDevices = snapRepairStore.groupDevices;

    const form = useForm({
        customer_name: "",
        customer_phone: "",
        customer_email: "",
        device: "",
        problem_description: "",
        component: "",
        solution_description: "",
        price: "",
        cost: "",
        invoice: "",
        note: "",
        user_id: 0,
    })

    const [disable, setDisable] = React.useState(false);
    const handleSave = async () => {
        setDisable(true);
        await form.post('/repairs');

        // if (form.hasErrors()) {
        //     return;
        // }
        // handleCloseModal();
    };

    useEffect(() => {
        setDisable(form.wasSuccessful);
        handleCloseModal();
    }, [form.wasSuccessful]);

    useEffect(() => {
        setDisable(form.processing);
    }, [form.processing]);

    const handleCloseModal = () => {
        form.reset();
        handleClose();
    };

    return (
        <ModalMui open={open} onClose={handleCloseModal} title='New repair' width='md'>
            <BlockDivider title='Customer'>
                <InputText label='Name' form={form} name='customer_name' props={{fullWidth: true}}/>
                <InputText label='Phone' form={form} name='customer_phone' props={{fullWidth: true}}/>
                <InputText label='Email' form={form} name='customer_email' props={{fullWidth: true}}/>
            </BlockDivider>
            <BlockDivider title='Device'>
                <Autocomplete
                    id="free-solo-demo"
                    fullWidth
                    freeSolo
                    options={groupDevices.map((option) => option.device)}
                    defaultValue={form.data.device || ''}
                    onInputChange={(event, newInputValue) => {
                        form.setData('device', newInputValue);
                    }}
                    renderInput={(params) => <TextField
                        error={!!form.errors?.device}
                        helperText={form.errors?.device}
                        value={form.data.device || ''}
                        {...params}
                        label="Device"/>
                    }
                />

                <InputText label='Problem description' form={form} name='problem_description'
                           props={{fullWidth: true}}/>
            </BlockDivider>
            <BlockDivider title='Note'>
                <TextField value={form.data.note || ''}
                           onChange={(e) => form.setData('note', e.target.value)}
                           fullWidth
                           id="outlined-basic" label="Note"
                           error={!!form.error?.note}
                           helperText={form.error?.note}
                           variant="outlined"/>
            </BlockDivider>
            <Box sx={{display: 'flex', gap: 5, flexDirection: 'row'}}>
                <LoadingButton fullWidth size='large' color='success' loading={disable}
                               variant="contained"
                               onClick={handleSave}>Save</LoadingButton>
                <Button fullWidth variant="contained" onClick={handleCloseModal}>Cancel</Button>
            </Box>
        </ModalMui>
    );
}

export default ModalCreate;
