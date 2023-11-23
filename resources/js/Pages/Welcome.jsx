import {Head, Link} from '@inertiajs/react';
import {Button} from "@mui/material";

export default function Welcome({auth, laravelVersion, phpVersion}) {
    return (
        <>
            <Head title="Welcome"/>
            <>
                <Button as={Link} href={route('login')} className="mr-3">
                    Log in
                </Button>
                <Button as={Link} href={route('register')}>Register</Button>
            </>
        </>
    );
}
