"use client";
import AuthorDetailed from "@/components/author/detailed";
import CreateOrEditAuthorModel from "@/components/author/model";
import DeleteConfirmationModel from "@/components/delete_confr_model";
import Spinner from "@/components/spinner";
import BookCard from "@/components/book/card";
import {
  DELETE_AUTHOR,
  GET_AUTHOR,
  GET_AUTHORS_DROPDOWN,
  GET_AUTHORS_LISTING,
} from "@/graphql/client/author";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import Pagination from "@/components/pagination";
import ErrorPage from "@/components/error";

const AuthorDetailedPage = ({ params }) => {
  const { author_id } = use(params);
  const router = useRouter();
  const [paginationFilter, setPaginationFilter] = useState({
    page: 1,
    limit: 10,
  });
  const getAuthorReqPayload = {
    paginationFilter,
    authorId: author_id,
    filter: { author_id },
  };
  const { loading, data, refetch, error} = useQuery(GET_AUTHOR, {
    variables: getAuthorReqPayload,
  });

  const [deleteAuthor, deleteAuthorEvent] = useMutation(DELETE_AUTHOR, {
    refetchQueries: [{ query: GET_AUTHORS_LISTING },{query: GET_AUTHORS_DROPDOWN}],
  });

  const handleDelete = async () => {
    await deleteAuthor({ variables: { author_id } });
    router.push("/authors");
  };

  const handleSuccess = async () => {
    await refetch(getAuthorReqPayload);
  };

  const handlePageChange = async (pageNumber) => {
    setPaginationFilter({...paginationFilter, page:pageNumber})
    await handleSuccess()
  }

  const handlePagelimitChange = async (pageLimit) => {
    setPaginationFilter({...paginationFilter, limit:pageLimit})
    await handleSuccess()
  }


  if (loading || deleteAuthorEvent.loading) return <Spinner />;
  if(error) <ErrorPage onRetry={refetch}/>

  return (
    <div className="px-5 py-5">
      <div className="py-5">
        <div className="flex justify-end gap-3">
          <CreateOrEditAuthorModel author={data.author} refreshPageOnSuccess={false} onSuccess={handleSuccess}/>
          <DeleteConfirmationModel onConfirm={handleDelete}/>
        </div>
      </div>
      <div className="pl-5">
        <AuthorDetailed author={data.author} />
      </div>
      <div className="px-5 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.books.items.map((book) => (
          <BookCard key={book.id} book={book} showAuthor={false} />
        ))}
      </div>
      <Pagination
        currentPage={data.books.currentPage}
        totalPage={data.books.totalPage}
        currentLimit={data.books.currentLimit}
        onPageChange={handlePageChange}
        onPageLimitChange={handlePagelimitChange}
      />
    </div>
  );
};

export default AuthorDetailedPage;
