import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@query/Provider";
import FetchAllCategory, {
  collectionGetAllResponse,
} from "@fetch/collections/collection-get-all";
import { CollectionsProps } from "@utils/collections.type";
export default function useGetAllCategory(page = 1) {
  const query = useQuery<collectionGetAllResponse, Error>({
    queryKey: ["get-all-collections"],
    queryFn: ({ signal }) => FetchAllCategory(page, signal),
    refetchInterval: false,
  });

  let data: CollectionsProps[] = [];
  if (query.data && query.isSuccess) {
    const categoryData = query.data.data;
    data = categoryData.filter((d) => d.id.trim());
    const mapQueryData = data.map((d) => `category-${d.id}}`);
    queryClient.setQueryData(mapQueryData, categoryData);
  }

  const queryData = {
    ...query.data,
    data,
  };

  return {
    ...query,
    data: queryData,
  };
}
