'use client';

import { useCallback, useEffect, useState } from 'react';
import { Slider } from '@/components/common/ui/slider';
import { MAX_PRICE, MIN_PRICE } from '@/constants/filter';
import { useRouter, useSearchParams } from 'next/navigation';
import useBuildLink from '@/hooks/use-build-link';
import { Button } from '@/components/common/ui/button';

const PriceFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const minPrice = searchParams.get('min') || MIN_PRICE;
  const maxPrice = searchParams.get('max') || MAX_PRICE;

  const [value, setValue] = useState([Number(minPrice), Number(maxPrice)]);
  const [from, to] = value;
  const { buildLink } = useBuildLink();

  const handleClickApply = useCallback(() => {
    const newUrl = buildLink([
      { key: 'min', value: from },
      { key: 'max', value: to }
    ]);

    router.push(newUrl, {
      scroll: false // Prevents scrolling to top on click
    });
  }, [from, to, buildLink, router]);

  const handleClickReset = useCallback(() => {
    setValue([MIN_PRICE, MAX_PRICE]);
    // Clear the price filters in the URL
    const newUrl = buildLink([
      { key: 'min', value: undefined },
      { key: 'max', value: undefined }
    ]);

    router.push(newUrl, {
      scroll: false // Prevents scrolling to top on click
    });
  }, [buildLink, router]);

  useEffect(() => {
    // Update the slider value when minPrice or maxPrice changes
    setValue([Number(minPrice), Number(maxPrice)]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [minPrice, maxPrice]);

  return (
    <div>
      <h2 className="text-xl font-bold">Price</h2>
      <div className="w-full mx-auto">
        <div className="w-full flex items-center justify-between gap-2">
          <span className="text-sm text-muted-foreground">{MIN_PRICE}</span>
          <Slider
            value={value}
            onValueChange={setValue}
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={1}
          />
          <span className="text-sm text-muted-foreground">{MAX_PRICE}</span>
        </div>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {from} - {to}
        </p>
      </div>
      <div className="grid gap-2 mt-4 grid-cols-2">
        <Button
          variant="default"
          onClick={handleClickApply}
          disabled={from === Number(minPrice) && to === Number(maxPrice)}
        >
          Apply
        </Button>
        <Button
          variant="ghost"
          onClick={handleClickReset}
          disabled={minPrice === MIN_PRICE && maxPrice === MAX_PRICE}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default PriceFilter;
