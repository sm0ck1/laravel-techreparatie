import ModalMui from "@/Components/Modal.jsx";
import {Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import {editStore} from "@/shared/store/editStore.js";
import {useSnapshot} from "valtio";
import BlockDivider from "@/Pages/Components/BlockDivider.jsx";
import {LoadingButton} from "@mui/lab";
import {repairStore} from "@/shared/store/repairStore.js";
import useMutationRepairUpdate from "@/shared/hooks/useMutationRepairUpdate.js";
import useMutationRepairDelete from "@/shared/hooks/useMutationRepairDelete.js";
import ConfirmDialog from "@/Pages/Repairs/Components/ConfirmDialog.jsx";

const ModalEdit = () => {
    const snapEditStore = useSnapshot(editStore);
    const snapRepairStore = useSnapshot(repairStore);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const employees = snapRepairStore.employees;
    const groupDevices = snapRepairStore.groupDevices;

    const [data, setData] = useState({
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
    });

    const {mutate, isPending, error, isSuccess} = useMutationRepairUpdate();
    const {mutate: mutateDelete, isPendingDelete, errorDelete, isSuccess: isSuccessDelete} = useMutationRepairDelete();

    useEffect(() => {
        if (isSuccess || isSuccessDelete) {
            editStore.clear();
        }
    }, [isSuccess, isSuccessDelete]);

    React.useEffect(() => {
        if (snapEditStore.edit && snapEditStore.data) {
            const allowFields = [];
            Object.keys(data).map((key) => {
                if (snapEditStore.data[key]) {
                    allowFields[key] = snapEditStore.data[key];
                }
            });
            setData(allowFields);
        }
    }, [snapEditStore.edit]);

    const handleSaveEdit = async () => {
        mutate({
            id: snapEditStore.data.id,
            props: data
        });
    };

    const onDeleted = () => {
        mutateDelete({
            id: snapEditStore.data.id
        })
    };


    return (
        <>
            <ModalMui open={snapEditStore.edit} onClose={() => editStore.clear()} width='md'
                      title={`Edit #${snapEditStore.data.id ?? 0}`}>

                <BlockDivider title='Customer'>
                    <TextField value={data.customer_name || ''}
                               onChange={(e) => setData({...data, 'customer_name': e.target.value})}
                               fullWidth
                               id="outlined-basic" label="Name"
                               error={!!error?.customer_name}
                               helperText={error?.customer_name}
                               variant="outlined"/>
                    <TextField value={data.customer_phone || ''}
                               onChange={(e) => setData({...data, 'customer_phone': e.target.value})}
                               fullWidth
                               id="outlined-basic" label="Phone"
                               error={!!error?.customer_phone}
                               helperText={error?.customer_phone}
                               variant="outlined"/>
                    <TextField value={data.customer_email || ''}
                               onChange={(e) => setData({...data, 'customer_email': e.target.value})}
                               fullWidth
                               id="outlined-basic" label="Email"
                               error={!!error?.customer_email}
                               helperText={error?.customer_email}
                               variant="outlined"/>
                </BlockDivider>
                <BlockDivider title='Device'>
                    <Autocomplete
                        id="free-solo-demo"
                        fullWidth
                        freeSolo
                        value={data.device || ''}
                        options={groupDevices.map((option) => option.device)}
                        onInputChange={(event, newInputValue) => {
                            setData({...data, 'device': newInputValue})
                        }}
                        renderInput={(params) => <TextField
                            error={!!error?.device}
                            helperText={error?.device}
                            value={data.device || ''}
                            {...params}
                            label="Device"/>
                        }
                    />
                    <TextField value={data.problem_description || ''}
                               onChange={(e) => setData({...data, 'problem_description': e.target.value})}
                               fullWidth
                               id="outlined-basic" label="Problem description"
                               error={!!error?.problem_description}
                               helperText={error?.problem_description}
                               variant="outlined"/>

                </BlockDivider>
                <BlockDivider title='Need to order' other={{flexDirection: 'column'}}>
                    <TextField value={data.component || ''}
                               onChange={(e) => setData({...data, 'component': e.target.value})}
                               fullWidth
                               id="outlined-basic" label="Parts"
                               error={!!error?.component}
                               helperText={error?.component}
                               variant="outlined"/>

                </BlockDivider>
                <BlockDivider title='Result of repair' other={{flexDirection: 'column'}}>
                    <TextField value={data.solution_description || ''}
                               onChange={(e) => setData({...data, 'solution_description': e.target.value})}
                               fullWidth
                               id="outlined-basic" label="Description"
                               error={!!error?.solution_description}
                               helperText={error?.solution_description}
                               variant="outlined"/>
                </BlockDivider>

                <BlockDivider title='Invoice'>
                    <TextField value={data.price || ''}
                               onChange={(e) => setData({...data, 'price': e.target.value})}
                               fullWidth
                               id="outlined-basic" label="Price"
                               error={!!error?.price}
                               helperText={error?.price}
                               variant="outlined"/>
                    <TextField value={data.cost || ''}
                               onChange={(e) => setData({...data, 'cost': e.target.value})}
                               fullWidth
                               id="outlined-basic" label="Cost"
                               error={!!error?.cost}
                               helperText={error?.cost}
                               variant="outlined"/>

                    <TextField value={data.invoice || ''}
                               onChange={(e) => setData({...data, 'invoice': e.target.value})}
                               fullWidth
                               id="outlined-basic" label="Invoice"
                               error={!!error?.invoice}
                               helperText={error?.invoice}
                               variant="outlined"/>

                </BlockDivider>
                {employees.length &&
                    <BlockDivider title='Employeer'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Employee</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data['user_id'] || ''}
                                label="Employee"
                                onChange={(e) => setData({...data, 'user_id': e.target.value})}
                            >
                                {employees.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>
                    </BlockDivider>
                }
                <BlockDivider title='Note'>
                    <TextField value={data.note || ''}
                               onChange={(e) => setData({...data, 'note': e.target.value})}
                               fullWidth
                               id="outlined-basic" label="Note"
                               error={!!error?.note}
                               helperText={error?.note}
                               variant="outlined"/>

                </BlockDivider>
                <Box sx={{display: 'flex', gap: 5, flexDirection: 'row'}}>
                    <LoadingButton fullWidth size='large' color='success' loading={isPending}
                                   variant="contained"
                                   onClick={handleSaveEdit}>Save</LoadingButton>
                    <Button fullWidth variant="contained" onClick={editStore.clear}>Cancel</Button>
                    <Button fullWidth variant="contained" color='error' onClick={() => setConfirmOpen(true)}
                            loading={isPendingDelete}
                    >Delete</Button>
                </Box>
            </ModalMui>
            <ConfirmDialog
                title="It will be delete"
                open={confirmOpen}
                setOpen={setConfirmOpen}
                onConfirm={onDeleted}
            >
                Are you sure? It will be delete.
            </ConfirmDialog>
        </>
    );
}

export default ModalEdit;
