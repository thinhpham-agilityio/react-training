'use client';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/common/ui/carousel';

import { cn } from '@/lib/utils';

interface ProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: ProductImagesProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleThumbClick = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="grid lg:grid-cols-[152px_1fr] gap-4 items-center">
      <Carousel
        className="mt-10 max-w-xs flex-col hidden lg:flex"
        opts={{
          align: 'start'
        }}
        orientation="vertical"
      >
        <CarouselContent className="flex gap-2 mt-0 max-h-[200px] lg:max-h-[300px] xl:max-h-[400px]">
          {images.map((imageUrl, index) => (
            <CarouselItem
              key={index}
              className={cn(
                'basis-1/5 cursor-pointer pt-1 bg-background-image rounded-lg',
                current === index + 1 ? 'opacity-100 border-1' : 'opacity-50'
              )}
              onClick={() => handleThumbClick(index)}
            >
              <Image
                src={imageUrl}
                alt={`Product image ${index + 1}`}
                width={150}
                height={167}
                className="w-auto h-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel setApi={setApi} className="flex items-center">
        <CarouselContent>
          {images.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <div className="relative bg-background-image rounded-lg p-0">
                <Image
                  src={imageUrl}
                  alt={`Product image ${index + 1}`}
                  width={600}
                  height={600}
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel className="mt-4 w-full lg:hidden">
        <CarouselContent className="flex my-1 ml-0 gap-2">
          {images.map((imageUrl, index) => (
            <CarouselItem
              key={index}
              className={cn(
                'basis-1/3 cursor-pointer pt-1 bg-background-image rounded-lg p-0',
                current === index + 1 ? 'opacity-100 border-1' : 'opacity-50'
              )}
              onClick={() => handleThumbClick(index)}
            >
              <div className="relative bg-background-image rounded-lg flex items-center justify-center">
                <Image
                  src={imageUrl}
                  alt={`Product image ${index + 1}`}
                  width={150}
                  height={150}
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
