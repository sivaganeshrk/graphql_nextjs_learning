'use client'

import { GET_AUTHORS_DROPDOWN } from '@/graphql/client/author'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import Spinner from '../spinner'

const AuthorSelect = ({ selected = '' ,onSelect }) => {
  const [isOpened, setIsOpened] = useState(false);

  const {data,loading, error,refetch} = useQuery(GET_AUTHORS_DROPDOWN,{
    variables: {paginationFilter:{page:1, limit:200}},
    skip: !isOpened,
    fetchPolicy: 'network-only'
  })

  const handleFocus = async () => {
    if (!isOpened) {
      setIsOpened(true);
      await refetch();
    }
  }

  // if(error) return <p>Loading Failed</p>
  // if(loading) return <Spinner/>
  return (
    <div className='w-full'>
      <select name="author" id="author" value={selected} onChange={(e)=> onSelect(e.target.value)} onFocus={handleFocus} className='w-full border px-3 py-2 rounded'>
      <option value=''>
      {error
            ? 'Failed to load authors'
            : loading
            ? 'Loading authors...'
            : '-- Choose an author --'}
        </option>
        {!loading &&
          !error &&
          data?.authors?.items?.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
      </select>
    </div>
  )
}

export default AuthorSelect