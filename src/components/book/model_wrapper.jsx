"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CreateOrEditBookModel from "./model";
import { useMutation } from "@apollo/client";
import { CREATE_BOOK, UPDATE_BOOK } from "@/graphql/client/book";
import apolloClient from "@/graphql/client/client";
import Spinner from "../spinner";
import toast from "react-hot-toast";

const CreateOrEditBookModelWrapper = ({
  book,
  refreshPageOnSuccess = true,
  onSuccess,
}) => {
  const [openModel, setOpenModel] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpenModel(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [openModel]);

  const [updateBook, updateEvent] = useMutation(UPDATE_BOOK, {
    onCompleted: () => toast.success("Updated Book"),
    onError: () => toast.error("Update Book Failed"),
  });
  const [createBook, createBookEvent] = useMutation(CREATE_BOOK, {
    onCompleted: () => toast.success("Updated Book"),
    onError: () => toast.error("Update Book Failed"),
  });

  const handleSubmit = async (payload) => {
    if (book) {
      await updateBook({ variables: { id: book.id, payload } });
      apolloClient.cache.evict({ id: `Book:${book.id}` });
    } else {
      await createBook({ variables: { payload } });
      }

    if(createBookEvent.error || updateEvent.error){
      return
    }
    
    setOpenModel(false);
    if (refreshPageOnSuccess) {
      router.refresh();
    } else {
      onSuccess(book);
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
          loading={updateEvent.loading || createBookEvent.loading}
        />
      )}
    </div>
  );
};

export default CreateOrEditBookModelWrapper;
