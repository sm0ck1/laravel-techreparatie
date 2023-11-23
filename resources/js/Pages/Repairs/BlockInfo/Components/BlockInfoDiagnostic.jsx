import {TextField} from "@mui/material";
import BlockInfoLayout from "@/Pages/Repairs/BlockInfo/Components/BlockInfoLayout.jsx";
import * as React from "react";
import {dateCreate} from "@/shared/helpers/formatDate.js";

const BlockInfoDiagnostic = ({repair}) => {
    if (!repair.is_diagnostic) {
        return null;
    }
    return (
        <BlockInfoLayout title='Diagnostic' date={repair.date_diagnostic}>
            <TextField
                size='small'
                label="Diagostic description"
                defaultValue={repair.diagnostic_description}
                InputProps={{
                    readOnly: true,
                }}
            />
        </BlockInfoLayout>
    );
}

export default BlockInfoDiagnostic;
