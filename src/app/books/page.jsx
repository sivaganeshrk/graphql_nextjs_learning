'use client'
import BookCard from "@/components/book/card";
import Spinner from "@/components/spinner";
import { GET_BOOK_LISTING } from "@/graphql/client/book";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import CreateOrEditBookModelWrapper from "@/components/book/model_wrapper";

const BookPage = () => {
  const [paginationFilter, setPaginationFilter] = useState({
    page: 1,
    limit: 100
  })

  const [bookFilter, setBookFilter] = useState({})

  const {loading, data, refetch} = useQuery(GET_BOOK_LISTING,{
    variables: {paginationFilter, filter: bookFilter},
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only'
  })

  const handleSuccess = async() =>{
    await refetch()
  }

  
  if(loading) return <Spinner/>
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-4">
      <div className="text-2xl font-bold mb-6 text-white">Book Collection</div>
      <CreateOrEditBookModelWrapper onSuccess={handleSuccess} refreshPageOnSuccess={false}/>
      </div>
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