import {Modal, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function ModalMui({children, open = false, onClose, title = '', width = 'sm'}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '90%',
        overflow: 'scroll',
        boxShadow: 24,
        p: 4,
        backgroundColor: '#f5f5f5',
    };
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Paper maxWidth={width} sx={style} component={Container}>
                {title && (
                    <Typography textAlign='center' variant='h4' sx={{
                        mb: 2,
                        p: 1,
                        borderRadius: 1,
                        boxShadow: 1,
                        backgroundColor: '#fff',
                    }}>{title}</Typography>
                )}
                {children}
            </Paper>
        </Modal>
    );
}
