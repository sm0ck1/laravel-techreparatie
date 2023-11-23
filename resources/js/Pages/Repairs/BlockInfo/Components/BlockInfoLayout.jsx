import {Box, Divider, Typography} from "@mui/material";
import * as React from "react";

const BlockInfoLayout = ({title, date, children}) => {
    return (
        <Box>
            <Typography variant='h6' textAlign={'center'}>{title}</Typography>
            {date &&
                <Typography variant='subtitle1' textAlign={'center'}>{date}</Typography>
            }
            <Divider/>
            <Box sx={{margin: 3, gap: 3, display: 'flex', flexDirection: 'column'}}>
                {children}
            </Box>
        </Box>

    );
}

export default BlockInfoLayout;
