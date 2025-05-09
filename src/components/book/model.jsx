"use client";

import React, { useEffect, useState } from "react";

const CreateOrEditBookModel = ({ book, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    published_date: "",
    author_id: "",
  });

  useEffect(() => {
    if (book) {
      setForm({
        title: book.title,
        description: book.description,
        published_date: book.published_date,
        author_id: book.author_id,
      });
    }
  }, [book]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit()
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">
          {book ? "Edit Book" : "Add New Book"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
          <label htmlFor="title" className="block text-m font-semibold text-gray-700 mb-1">Title</label>
          <input id="title" placeholder="Title" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className="w-full border px-3 py-2 rounded"/>
          </div>
          <div>
          <label htmlFor="author" className="block text-m font-semibold text-gray-700 mb-1">Author</label>
          {/* TODO: Update the author drop down */}
          <select id="author" value={form.author_id} onChange={(e)=> setForm({...form, author_id: e.target.value})} className="w-full border px-3 py-2 rounded">
            <option value="123">123</option>
            <option value="456">456</option>
            <option value="789">789</option>
          </select>
          </div>
          <div>
            <label htmlFor="published_date" className="block text-m font-semibold text-gray-700 mb-1">Published On</label>
            <input type="date" id="published_date" value={form.published_date} onChange={(e)=>{setForm({...form, published_date: e.target.value})}} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label htmlFor="description" className="block text-m font-semibold text-gray-700 mb-1">Description</label>
            <textarea name="Description" id="description" value={form.description} onChange={(e)=>setForm({...form, description: e.target.value})} className="w-full border px-3 py-2 rounded h-32 resize-y"/>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            { book ? 'Update Book' : 'Create Book'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrEditBookModel;
