import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

const ConfirmDialog = (props) => {
    const { title, children, open, setOpen, onConfirm } = props;
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-dialog"
        >
            <DialogTitle id="confirm-dialog">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() => setOpen(false)}
                    color="primary"
                >
                    No
                </Button>
                <Button
                    variant="contained"
                    color='error'
                    onClick={() => {
                        setOpen(false);
                        onConfirm();
                    }}
                >
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
