import { useMutation } from "@tanstack/react-query";
import updateCategory from "@fetch/collections/collection-update";
import { queryClient } from "@query/Provider";

export default function useUpdateCategory(cb?: () => void) {
  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        refetchType: "none",
        queryKey: ["get-all-collections"],
      });
      if (cb) {
        cb();
      }
    },
  });
}
