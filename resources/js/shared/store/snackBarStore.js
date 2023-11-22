export const snackBarStore = (props = {}) => {
    return {
        variant: 'success',
        autoHideDuration: 3000,
        anchorOrigin: {vertical: 'bottom', horizontal: 'center',},
        ...props
    }
};
