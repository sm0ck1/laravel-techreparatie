import {useMutation} from "@tanstack/react-query";
import {router} from "@inertiajs/react";

export default () => useMutation({
    mutationFn: async ({id, props}) => {
        try {
            const {data} = await axios.patch(route('repairs.update', id), props);
            return Promise.resolve(data);
        } catch (e) {
            return Promise.reject(e.response.data.errors);
        }
    },
    onSuccess: () => {
        router.reload({ only: ['repairs'] })
    }
});
