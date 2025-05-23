import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useBuildLink = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const buildLink = useCallback((key: string = 'page', value: string | number = 1) => {
    if (!searchParams) return `${pathname}?${key}=${value}`;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, String(value));
    return `${pathname}?${newSearchParams.toString()}`;
  }, [searchParams, pathname]);

  return { buildLink };
}

export default useBuildLink;
