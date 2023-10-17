import ModalMui from "@/Components/Modal.jsx";
import {Box, Button} from "@mui/material";
import * as React from "react";
import {editStore} from "@/store/editStore.js";
import {useSnapshot} from "valtio";
import BlockDivider from "@/Pages/Components/BlockDivider.jsx";
import InputText from "@/Pages/Components/InputText.jsx";
import {router, useForm} from "@inertiajs/react";
import {LoadingButton} from "@mui/lab";

const ModalEdit = () => {
    const snapEditStore = useSnapshot(editStore);
    const [disable, setDisable] = React.useState(false);
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
    })
    const handleSaveEdit = async () => {
        setDisable(true);
        const res = await axios.patch(route('repairs.update', {
            'repair': snapEditStore.data.id,
        }), form.data);
        if (res.status === 200) {
            router.reload({only: ['repairs']});
        }
        setDisable(false);
        editStore.clear();
    };
    React.useEffect(() => {
        if (snapEditStore.edit) {
            form.setData(snapEditStore.data);
        }
    }, [snapEditStore.edit]);

    return (
        <ModalMui open={snapEditStore.edit} onClose={() => editStore.clear()} width='md'
                  title={`Edit #${snapEditStore.data.id ?? 0}`}>

            <BlockDivider title='Customer'>
                <InputText label='Name' form={form} name='customer_name' props={{fullWidth: true}}/>
                <InputText label='Phone' form={form} name='customer_phone' props={{fullWidth: true}}/>
            </BlockDivider>
            <BlockDivider title='Device'>
                <InputText label='Device name' form={form} name='device' props={{fullWidth: true}}/>
                <InputText label='Problem description' form={form} name='problem_description'
                           props={{fullWidth: true}}/>
            </BlockDivider>
            <BlockDivider title='Solution' other={{flexDirection: 'column'}}>
                <InputText label='Need to order' form={form} name='component' props={{fullWidth: true}}/>
                <InputText label='Solution description' form={form} name='solution_description'
                           props={{fullWidth: true}}/>
            </BlockDivider>
            <BlockDivider title='Invoice'>
                <InputText label='Price' form={form} name='price' props={{fullWidth: true}}/>
                <InputText label='Cost' form={form} name='cost' props={{fullWidth: true}}/>
                <InputText label='Invoice' form={form} name='invoice' props={{fullWidth: true}}/>
            </BlockDivider>
            <BlockDivider title='Note'>
                <InputText label='Note' form={form} name='note' props={{fullWidth: true, multiline: true}}/>
            </BlockDivider>
            <Box sx={{display: 'flex', gap: 5, flexDirection: 'row'}}>
                <LoadingButton fullWidth size='large' color='success' loading={disable} disabled={disable} variant="contained"
                               onClick={handleSaveEdit}>Save</LoadingButton>
                <Button fullWidth variant="contained" onClick={editStore.clear}>Cancel</Button>
                <Button fullWidth variant="contained" color='error' onClick={editStore.clear}>Delete</Button>
            </Box>
        </ModalMui>
    );
}

export default ModalEdit;
