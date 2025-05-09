import AuthorCard from "@/components/author/card";

const AuthorPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-2xl font-bold mb-6">Authors</div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>
    </div>
  )
}

export default AuthorPage