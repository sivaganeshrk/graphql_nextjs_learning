'use client'

import React, { useState, useEffect, useRef } from 'react'
import { GET_AUTHORS_DROPDOWN } from '@/graphql/client/author'
import { useQuery } from '@apollo/client'

const AuthorSelect = ({ selected = '', onSelect }) => {
  const [open, setOpen] = useState(false)
  const [selectedAuthorName, setSelectedAuthorName] = useState('')
  const dropdownRef = useRef(null)

  const { data, loading, error } = useQuery(GET_AUTHORS_DROPDOWN, {
    variables: { paginationFilter: { page: 1, limit: 200 } },
    fetchPolicy: 'network-only',
  })

  const authors = data?.authors?.items || []
  useEffect(() => {
    if (selected && authors.length > 0) {
      const match = authors.find((a) => a.id === selected)
      if (match) setSelectedAuthorName(match.name)
    }
  }, [authors, selected])

  const handleSelect = (id, name) => {
    onSelect(id)
    setSelectedAuthorName(name)
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='relative w-full' ref={dropdownRef}>
      <button
        className='w-50 border px-3 py-2 rounded text-left bg-white'
        onClick={() => {
          setOpen(!open)
        }}
      >
        {selected
          ? selectedAuthorName || 'Loading...'
          : 'Choose an author'}
      </button>

      {open && (
        <div className='absolute z-10 mt-1 w-full rounded border bg-white shadow max-h-60 overflow-auto'>
          {loading && (
            <div className='flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-500'>
              <svg
                className='h-4 w-4 animate-spin text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                />
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8v8H4z'
                />
              </svg>
              Loading authors...
            </div>
          )}

          {error && (
            <div className='px-4 py-2 text-sm text-red-500'>
              Failed to load authors.
            </div>
          )}

          {!loading && !error && authors.map((author) => (
            <div
              key={author.id}
              onClick={() => handleSelect(author.id, author.name)}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                selected === author.id ? 'bg-blue-50 font-semibold' : ''
              }`}
            >
              {author.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AuthorSelect
