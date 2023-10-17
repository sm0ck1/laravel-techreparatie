import {proxy} from "valtio";

export const editStore = proxy({
    edit: false,
    data: {},
    clear() {
        editStore.edit = false;
        editStore.data = {};
    }
});
