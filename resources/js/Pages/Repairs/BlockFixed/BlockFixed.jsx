import {LoadingButton} from "@mui/lab";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from '@mui/icons-material/Clear';
import * as React from "react";
import {useEffect, useState} from "react";
import ConfirmDialog from "@/Pages/Repairs/Components/ConfirmDialog.jsx";
import {handlePatch} from "@/shared/queries/repairPatch.js";
import ModalMui from "@/Components/Modal.jsx";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {repairStore} from "@/shared/store/repairStore.js";
import {useSnapshot} from "valtio";
import useMutationFixed from "@/shared/hooks/useMutationFixed.js";

const BlockFixed = ({repair}) => {
    const field = 'is_fixed';

    const snapRepairStore = useSnapshot(repairStore);
    const employees = snapRepairStore.employees;
    const [data, setData] = useState({
        user_id: 0,
        price: undefined,
        solution_description: '',
        is_fixed: 0,
    });
    const {mutate, isPending, isSuccess, error} = useMutationFixed();

    const [selected, setSelected] = useState(0);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

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
        if (repair[field] === 0) {
            setModalOpen(true);
        } else {
            setConfirmOpen(true);
        }
    }

    const unmarkField = async () => {
        await handlePatch(repair, {[field]: false, solution_description: ''});
    }

    const handleModalClosed = () => {
        setModalOpen(false);
    };

    const handleSaveAndSendSMS = async () => {
        setData({...data, 'send_sms': true});
        await handleSave();
    }

    const handleSave = async (state) => {
        mutate({id: repair.id, props: {...data, [field]: state}});
    }

    return (
        <>
            <ModalMui open={modalOpen} onClose={handleModalClosed} title={'Fixed'}>
                <Box sx={{display: 'flex', gap: 5, flexDirection: 'column'}}>
                    <Box>
                        <TextField value={data.solution_description}
                                   onChange={(e) => setData({...data, 'solution_description': e.target.value})}
                                   sx={{width: '100%'}}
                                   id="solution_description"
                                   label="Result of repair"
                                   error={!!error?.solution_description}
                                   helperText={error?.solution_description}
                                   variant="outlined"/>
                    </Box>
                    <Box>
                        <TextField value={data.price}
                                   id="price"
                                   type={'number'}
                                   min={0}
                                   error={!!error?.price}
                                   helperText={error?.price}
                                   onChange={(e) => setData({...data, 'price': e.target.value})}
                                   sx={{width: '100%'}}
                                   label="Price"
                                   variant="outlined"/>
                    </Box>
                    {employees.length &&
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Employee</InputLabel>
                            <Select
                                labelId="employee"
                                id="employee"
                                value={data.user_id || 0}
                                label="Employee"
                                error={!!error?.user_id}
                                helperText={error?.user_id}
                                onChange={e => setData({...data, user_id: e.target.value})}
                            >
                                <MenuItem disabled={true} value={0}>Set employee</MenuItem>
                                {employees.map((item, index) => (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>
                    }
                    <Box sx={{display: 'flex', gap: 3, justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', gap: 3}}>
                            <LoadingButton color='success' disabled={!data.user_id} loading={isPending}
                                           variant="contained"
                                           onClick={()=> handleSave(1)}>Fixed</LoadingButton>
                            <LoadingButton color='success' disabled={!data.user_id} loading={isPending}
                                           variant="contained"
                                           onClick={()=> handleSave(2)}>Not fixed</LoadingButton>
                            {/*<LoadingButton color='success' disabled={!data.user_id} loading={processing}*/}
                            {/*               variant="contained"*/}
                            {/*               onClick={handleSaveAndSendSMS}>Save and send SMS</LoadingButton>*/}
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
                Are you sure? It will be unmarked as picked up.
            </ConfirmDialog>
            <LoadingButton
                loading={isPending}
                color={selected ? "success" : "error"}
                size="small"
                variant="text"
                onClick={handleField}
            >
                {selected === 1 && <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'center'
                }}><CheckIcon/> {repair.user?.name}</Box>}
                {selected === 2 && "Not fixed"}
                {selected === 0 && <RemoveIcon/>}
            </LoadingButton>
        </>

    );
}

export default BlockFixed;
