import { useLocation } from "react-router-dom";
import { breadcrumbsNames } from "./breadcrumbsConfig";

export type BreadcrumbsItem = {
  label: string;
  current: boolean;
  route: string;
};

export const useBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  const items: BreadcrumbsItem[] = pathnames.map((_, index) => {
    const route = pathnames.slice(0, index + 1).join('/');

    return {
      label: breadcrumbsNames[route],
      current: route === location.pathname.slice(1),
      route: `/${route}`,
    };
  });

  return {
    items,
  };
}