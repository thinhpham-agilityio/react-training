import { SlidersHorizontal, X } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import FilterContent from "./filter-content";

const FilterDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <SlidersHorizontal className="size-4 rotate-90 text-secondary" />
      </DrawerTrigger>

      <DrawerContent className="pb-6 lg:hidden">
        <DrawerHeader className="flex flex-row items-center justify-between">
          <DrawerTitle>Filter</DrawerTitle>

          <DrawerClose>
            <X />
          </DrawerClose>
        </DrawerHeader>

        <div className="px-4 flex flex-col gap-3">
          <FilterContent />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
