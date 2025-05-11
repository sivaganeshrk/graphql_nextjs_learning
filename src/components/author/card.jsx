import moment from "moment";
import Link from "next/link";

const AuthorCard = ({author}) => {
  return (
    <div className="max-w-xs w-full bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="p-1">
        <h3 className="text-lg font-medium text-gray-900 truncate">{author.name}</h3>
        <p className="text-sm font-medium text-gray-900 truncate pt-1.5">
          Born Date: {moment(Number(author.born_date)).format("YYYY-MM-DD")}
        </p>
        <p className="text-sm font-medium text-gray-900 truncate">
          Total Book: {author.book_count}
        </p>
        <Link
          className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          href={`/authors/${author.id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default AuthorCard;
