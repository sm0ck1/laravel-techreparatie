export const snackBarStore = (props = {}) => {
    return {
        variant: 'success',
        autoHideDuration: 3000,
        anchorOrigin: {vertical: 'top', horizontal: 'center',},
        ...props
    }
};
