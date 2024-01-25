/* eslint-disable react/display-name */
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface ProviderProps extends HTMLAttributes<HTMLDivElement> {}
type ProviderComponents = FC<ProviderProps> & PropsWithChildren;
const Provider: ProviderComponents = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

type withWrapperComponent = (Component: FC) => FC;
const withWrapper: withWrapperComponent = (Component) => () => {
  return (
    <Provider>
      <Component />
    </Provider>
  );
};
export default Provider;
export { queryClient, withWrapper };
