import {TextField} from "@mui/material";
import * as React from "react";

const InputText = ({form, label, name, props}) => {
    return (
        <TextField
            fullWidth
            error={!!form.errors[name]}
            helperText={form.errors[name]}
            label={label}
            variant="outlined"
            value={form.data[name] || ''}
            onChange={e => form.setData(name, e.target.value)}
            {...props}/>
    );
}

export default InputText;
