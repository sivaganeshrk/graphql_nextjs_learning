import Link from "next/link";
import ReactStars from "react-stars";

export default function BookCard({ book }) {
  return (
    <div className="max-w-xs w-full bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="p-1">
        <h3 className="text-lg font-medium text-gray-900 break-words">
          {book.title}
        </h3>
        <p className="text-sm font-medium text-gray-900 truncate pt-1.5">
          Author:{" "}
          <Link className="text-blue-700" href={`/authors/${book.author.id}`}>
            {book.author.name}
          </Link>
        </p>
        <div className="flex items-center gap-x-1 text-sm font-medium text-gray-900 pt-1.5 pb-1.5">
          <span>Review:</span>
          <ReactStars
            className="overflow-visible"
            count={5}
            value={book.rating.averageRating}
            edit={false}
          />
          <span>({book.rating.totalReview})</span>
        </div>
        <Link
          className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          href={`/books/${book.id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
