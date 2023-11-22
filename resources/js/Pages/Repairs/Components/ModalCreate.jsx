import BlockDivider from "@/Pages/Components/BlockDivider.jsx";
import {Box, Button, TextField} from "@mui/material";
import ModalMui from "@/Components/Modal.jsx";
import * as React from "react";
import {useEffect} from "react";
import {useForm} from "@inertiajs/react";
import InputText from "@/Pages/Components/InputText.jsx";
import {LoadingButton} from "@mui/lab";
import {repairStore} from "@/shared/store/repairStore.js";
import {useSnapshot} from "valtio";

const ModalCreate = ({open, handleClose}) => {

    const snapRepairStore = useSnapshot(repairStore);
    const employees = snapRepairStore.employees;

    const form = useForm({
        customer_name: "",
        customer_phone: "",
        device: "",
        problem_description: "",
        component: "",
        solution_description: "",
        price: "",
        cost: "",
        invoice: "",
        note: "",
        user_id: 2,
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
            </BlockDivider>
            <BlockDivider title='Device'>
                <InputText label='Device name' form={form} name='device' props={{fullWidth: true}}/>
                <InputText label='Problem description' form={form} name='problem_description'
                           props={{fullWidth: true}}/>
            </BlockDivider>

            {/*{employees.length &&*/}
            {/*    <BlockDivider title='Employeer'>*/}
            {/*        <FormControl fullWidth>*/}
            {/*            <InputLabel id="demo-simple-select-label">Employee</InputLabel>*/}
            {/*            <Select*/}
            {/*                labelId="demo-simple-select-label"*/}
            {/*                id="demo-simple-select"*/}
            {/*                value={form.data['user_id'] || ''}*/}
            {/*                label="Employee"*/}
            {/*                onChange={e => form.setData('user_id', e.target.value)}*/}
            {/*            >*/}
            {/*                {employees.map((item, index) => (*/}
            {/*                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>*/}
            {/*                    )*/}
            {/*                )}*/}
            {/*            </Select>*/}
            {/*        </FormControl>*/}
            {/*    </BlockDivider>*/}
            {/*}*/}
            <BlockDivider title='Note'>
                <TextField fullWidth multiline label="Note" variant="standard"/>
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
