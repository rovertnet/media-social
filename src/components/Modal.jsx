import React from "react";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    toast.success("Votre post a été créé avec succès !");
    setShowModal(false);
  }
  const onError = (errors) => {
    toast.error("Une erreur s'est produite lors de la création du post.");
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-28 mx-44 p-5 border shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <div className="flex justify-between">
            <h3 className="text-2xl leading-6 font-extrabold text-gray-900">
              Créez un post
            </h3>
            <button
              className="px-2 py-2 bg-gray-300 mb-3 text-base font-medium rounded-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              type="button"
              onClick={() => setShowModal(false)}
            >
              <IoMdClose className="font-bold text-2xl text-gray-900 cursor-pointer" />
            </button>
          </div>
          <hr className="text-gray-400 mt-1.5" />
          <div className="mt-2 px-7 py-6">
            <form>
              <div className="mb-4">
                <textarea
                  id="message"
                  placeholder="Votre message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  cols="50"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Url de l'image"
                  {...register("name", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                >
                  Poster
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
