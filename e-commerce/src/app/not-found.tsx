import Link from 'next/link';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Ghost size={96} className="text-gray-400 mb-6" />
      <h1 className="text-3xl font-bold mb-2 text-gray">
        404 - Page Not Found
      </h1>
      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
