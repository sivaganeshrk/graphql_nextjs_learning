'use client'
import AuthorCard from "@/components/author/card";
import CreateOrEditAuthorModel from "@/components/author/model"
import Pagination from "@/components/pagination";
import Spinner from "@/components/spinner";
import AuthorFilter from "@/components/author/filter"
import { GET_AUTHORS_LISTING } from "@/graphql/client/author";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const AuthorPage = () => {
  const [paginationFilter, setPaginationFilter] = useState({
    page: 1,
    limit: 10
  })

  const [filter, setFilter] = useState({})

  const {loading, data, refetch} = useQuery(GET_AUTHORS_LISTING,{
    variables: { paginationFilter, filter: filter },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only'
  })

  const handleSuccess = async() => {
    await refetch({ paginationFilter, filter})
  }

  const handlePageChange = async(pageNumber) =>{
    setPaginationFilter({...paginationFilter, page: pageNumber})
    await handleSuccess()
  }

  const handlePagelimitChange = async(pageLimit) =>{
    setPaginationFilter({...paginationFilter, limit: pageLimit})
    await handleSuccess()
  }

  const handleFilterChange = async (filter) => {
    setFilter(filter)
    await handleSuccess()
  }

  if(loading) return <Spinner/>
  if(error) return <ErrorPage onRetry={handleSuccess}/>
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-4">
      <div className="text-2xl font-bold mb-6 text-white">Authors</div>
      <CreateOrEditAuthorModel refreshPageOnSuccess={false} onSuccess={handleSuccess}/>
      </div>
      <AuthorFilter filter={filter} onApply={handleFilterChange} />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          data.authors.items.map((author)=>(<AuthorCard key={author.id} author={author}/>))
        }
      </div>
      <Pagination currentPage={data.authors.currentPage} totalPage={data.authors.totalPage} currentLimit={data.authors.currentLimit} onPageChange={handlePageChange} onPageLimitChange={handlePagelimitChange}/>
    </div>
  )
}

export default AuthorPage