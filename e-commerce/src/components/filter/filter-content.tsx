import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";
import CategoryFilter from "./category-filter";
import PriceFilter from "./price-filter";

const FilterContent = () => {
  return (
    <>
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <div className="w-full">
          <Separator className="bg-border-foreground" />
        </div>
        <CategoryFilter />
      </Suspense>
      <div className="w-full">
        <Separator className="bg-border-foreground" />
      </div>
      <PriceFilter />
    </>
  );
};

export default FilterContent;
