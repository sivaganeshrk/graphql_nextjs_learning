"use client";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import CreateOrEditBookModel from "./model";

const CreateOrEditBookModelWrapper = ({ book, refreshPageOnSuccess, onSuccess }) => {
  const [openModel, setOpenModel] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpenModel(false)
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [openModel]);

  const handleSubmit = (book) => {
    setOpenModel(false);
    if(refreshPageOnSuccess){ 
      router.refresh()
    } else {
      onSuccess(book)
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpenModel(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-34"
      >
        {book ? "Update Book" : "+ Add Book"}
      </button>
      {openModel && (
        <CreateOrEditBookModel
          book={book}
          onClose={() => setOpenModel(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default CreateOrEditBookModelWrapper;
