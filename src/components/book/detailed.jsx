const bookDetailed = ({ book }) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow mb-5 p-5">
      <h1 className="text-3xl font-bold">Book Detail</h1>
      <h1 className="text-gray-700 mt-3">Title: {book.title}</h1>
      <p className="text-gray-700">Description: {book.description}</p>
      <p className="text-gray-700">Published on: {book.published_date}</p>
      <p className="text-gray-700">Reviews: {book.published_date}</p>
    </div>
  );
};

export default bookDetailed;
