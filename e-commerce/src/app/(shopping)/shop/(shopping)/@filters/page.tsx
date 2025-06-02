import FilterContent from "@/components/filter/filter-content";
import { Skeleton } from "@/components/ui/skeleton";
import { SlidersHorizontal } from "lucide-react";
import { Suspense } from "react";

export default async function FiltersPage() {
  return (
		<div className='h-fit w-full space-y-6 rounded-[1.25rem] border-border-foreground px-6 py-5 max-lg:hidden lg:mb-4 lg:max-w-[18.5rem] lg:border'>
			<div className='flex items-center justify-between'>
				<h2 className='text-xl font-bold'>Filters</h2>
				<SlidersHorizontal className='size-6 rotate-90 bg-background text-gray' />
			</div>
			<Suspense fallback={<Skeleton className='h-10 w-full' />}>
				<FilterContent />
			</Suspense>
		</div>
	);
}
