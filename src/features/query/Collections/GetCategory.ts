import { useQuery } from "@tanstack/react-query";
import GetCategory, {
  getCollectionsResult,
} from "@fetch/collections/collection-get-one";
export default function useGetCategory(id: string) {
  return useQuery<getCollectionsResult, Error>({
    queryFn: () => GetCategory(id),
    queryKey: ["category"],
    refetchInterval: false,
  });
}
