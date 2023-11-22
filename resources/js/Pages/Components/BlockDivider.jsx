import {Box, Divider, Typography} from "@mui/material";
import * as React from "react";

const BlockDivider = ({children, title, other = {}}) => {
    return (
        <Box sx={{
            p: 1,
            mb: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: '#fff',
        }}>
            <Typography variant='h5' sx={{p:2}}>{title}</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, p: 1, mb: 1, ...other}}>
                {children}
            </Box>
        </Box>
    );
}

export default BlockDivider;
