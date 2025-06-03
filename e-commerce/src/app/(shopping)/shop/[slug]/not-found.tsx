import Link from 'next/link';
import { PackageX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <PackageX className="text-6xl text-gray-400 mb-4" />
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
        Product Not Found
      </h1>
      <p className="text-lg text-gray-500 mb-6 max-w-md">
        The product you are looking for does not exist or may have been removed.
      </p>
      <Link href="/shop">
        <span className="inline-block bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90 transition-colors font-semibold">
          Back to Shop
        </span>
      </Link>
    </div>
  );
}
