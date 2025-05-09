import ReactStars from "react-stars";
import moment from "moment"

const bookDetailed = ({ book }) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow mb-5 p-5">
      <h1 className="text-3xl font-bold">Book Detail</h1>
      <p className="text-gray-700 mt-3">Title: {book.title}</p>
      <p className="text-gray-700">Description: {book.description}</p>
      <p className="text-gray-700">Published on: {moment(Number(book.published_date)).format("YYYY-MM-DD")}</p>
      <div className="flex items-center gap-x-1 text-gray-700 pt-1.5 pb-1.5">
          <span>Review:</span>
          <ReactStars
            className="overflow-visible"
            count={5}
            value={book.rating.averageRating}
            edit={false}
          />
          <span>({book.rating.totalReview})</span>
        </div>
    </div>
  );
};

export default bookDetailed;
