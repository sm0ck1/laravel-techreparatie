import {TextField} from "@mui/material";
import BlockInfoLayout from "@/Pages/Repairs/BlockInfo/Components/BlockInfoLayout.jsx";
import * as React from "react";

const BlockInfoFixed = ({repair}) => {
    if (!repair.is_fixed) return <></>;
    return (
        <BlockInfoLayout title='Fixed' date={repair.date_fixed}>
            <TextField
                size='small'
                label="Who fixed"
                defaultValue={repair.user?.name || 'None'}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                size='small'
                label="Solution description"
                defaultValue={repair.solution_description || 'None'}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                size='small'
                label="Price"
                defaultValue={repair.price}
                InputProps={{
                    readOnly: true,
                }}
            />
        </BlockInfoLayout>
    );
}

export default BlockInfoFixed;
