import {useMutation} from "@tanstack/react-query";
import {router} from "@inertiajs/react";

export default () => useMutation({
    mutationFn: async ({id, props}) => {
        try {
            const {data} = await axios.patch(route('repairs.update.called', id), props);
            return Promise.resolve(data);
        } catch (e) {
            return Promise.reject(e);
        }
    },
    onSuccess: () => {
        router.reload({ only: ['repairs'] })
    }
});
