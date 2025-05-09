import DeleteConfirmationModel from "@/components/delete_confr_model"

const AuthorDetailedPage = async ({ params }) => {
  const {author_id} = await params
  const author = {name: "Sample", biography: "Sample", born_date:"2022-06-03", books_count:4}
  return (
    <div className="px-5 py-20">
      <div className="absolute top-6 right-5">
        <div className="flex justify-end gap-3">
          <DeleteConfirmationModel />
        </div>
      </div>
    </div>
  )
}

export default AuthorDetailedPage