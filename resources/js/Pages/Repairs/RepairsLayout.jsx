import DashboardLayout from "@/Pages/DashboardLayout.jsx";
import React from "react";

const RepairsLayout = ({header, children}) => {

    return (
        <DashboardLayout header={header ?? 'Repairs'}>
            {children}
        </DashboardLayout>
    );
}

export default RepairsLayout;
