import { useMutation } from "@tanstack/react-query";
import createCategory, {
  CreateCollectionsResult as Response,
} from "@fetch/collections/collection-create";
import { queryClient } from "@query/Provider";

type Callback = (value: Response) => void;
export default function useCreateCategory(cb?: Callback) {
  return useMutation({
    mutationFn: createCategory,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        refetchType: "none",
        queryKey: ["get-all-collections"],
      });
      if (cb) {
        cb(data);
      }
    },
  });
}
