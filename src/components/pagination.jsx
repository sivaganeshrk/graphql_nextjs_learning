"use client";
import React, { useState } from "react";

const Pagination = ({ currentPage, totalPage, currentLimit, onPageLimitChange, onPageChange, pageLimitOptions=[10,20,50,100] }) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-6 text-sm font-medium text-gray-800">
      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        First
      </button>
      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      <span className="px-4 py-1 bg-blue-200 text-black rounded">
        Page: {currentPage}
      </span>
      <select
          id="pageLimit"
          value={currentLimit}
          onChange={(e) => onPageLimitChange(Number(e.target.value))}
          className="px-2 py-1 bg-blue-200 text-black rounded"
        >
          {pageLimitOptions.map((limit) => (
            <option key={limit} value={limit}>
              {limit}
            </option>
          ))}
        </select>
      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        disabled={currentPage === totalPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        disabled={currentPage === totalPage}
        onClick={() => onPageChange(totalPage)}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
