import {router} from "@inertiajs/react";

export const handlePatch = async (repair, data, path = 'repairs.update') => {
    const res = await axios.patch(route(path, {
        'repair': repair.id,
    }), data);
    if (res.status === 200) {
        router.reload({only: ['repairs']});
    }
    return res;
}

