import React from "react";
import {router} from "@inertiajs/react";

const HeaderMenu = () => {
    const handleSelect = ({key}) => {
        if (route().has(key)) {
            router.visit(route(key))
        }
    }

    return (
        <Menu theme="dark"
              onSelect={handleSelect}
              mode="horizontal"
              defaultSelectedKeys={[route().current()]}
              items={[
                  {
                      key: 'dashboard',
                      label: `Dashboard`,
                  },
                  {
                      key: 'repairs.index',
                      label: "Repairs"
                  },
                  {
                      key: 3,
                      label: "Employees"
                  },
                  {
                      key: 4,
                      label: "Settings"
                  },
              ]
              }/>
    );
}

export default HeaderMenu;
