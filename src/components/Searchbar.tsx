"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Searchbar() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 border border-orange rounded-md p-2 flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="rounded-md flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <FiSearch className="text-2xl font-bold text-orange" />
      </button>
    </form>
  );
}
