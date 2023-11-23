import BlockInfoLayout from "@/Pages/Repairs/BlockInfo/Components/BlockInfoLayout.jsx";
import {TextField} from "@mui/material";
import * as React from "react";

const BlockInfoOrdered = ({repair}) => {

    if (!repair.is_ordered_component) {
        return null;
    }
    return (
        <BlockInfoLayout title='Ordered' date={repair.date_ordered}>
            <TextField
                size='small'
                label="Who ordered"
                defaultValue={repair.who_ordered?.name || 'None'}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                size='small'
                label="Component"
                defaultValue={repair.component}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                size='small'
                label="Where ordered"
                defaultValue={repair.where_ordered}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                size='small'
                label="Cost"
                defaultValue={repair.cost}
                InputProps={{
                    readOnly: true,
                }}
            />

        </BlockInfoLayout>
    );
}

export default BlockInfoOrdered;
