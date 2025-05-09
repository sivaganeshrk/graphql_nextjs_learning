import BookDetailed from "@/components/book/detailed"
import AuthorDetailed from "@/components/author/detailed"
import CreateOrEditBookModelWrapper from "@/components/book/model_wrapper";
import DeleteConfirmationModel from "@/components/delete_confr_model";
const BookDetailedPage = async ({params}) => {
  const {book_id} = await params
  const book = {title:"Sample",description: "sample", published_date:"2025-05-07"}
  const author = {name: "Sample", biography: "Sample", born_date:"2022-06-03", books_count:4}
  console.log("id",book_id);
  return (
    <div className="px-5 py-20">
        <div className="absolute top-6 right-5">
          <div className="flex justify-end gap-3">
          <CreateOrEditBookModelWrapper book={book} refreshPageOnSuccess={false}/>
          <DeleteConfirmationModel />
          </div>
        </div>
      <div className="pl-5">
      <BookDetailed book={book} />
      </div>
      <div className="pl-5">
      <AuthorDetailed author={author} />
      </div>
    </div>
  )
}

export default BookDetailedPage