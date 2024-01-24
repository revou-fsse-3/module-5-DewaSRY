import { useMutation } from "@tanstack/react-query";
import delCategory from "@fetch/collections/collection-del";

import { queryClient } from "@query/Provider";
export default function useDelCategory(cb?: () => void) {
  return useMutation({
    mutationFn: delCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-collections"],
        refetchType: "none",
      });
      if (cb) {
        cb();
      }
    },
  });
}
