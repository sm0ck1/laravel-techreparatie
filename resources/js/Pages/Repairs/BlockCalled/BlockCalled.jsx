import ConfirmDialog from "@/Pages/Repairs/Components/ConfirmDialog.jsx";
import {LoadingButton} from "@mui/lab";
import * as React from "react";
import {useEffect, useState} from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";
import useMutationCalled from "@/shared/hooks/useMutationCalled.js";

const BlockCalled = ({repair}) => {
    const field = 'is_called';

    const [selected, setSelected] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [data, setData] = useState({
        [field]: false,
    });

    const {mutate, isPending, isSuccess} = useMutationCalled();

    useEffect(() => {
        console.log('!!repair[field]',!!repair[field])
        setSelected(!!repair[field]);
    }, []);

    useEffect(() => {
        if (isSuccess) {
            setSelected(!selected);
        }
    }, [isSuccess]);

    const handleField = async () => {
        if (selected) {
            setConfirmOpen(true);
        } else {
            await handleSave();
        }
    }

    const unmarkField = () => {
        mutate({id: repair.id, props: {...data, [field]: false}});
    }
    const handleSave = async () => {
        mutate({id: repair.id, props: {...data, [field]: true}});
    }

    return (
        <>
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

export default BlockCalled;
