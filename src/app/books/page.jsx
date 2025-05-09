'use client'
import BookCard from "@/components/book/card";
import Spinner from "@/components/spinner";
import { GET_BOOK_LISTING } from "@/graphql/client/book";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const BookPage = () => {
  const [paginationFilter, setPaginationFilter] = useState({
    page: 1,
    limit: 100
  })

  const [bookFilter, setBookFilter] = useState({})

  const {loading, data} = useQuery(GET_BOOK_LISTING,{
    variables: {paginationFilter, filter: bookFilter},
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only'
  })
  
  if(loading) return <Spinner/>
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-2xl font-bold mb-6">Book Collection</div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        data.books.items.map((book)=>(
          <BookCard key={book.id} book={book}/>
        ))
      }
      </div>
      </div>
  )
}

export default BookPage