import { useRef, useState } from 'react';
import { PaginationEllipsis } from '../ui/pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import useOutsideClick from '@/hooks/use-outside-click';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command';
import { cn } from '@/lib/utils';
import useBuildLink from '@/hooks/use-build-link';

interface PaginationSelectProps {
  totalPage: number;
}

const PaginationSelect = ({ totalPage }: PaginationSelectProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { buildLink } = useBuildLink();
  const dataRef = useRef<HTMLDivElement>(null);
  const page = searchParams.get('page') ?? '1';
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const [isShowSelect, setIsShowSelect] = useState(false);
  const [selectedPage, setSelectedPage] = useState(page);
  const [open, setOpen] = useState(false);

  const handleEllipsisClick = () => {
    setIsShowSelect(true);
  };

  const handleOutsideClick = () => {
    setIsShowSelect(false);
  };

  const handleSelectChange = (currentValue: string) => {
    setSelectedPage(currentValue);
    setOpen(false);
    const newUrl = buildLink([{ key: 'page', value: currentValue }]);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(newUrl, {
      scroll: false // Prevents scrolling to top on click
    });
  };

  useOutsideClick([ref1, ref2], handleOutsideClick);

  if (!isShowSelect) {
    return <PaginationEllipsis onClick={handleEllipsisClick} />;
  }

  return (
    <div ref={ref1} className="relative z-20">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[60px] justify-between"
          >
            {selectedPage || 'Select page'}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[60px] p-0" ref={ref2}>
          <Command>
            <CommandList>
              <CommandGroup>
                {Array.from({ length: totalPage }, (_, index) => ({
                  value: (index + 1).toString()
                })).map((page) => (
                  <CommandItem
                    key={page.value}
                    value={page.value}
                    onSelect={handleSelectChange}
                    ref={dataRef}
                  >
                    {page.value}
                    <Check
                      className={cn(
                        'ml-auto',
                        selectedPage === page.value
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PaginationSelect;
