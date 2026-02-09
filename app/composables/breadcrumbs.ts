import type { BreadcrumbItem } from "@nuxt/ui";

export const useBreadcrumbs = (val?: BreadcrumbItem[]) => {
  const defaultItems: BreadcrumbItem[] = [
    {
      label: "Home",
      to: "/",
    },
  ];

  const items = useState<BreadcrumbItem[]>("breadcrumbs", () => defaultItems);

  items.value = val ? [...defaultItems, ...val] : [...defaultItems];

  return items;
};
