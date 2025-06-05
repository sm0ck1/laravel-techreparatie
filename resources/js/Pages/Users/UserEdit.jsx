import DashboardLayout from "@/Pages/DashboardLayout.jsx";
import React, {useRef} from "react";
import {Box, Switch} from "@mui/material";
import {useForm, router} from "@inertiajs/react";
import {enqueueSnackbar} from "notistack";
import {snackBarStore} from "@/shared/store/snackBarStore.js";
import BlockDivider from "@/Pages/Components/BlockDivider.jsx";
import InputText from "@/Pages/Components/InputText.jsx";
import {LoadingButton} from "@mui/lab";

const UserEdit = ({user}) => {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const form = useForm({
        password: '',
        password_confirmation: '',
        access: user.access,
    });

    const updatePassword = (e) => {
        e.preventDefault();

        form.patch(route('employees.update', [
            user,
        ]), {
            preserveScroll: true,
            onSuccess: () => {
                router.reload({only: ['user']});
                enqueueSnackbar('Saved', snackBarStore());
            },
            onError: (errors) => {
                if (errors.password) {
                    form.reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    form.reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <DashboardLayout header={'Employees'}>
            <Box>
                <h1>User {user.name}</h1>

                <section>

                    <form onSubmit={updatePassword}>
                        <BlockDivider title='Update Password'>
                            <InputText label='New password' form={form} name='password'
                                       props={{fullWidth: true, type: 'password'}}/>
                            <InputText label='Confirm Password' form={form} name='password_confirmation'
                                       props={{fullWidth: true, type: 'password'}}/>

                        </BlockDivider>

                        <BlockDivider title='Access'>
                            <Switch
                                checked={form.data.access === 1}
                                onChange={(e) => form.setData('access', e.target.checked ? 1 : 0)}
                            />
                        </BlockDivider>

                        <LoadingButton color='success' variant='contained' type='submit'
                                       disabled={form.processing}>Save</LoadingButton>
                    </form>
                </section>
            </Box>
        </DashboardLayout>
    );
}

export default UserEdit;
