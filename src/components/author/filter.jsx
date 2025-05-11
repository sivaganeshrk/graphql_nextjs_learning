"use client";
import { useState } from "react";

const filter = ({ filter = {}, onApply }) => {
  const [authorFilter, setAuthorFilter] = useState(filter);

  const isFilterActive = () => {
    return authorFilter.name?.trim();
  };

  const handleApply = () => {
    onApply(authorFilter);
  };

  const handleReset = () => {
    const cleared = {};
    setAuthorFilter(cleared);
    onApply(cleared);
  };

  return (
    <div className="bg-white rounded-md shadow p-4 mb-6 flex flex-col sm:flex-row gap-4 sm:items-end">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Search Name"
          className="border px-3 py-2 rounded w-64"
          value={authorFilter.name || ""}
          onChange={(e) =>
            setAuthorFilter({ ...authorFilter, name: e.target.value })
          }
        />
      </div>

      {isFilterActive() && (
        <div className="flex gap-2 mt-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleApply}
        >
          Apply Filter
        </button>
        <button
          className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
          onClick={handleReset}
        >
          Reset Filter
        </button>
      </div>
      )}
    </div>
  );
};

export default filter;
