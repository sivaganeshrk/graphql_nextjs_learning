import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">📚 BookVault</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Explore, review, and manage your favorite books and authors — all in one place.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/books">
            <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded hover:bg-gray-100">
              Browse Books
            </button>
          </Link>
          <Link href="/authors">
            <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded hover:bg-gray-100">
              View Authors
            </button>
          </Link>
        </div>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
        <div className="bg-gray-900 shadow p-6 rounded text-center">
          <h2 className="text-xl font-semibold mb-2 text-white">📖 Books</h2>
          <p className="text-sm text-gray-400">Search, filter, and manage your book collection easily.</p>
        </div>
        <div className="bg-gray-900 shadow p-6 rounded text-center">
          <h2 className="text-xl font-semibold mb-2 text-white">🧑‍💼 Authors</h2>
          <p className="text-sm text-gray-400">View author details and linked books in one place.</p>
        </div>
        <div className="bg-gray-900 shadow p-6 rounded text-center">
          <h2 className="text-xl font-semibold mb-2 text-white">⭐ Reviews</h2>
          <p className="text-sm text-gray-400">Add and view reviews with star ratings and comments.</p>
        </div>
      </section>
    </main>
  );
}
