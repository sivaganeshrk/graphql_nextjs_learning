"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { CREATE_AUTHOR, UPDATE_AUTHOR,GET_AUTHORS_LISTING, GET_AUTHORS_DROPDOWN } from "@/graphql/client/author";
import moment from "moment";
import Spinner from "../spinner";

const CreateOrEditAuthorModel = ({
  author,
  onSuccess,
  refreshPageOnSuccess = true,
}) => {
  const router = useRouter();
  const [openModel, setOpenModel] = useState(false);
  const [form, setForm] = useState({
    name: "",
    biography: "",
    born_date: "",
  });
  const closeModel = () => {
    setOpenModel(false);
  };

  useEffect(() => {
    if (author) {
      setForm({
        name: author.name,
        biography: author.biography,
        born_date: moment(Number(author.born_date)).format("YYYY-MM-DD"),
      });
    }
  }, [author]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpenModel(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [openModel]);

  const [updateAuthor, updateAuthorEvent] = useMutation(UPDATE_AUTHOR,{
    refetchQueries: [{ query: GET_AUTHORS_LISTING },{query: GET_AUTHORS_DROPDOWN}],
  }
  );
  const [createAuthor, createAuthorEvent] = useMutation(CREATE_AUTHOR,{
    refetchQueries: [{ query: GET_AUTHORS_LISTING },{query: GET_AUTHORS_DROPDOWN}],
  });

  const loading = createAuthorEvent.loading || updateAuthorEvent.loading;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (author) {
      await updateAuthor({ variables: { author_id: author.id, payload: form } });
    } else {
      await createAuthor({ variables: { payload: form } });
    }

    if (refreshPageOnSuccess) {
      router.refresh();
    } else {
      onSuccess();
    }
    setOpenModel(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpenModel(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-34"
      >
        {author ? "Update" : "+ Add Author"}
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
            {loading ? (
              <Spinner />
            ) : (
              <>
                <button
                  onClick={closeModel}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
                >
                  X
                </button>
                <h2 className="text-2xl font-bold mb-4">
                  {author ? "Updated Author" : "Add Author"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-m font-semibold text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="born_date"
                      className="block text-m font-semibold text-gray-700 mb-1"
                    >
                      Born Date
                    </label>
                    <input
                      type="date"
                      id="born_date"
                      value={form.born_date}
                      onChange={(e) => {
                        setForm({ ...form, born_date: e.target.value });
                      }}
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="biography"
                      className="block text-m font-semibold text-gray-700 mb-1"
                    >
                      Biography
                    </label>
                    <textarea
                      name="biography"
                      id="biography"
                      value={form.biography}
                      onChange={(e) =>
                        setForm({ ...form, biography: e.target.value })
                      }
                      className="w-full border px-3 py-2 rounded h-32 resize-y"
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    {author ? "Update Author" : "Create Author"}
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

export default CreateOrEditAuthorModel;
