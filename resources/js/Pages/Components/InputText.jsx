import {TextField} from "@mui/material";
import * as React from "react";

const InputText = ({form, label, name, props}) => {
    return (
        <TextField
            fullWidth
            label={label}
            variant="standard"
            value={form.data[name] || ''}
            onChange={e => form.setData(name, e.target.value)}
            {...props}/>
    );
}

export default InputText;
