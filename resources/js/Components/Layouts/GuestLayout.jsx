import {Box} from "@mui/material";

export default function Guest({children}) {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
        }}>
            {children}
        </Box>
    );
}
