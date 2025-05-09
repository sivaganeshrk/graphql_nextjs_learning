"use client";
import { useEffect, useState } from "react";

const DeleteConfirmationModel = ({
  title = "Danger Zone❗",
  message = '"You’re one click away from unleashing irreversible consequences (or just deleting something boring)."😬',
  onConfirm,
}) => {
  const [openModel, setOpenModel] = useState(false);

  const closeModel = () => {
    setOpenModel(false);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpenModel(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [openModel]);

  return (
    <div>
      <button
        onClick={() => setOpenModel(true)}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-34"
      >
        Delete
      </button>
      {openModel && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-50"
          onClick={closeModel}
        >
          <div className="bg-gray-200 p-6 rounded-lg w-full max-w-4xl relative">
            <button
              onClick={closeModel}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-6">{message}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeModel}
                className="px-4 py-2 text-md rounded bg-gray-300 hover:bg-gray-400"
              >
                👻 Ghost this action
              </button>
              <button onClick={onConfirm} className="px-4 text-md rounded text-white bg-red-600 hover:bg-red-700">💀 Yes, I’m sure</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteConfirmationModel;
