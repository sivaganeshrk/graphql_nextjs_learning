import Link from "next/link";

const AuthorCard = () => {
  return (
    <div className="max-w-xs w-full bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="p-1">
        <h3 className="text-lg font-medium text-gray-900 truncate">Author</h3>
        <p className="text-sm font-medium text-gray-900 truncate pt-3">
          Biography
        </p>
        <p className="text-sm font-medium text-gray-900 truncate pt-1.5">
          Born Date
        </p>
        <p className="text-sm font-medium text-gray-900 truncate pt-1.5">
          Total Book
        </p>
        <Link
          className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          href={`/authors/${"123"}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default AuthorCard;
