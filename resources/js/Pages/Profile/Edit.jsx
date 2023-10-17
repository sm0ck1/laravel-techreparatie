import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

import DashboardLayout from "@/Pages/DashboardLayout.jsx";
import React from "react";
import Container from "@mui/material/Container";

export default function Edit() {
    return (
        <DashboardLayout header={'Profile'}>
            <Container sx={{py: 3}}>
                <UpdateProfileInformationForm/>

                <UpdatePasswordForm />
            </Container>
        </DashboardLayout>
    );
}
