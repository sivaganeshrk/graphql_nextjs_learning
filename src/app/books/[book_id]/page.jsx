'use client'
import BookDetailed from "@/components/book/detailed";
import AuthorDetailed from "@/components/author/detailed";
import CreateOrEditBookModelWrapper from "@/components/book/model_wrapper";
import DeleteConfirmationModel from "@/components/delete_confr_model";
import ReviewCard from "@/components/review/card";
import { useState, use } from "react";
import { DELETE_BOOK, GET_BOOK, GET_BOOK_LISTING } from "@/graphql/client/book";
import Spinner from "@/components/spinner";
import { useMutation, useQuery } from "@apollo/client"
import {useRouter} from "next/navigation"
import apolloClient from "@/graphql/client/client";
import AddReviewModel from "@/components/review/model";

const BookDetailedPage = ({ params }) => {
  const { book_id } = use(params);
  const router = useRouter()
  const [paginationFilter, setPaginationFilter] = useState({
    page:1,
    limit:10
  })
  const {loading, data, error, refetch} = useQuery(GET_BOOK, {
    variables: {paginationFilter, bookId: book_id, id:book_id},
  })

  const [deleteBook, DeleteBookEvent] = useMutation(DELETE_BOOK,
    {refetchQueries: [{query: GET_BOOK_LISTING}]}
  )

  const handleDelete = async() =>{
    await deleteBook({variables:{id:book_id}})
    router.push("/books")
  }

  if(loading || DeleteBookEvent.loading) return <Spinner />
  if(error) <ErrorPage onRetry={refetch}/>

  return (
    <div className="px-5 py-5">
      <div className="py-5">
        <div className="flex justify-end gap-3">
          <CreateOrEditBookModelWrapper
            book={{...data.book, author_id: data.book.author.id}}
            refreshPageOnSuccess={true}
          />
          <DeleteConfirmationModel onConfirm={handleDelete}/>
        </div>
      </div>
      <div className="pl-5">
        <BookDetailed book={data.book} />
      </div>
      <div className="pl-5">
        <AuthorDetailed author={data.book.author} />
      </div>
      <div className="pl-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-white">Reviews</h1>
          <AddReviewModel book_id={book_id}/>
        </div>
        {
          data.userReviews.items.map((review)=>(
            <ReviewCard key={review.id} review={review}/>
          ))
        }
      </div>
    </div>
  );
};

export default BookDetailedPage;
