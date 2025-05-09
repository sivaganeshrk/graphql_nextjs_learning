import React from "react"

const AuthorDetailed = ({author}) => {
  return (
    <div>
      <div className="bg-gray-50 rounded-xl shadow mb-5 p-5">
      <h1 className="text-3xl font-bold">{author.name}</h1>
      <p className="text-gray-700 mt-3">{author.biography}</p>
      <p className="text-gray-700">Born: {author.born_date}</p>
      <p className="text-gray-700">Total Books: {author.books_count}</p>
      </div>
    </div>

  )
}

export default AuthorDetailed