'use client'

import React from 'react'

const ErrorPage = ({ message = 'Something went wrong.', onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-12 text-center">
      <div className="mb-4">
        <svg
          className="h-16 w-16 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01M4.93 19h14.14c1.5 0 2.49-1.59 1.75-2.93L13.75 4.93a2 2 0 00-3.5 0L3.18 16.07C2.44 17.41 3.43 19 4.93 19z"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-semibold text-red-600">Error</h2>
      <p className="mt-2 text-white">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
        >
          Retry
        </button>
      )}
    </div>
  )
}

export default ErrorPage
