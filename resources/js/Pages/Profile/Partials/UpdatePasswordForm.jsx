import * as React from 'react';
import {useRef} from 'react';
import {useForm} from '@inertiajs/react';
import BlockDivider from "@/Pages/Components/BlockDivider.jsx";
import InputText from "@/Pages/Components/InputText.jsx";
import {LoadingButton} from "@mui/lab";
import {snackBarStore} from "@/shared/store/snackBarStore.js";
import {enqueueSnackbar} from "notistack";

export default function UpdatePasswordForm() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const form = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        form.put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => {
                form.reset();
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
        <section>

            <form onSubmit={updatePassword}>
                <BlockDivider title='Update Password'>
                    <InputText label='Current password' form={form} name='current_password'
                               props={{fullWidth: true, type: 'password'}}/>
                    <InputText label='New password' form={form} name='password'
                               props={{fullWidth: true, type: 'password'}}/>
                    <InputText label='Confirm Password' form={form} name='password_confirmation'
                               props={{fullWidth: true, type: 'password'}}/>
                    <LoadingButton color='success' variant='contained' type='submit'
                                   disabled={form.processing}>Save</LoadingButton>
                </BlockDivider>


            </form>
        </section>
    );
}
