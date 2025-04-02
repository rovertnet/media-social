import React from "react";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;
  const user = JSON.parse(localStorage.getItem("users"));
  const { register, handleSubmit, formState: { errors } } = useForm();

  const useQuery = useQueryClient();

  const mutation = useMutation({
    mutationFn: (post) => {
      return axios.post("http://localhost:3000/posts", post);
    },

    onError: (error) => {
      
      toast.error("Une erreur est survenue lors de la création du post");
    },
    onSuccess: () => {
      useQuery.invalidateQueries(["posts"]);
      toast.success("Post créé avec succès");
      setShowModal(false);
    },
  });

  const onSubmit = (data) => {
    const post = {
      ...data,
      post: data.post,
      urlimage: data.urlimage,
      userId: user.id,
      username: user.username,
      likePost: [0],
      commentPost: [0],
      auteur: user.username,
      image: data.photoUser,
      createdAt: new Date().toLocaleString(),
    };
    mutation.mutate(post);
  }

  return (
    <div className="fixed inset-0 bg-opacity-50 overflow-y-auto h-full w-full z-30">
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <textarea
                  id="message"
                  placeholder="Votre message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  cols="50"
                  {...register("post", { required: "Weuillez saisir votre texte", minLength: { value: 7, message: "Le post doit contenir au moins 7 caractères" }, maxLength: { value: 512, message: "Le post doit contenir au maximum 512 caractères" }})}
                >
                  {errors.post && <p className="text-red-500 text-xs italic">{errors.post.message}</p>}
                </textarea>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Url de l'image"
                  {...register("urlimage", { required: "Veuillez fournir le lien de votre image" }, { pattern: { value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i, message: "Veuillez fournir un lien valide" }})}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.urlimage && <p className="text-red-500 text-xs italic">{errors.urlimage.message}</p>}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
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
