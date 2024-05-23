import {TextField} from "@mui/material";
import BlockInfoLayout from "@/Pages/Repairs/BlockInfo/Components/BlockInfoLayout.jsx";
import * as React from "react";
import {compareWithCurrentTime, dateCreate} from "@/shared/helpers/formatDate.js";

const BlockInfoCustomer = ({repair}) => {
    return (
        <BlockInfoLayout title='Customer info' date={dateCreate(repair.created_at)}>
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
            <TextField
                size='small'
                label="Customer email"
                defaultValue={repair.customer_email}
                InputProps={{
                    readOnly: true,
                }}
            />
            {!!repair.is_called && (
                <TextField
                    color={compareWithCurrentTime(repair.date_called) > 1 && !repair.is_picked_up ? 'warning' : 'success'}
                    focused
                    size='small'
                    label="Called date"
                    defaultValue={repair.date_called}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            )}
            {!!repair.is_picked_up && (
                <TextField
                    size='small'
                    label="Invoice"
                    defaultValue={repair.invoice}
                    InputProps={{
                        readOnly: true,
                    }}

                />
            )}
        </BlockInfoLayout>
    );
}

export default BlockInfoCustomer;
