'use client';
import { useState } from 'react';
import AuthorSelect from '../author/dropdown';

const BookFilter = ({ filter = {}, onApply }) => {
  const [bookFilter, setBookFilter] = useState(filter);

  const isFilterActive = () => {
    return bookFilter.title?.trim() || bookFilter.author_id;
  };

  const handleApply = () => {
    onApply(bookFilter);
  };

  const handleReset = () => {
    const cleared = {};
    setBookFilter(cleared);
    onApply(cleared)
  };

  return (
    <div className="bg-white rounded-md shadow p-4 mb-6 flex flex-col sm:flex-row gap-4 sm:items-end">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          placeholder="Search Title"
          className="border px-3 py-2 rounded w-64"
          value={bookFilter.title || ''}
          onChange={(e) =>
            setBookFilter({ ...bookFilter, title: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Author</label>
        <AuthorSelect
          selected={bookFilter.author_id}
          onSelect={(value) =>
            setBookFilter({ ...bookFilter, author_id: value })
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

export default BookFilter;
