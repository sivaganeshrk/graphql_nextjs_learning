import BookCard from "@/components/book/card";

const BookPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-2xl font-bold mb-6">Book Collection</div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      </div>
      </div>
  )
}

export default BookPage