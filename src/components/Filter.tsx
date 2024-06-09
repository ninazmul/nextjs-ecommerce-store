import React from 'react'

export default function Filter() {
  return (
    <div className="mt-12 flex justify-between gap-2 md:gap-6 flex-wrap">
      <select
        name="type"
        id=""
        className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange/20 outline-none"
      >
        <option value="">Type</option>
        <option value="physical">Physical</option>
        <option value="digital">Digital</option>
      </select>
      <input
        type="text"
        name="min"
        placeholder="min price"
        className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-orange outline-none"
      />
      <input
        type="text"
        name="max"
        placeholder="max price"
        className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-orange outline-none"
      />
      <select
        name="type"
        id=""
        className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange/20 outline-none"
      >
        <option value="">Size</option>
        <option value="physical">Physical</option>
        <option value="digital">Digital</option>
      </select>
      <select
        name="type"
        id=""
        className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange/20 outline-none"
      >
        <option value="">Color</option>
        <option value="physical">Physical</option>
        <option value="digital">Digital</option>
      </select>
      <select
        name="type"
        id=""
        className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange/20 outline-none"
      >
        <option value="">Category</option>
        <option value="physical">Physical</option>
        <option value="digital">Digital</option>
      </select>
      <select
        name="type"
        id=""
        className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange/20 outline-none"
      >
        <option value="">All Filters</option>
        <option value="physical">Physical</option>
        <option value="digital">Digital</option>
      </select>
      <select
        name="type"
        id=""
        className="py-2 px-4 rounded-2xl text-xs font-medium bg-orange/20 outline-none"
      >
        <option value="">Sort By</option>
        <option value="">Price (low to high)</option>
        <option value="">Price (high to low)</option>
        <option value="">Newest</option>
        <option value="">Oldest</option>
      </select>
    </div>
  );
}
