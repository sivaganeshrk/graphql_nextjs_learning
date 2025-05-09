"use client";

import { CREATE_REVIEW } from "@/graphql/client/review";
import { useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import Spinner from "../spinner";
import apolloClient from "@/graphql/client/client";
import { useRouter } from "next/navigation";

const AddReviewModel = ({ book_id }) => {
  const [openModel, setOpenModel] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpenModel(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [openModel]);

  const [form, setForm] = useState({
    username: "",
    rating: 0,
    comment: "",
    book_id,
  });

  const [createReview, createReviewEvent] = useMutation(CREATE_REVIEW);

  const closeModel = () => {
    setOpenModel(false);
  };

  const handleSubmit = async () => {
    console.log(form);
    await createReview({variables:{payload: form}});
    apolloClient.cache.evict({ id: `Book:${book_id}` });
    setOpenModel(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setOpenModel(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-34"
      >
        + Add Review
      </button>
      {openModel && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-50"
          onClick={closeModel}
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            {createReviewEvent.loading ? <Spinner/> : (
              <>
                <button
                  onClick={closeModel}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
                >
                  X
                </button>
                <h2 className="text-2xl font-bold mb-4">Add Review</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-m font-semibold text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="username"
                      placeholder="Your Name"
                      value={form.username}
                      onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                      }
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                  <div>
                    <ReactStars
                      count={5}
                      value={form.rating}
                      onChange={(rating) => setForm({...form, rating})}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="comment"
                      className="block text-m font-semibold text-gray-700 mb-1"
                    >
                      Comment
                    </label>
                    <textarea
                      name="comment"
                      id="comment"
                      value={form.comment}
                      onChange={(e) =>
                        setForm({ ...form, comment: e.target.value })
                      }
                      className="w-full border px-3 py-2 rounded h-32 resize-y"
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Add Review
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddReviewModel;
