'use client';

import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/common/ui/button';

export default function Error() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center max-w-md w-full">
        <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Failed to fetch data. Please try again later!
        </p>
        <Button
          onClick={() => window.location.reload()}
          variant="destructive"
          className="mt-2 w-full"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
