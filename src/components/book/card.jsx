import Link from "next/link";

export default function BookCard() {
  return (
  <div className="max-w-xs w-full bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
    <div className="p-1">
      <h3 className="text-lg font-medium text-gray-900 truncate">
      Book Cards
      </h3>
      <p className="text-sm font-medium text-gray-900 truncate pt-3" >Description</p>
      <p className="text-sm font-medium text-gray-900 truncate pt-1.5" >by Author_name</p>
      <p className="text-sm font-medium text-gray-900 truncate pt-1.5 pb-1.5" >Review</p>
      <Link href={`/books/${"123"}`}>
      <div className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Read More</div>
      </Link>
    </div>
    </div>
  );
}
