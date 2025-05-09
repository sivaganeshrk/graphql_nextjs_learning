'use client'

import { GET_AUTHORS_DROPDOWN } from '@/graphql/client/author'
import { useQuery } from '@apollo/client'
import React from 'react'
import Spinner from '../spinner'

const AuthorSelect = ({ selected = '' ,onSelect }) => {

  const {data,loading, error} = useQuery(GET_AUTHORS_DROPDOWN,{
    variables: {paginationFilter:{page:1, limit:200}}
  })
  if(error) return <p>Loading Failed</p>
  if(loading) return <Spinner/>
  return (
    <div className='w-full'>
      <select name="author" id="author" value={selected} onChange={(e)=> onSelect(e.target.value)} className='w-full border px-3 py-2 rounded'>
        <option value="">-- Choose an author --</option>
        {
          data.authors.items.map((author) =>(
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default AuthorSelect