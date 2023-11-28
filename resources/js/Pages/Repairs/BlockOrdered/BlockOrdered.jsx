import {LoadingButton} from "@mui/lab";
import Autocomplete from '@mui/material/Autocomplete'
import * as React from "react";
import {useEffect, useState} from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import ModalMui from "@/Components/Modal.jsx";
import ConfirmDialog from "@/Pages/Repairs/Components/ConfirmDialog.jsx";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {repairStore} from "@/shared/store/repairStore.js";
import {useSnapshot} from "valtio";
import CheckIcon from "@mui/icons-material/Check";
import BusAlertIcon from '@mui/icons-material/BusAlert';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import useMutationOrdered from "@/shared/hooks/useMutationOrdered.js";

const BlockOrdered = ({repair}) => {
    const field = 'is_ordered_component';
    const snapRepairStore = useSnapshot(repairStore);
    const employees = snapRepairStore.employees;
    const groupWhereOrdered = snapRepairStore.groupWhereOrdered;

    const [selected, setSelected] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState({
        who_ordered_id: 0,
        component: repair.component,
        is_ordered_component: false,
        cost: undefined,
        where_ordered: ''
    });

    const {mutate, isPending, error, isSuccess} = useMutationOrdered();

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
            props: {
                [field]: false,
                who_ordered_id: 0,
                component: '',
                cost: 0,
                is_ordered_component: false
            }
        });
    }

    const handleModalClosed = () => {
        setModalOpen(false);
    };

    const handleSave = async () => {
        mutate({id: repair.id, props: {...data, [field]: true}});
    };

    const getStatus = () => {
        if (repair.is_fixed && repair.who_ordered_id > 0) {
            return 1;
        } else if (repair.who_ordered_id > 0 && repair.is_ordered_component && !repair.is_fixed) {
            return 2;
        } else if (repair.is_fixed && !repair.who_ordered_id) {
            return 3;
        } else {
            return 4;
        }
    }

    const iconType = () => {
        const status = getStatus();
        if (status === 1) {
            return (
                <Box
                    sx={{
                        display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center'
                    }}
                >
                    <CheckIcon/>
                </Box>
            );
        } else if (status === 2) {
            return (
                <Box
                    aria-describedby='block-ordered-status-open-popover'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        alignItems: 'center'
                    }}>
                    <LocalShippingIcon/>
                    {repair.date_ordered}
                </Box>
            );
        } else if (status === 3) {
            return <><RemoveIcon/></>;
        } else {
            if(!!repair.component && repair.is_ordered_component === 0) {
                return <BusAlertIcon/>;
            }
            return <RemoveIcon/>;
        }
    };

    return (
        <>
            <ModalMui open={modalOpen} onClose={handleModalClosed} title={'Ordered'}>
                <Box sx={{display: 'flex', gap: 5, flexDirection: 'column'}}>
                    <Box>
                        <TextField value={data.component || ''}
                                   onChange={(e) => setData({...data, 'component': e.target.value})}
                                   sx={{width: '100%'}}
                                   id={"component"}
                                   label="Need to order"
                                   error={!!error?.component}
                                   helperText={error?.component}
                                   variant="outlined"/>
                    </Box>
                    <Box>
                        <TextField value={data.cost || ''}
                                   type={'number'}
                                   min={0}
                                   onChange={(e) => setData({...data, 'cost': e.target.value})}
                                   sx={{width: '100%'}}
                                   id={"cost"}
                                   label="Cost"
                                   error={!!error?.cost}
                                   helperText={error?.cost}
                                   variant="outlined"/>
                    </Box>
                    <Box>
                        <Autocomplete
                            id="where_ordered"
                            freeSolo
                            options={groupWhereOrdered.map((option) => option.where_ordered)}
                            renderInput={(params) => <TextField
                                error={!!error?.where_ordered}
                                helperText={error?.where_ordered}
                                value={data.where_ordered || ''}
                                onChange={(e) => setData({...data, 'where_ordered': e.target.value})}
                                {...params}
                                label="Where ordered"/>
                            }
                        />
                    </Box>
                    {employees.length &&
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Who ordered?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="who_ordered"
                                value={data.who_ordered_id || 0}
                                label="Who ordered?"
                                error={!!error?.who_ordered_id}
                                helperText={error?.who_ordered_id}
                                onChange={e => setData({...data, 'who_ordered_id': e.target.value})}
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
                            <LoadingButton color='success' disabled={!data.who_ordered_id} loading={isPending}
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
                Are you sure? It will be unmarked as picked up.
            </ConfirmDialog>
            <LoadingButton
                loading={isPending}
                color={getStatus() !== 4 ? "success" : "error"}
                size="small"
                variant="text"
                onClick={handleField}
            >
                {iconType()}
            </LoadingButton>
        </>
    );
}

export default BlockOrdered;
