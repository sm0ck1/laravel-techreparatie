import {TextField} from "@mui/material";
import BlockInfoLayout from "@/Pages/Repairs/BlockInfo/Components/BlockInfoLayout.jsx";
import * as React from "react";

const BlockInfoCustomer = ({repair}) => {
    return (
        <BlockInfoLayout title='Customer info'>
            <TextField
                size='small'
                label="Customer name"
                defaultValue={repair.customer_name}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                size='small'
                label="Customer phone"
                defaultValue={repair.customer_phone}
                InputProps={{
                    readOnly: true,
                }}
            />
        </BlockInfoLayout>
    );
}

export default BlockInfoCustomer;
