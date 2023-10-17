import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import * as React from "react";
import {useEffect} from "react";
import {LoadingButton} from "@mui/lab";

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
            {selected ? <CheckIcon/> : <RemoveIcon />}
        </LoadingButton>
    );
}

export default ToggleCompleted;
