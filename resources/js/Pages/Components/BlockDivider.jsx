import {Box, Divider} from "@mui/material";
import * as React from "react";

const BlockDivider = ({children, title, other = {}}) => {
    return (
        <Box sx={{
            p: 1,
            mb: 2,
            borderRadius: 1,
            boxShadow: 1,
            bgcolor: '#f2f2f2',
        }}>
            <Divider textAlign="left"><h3>{title}</h3></Divider>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, p: 1, mb: 1, ...other}}>
                {children}
            </Box>
        </Box>
    );
}

export default BlockDivider;
