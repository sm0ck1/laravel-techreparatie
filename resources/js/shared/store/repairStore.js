import {proxy} from "valtio";

export const repairStore = proxy({
    employees: [],
    groupWhereOrdered: [],
    groupDevices: [],
});
