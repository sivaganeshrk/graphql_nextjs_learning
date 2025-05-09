import React from "react"
import moment from "moment"
import Link from "next/link"

const AuthorDetailed = ({author}) => {
  return (
    <div>
      <Link href={`/authors/${author.id}`}>
      <div className="bg-gray-50 rounded-xl shadow mb-5 p-5">
      <h1 className="text-3xl font-bold">Author Details</h1>
      <p className="text-gray-700 mt-3">Name: {author.name}</p>
      <p className="text-gray-700 ">Bio: {author.biography}</p>
      <p className="text-gray-700">Born: {moment(Number(author.born_date)).format("YYYY-MM-DD")}</p>
      <p className="text-gray-700">Total Books: {author.book_count}</p>
      </div>
      </Link>
    </div>

  )
}

export default AuthorDetailed