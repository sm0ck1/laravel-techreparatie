import {useForm, usePage} from '@inertiajs/react';
import BlockDivider from "@/Pages/Components/BlockDivider.jsx";
import InputText from "@/Pages/Components/InputText.jsx";
import * as React from "react";
import {LoadingButton} from "@mui/lab";
import {snackBarStore} from "@/shared/store/snackBarStore.js";
import {enqueueSnackbar} from "notistack";

export default function UpdateProfileInformation() {
    const user = usePage().props.auth.user;

    const form = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = async (e) => {
        e.preventDefault();

        await form.patch(route('profile.update'), {
            onSuccess: () => {
                enqueueSnackbar('Saved', snackBarStore());
            }
        });
    };

    return (
        <section>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <BlockDivider title='Profile Information'>
                    <InputText label='Name' form={form} name='name' props={{fullWidth: true}}/>
                    <InputText label='Email' form={form} name='email' props={{fullWidth: true}}/>
                    <LoadingButton variant='contained' type='submit' color='success'
                                   disabled={form.processing}>Save</LoadingButton>
                </BlockDivider>
            </form>
        </section>
    );
}
