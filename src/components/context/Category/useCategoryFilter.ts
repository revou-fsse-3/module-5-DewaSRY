import { useState, useRef, useCallback } from "react";
import { CollectionsProps as Category } from "@utils/collections.type";
export default function useCategoryFilter() {
  const categoryId = useRef<string[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const filterCategory = (data: Category[]) => {
    const filterData = data.filter((c) => !categoryId.current.includes(c.id));
    setCategory((prev) => [...filterData, ...prev]);
    const newIdMap = filterData.map((c) => c.id.trim());
    categoryId.current = [...categoryId.current, ...newIdMap];
  };
  return {
    category,
    filterCategory: useCallback(filterCategory, []),
  };
}
