import CheckIcon from "@mui/icons-material/Check";
import * as React from "react";
import {useEffect} from "react";
import {LoadingButton} from "@mui/lab";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RemoveIcon from "@mui/icons-material/Remove";

const ToggleCompleted = ({disabled, fieldName, record, handleChanged}) => {
    const [selected, setSelected] = React.useState(false);
    useEffect(() => {
        setSelected(!!record[fieldName]);
    }, []);

    return (
        <LoadingButton
            loading={disabled}
            color={selected ? "success" : "error"}
            size="small"
            variant="text"
            onClick={() => {
                const newState = !selected;
                setSelected(newState)
                handleChanged(fieldName, newState);
            }}
        >
            {selected ? (
                    fieldName === 'is_ordered_component' ? <LocalShippingIcon/> : <CheckIcon/>
                )
                : <RemoveIcon/>}
        </LoadingButton>
    );
}

export default ToggleCompleted;
