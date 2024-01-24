import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from "react";
import { CollectionsProps } from "@utils/collections.type";
import useCategoryFilter from "./useCategoryFilter";
const initialValue = {
  catagories: [] as CollectionsProps[],
};

const CategoryContext = createContext(initialValue);
CategoryContext.displayName = " Category context";
interface ProviderProps extends HTMLAttributes<HTMLDivElement> {
  data: CollectionsProps[];
}
type ProviderComponents = FC<ProviderProps> & PropsWithChildren;
const Provider: ProviderComponents = ({ data, children }) => {
  const { category, filterCategory } = useCategoryFilter();

  useEffect(() => {
    filterCategory(data);
  }, [data, filterCategory]);

  return (
    <CategoryContext.Provider
      value={{
        catagories: category,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

type withWrapperComponent = (Component: FC) => FC<ProviderProps>;
const withWrapper: withWrapperComponent = (Component) => (props) => {
  return (
    <Provider {...props}>
      <Component />
    </Provider>
  );
};

export { Provider, withWrapper };

export default function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) throw Error("use hook inside  Category provider");
  return context;
}
