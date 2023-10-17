import {Head} from '@inertiajs/react';
import DashboardLayout from "@/Pages/DashboardLayout.jsx";

export default function Dashboard({auth}) {
    return (
        <DashboardLayout header={'Komod dashboard'}>
            <div className='container'>
                <div className="row">
                    <div className='col-3'>Menu</div>
                    <div className='col-9'>Content</div>
                </div>
            </div>
        </DashboardLayout>
    );
}
