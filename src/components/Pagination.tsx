"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Pagination({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between mt-12 w-full">
      <button
        className="rounded-m bg-orange text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-orange/50"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-m bg-orange text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-orange/50"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
