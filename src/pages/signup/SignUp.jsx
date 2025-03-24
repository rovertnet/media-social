import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import axios from 'axios';

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.password !== data.password_confirmation) {
      toast.error(
        "Les mots de passe ne correspondent pas"
      );
      return;
    }else{
      axios.get(`http://localhost:3000/users?email=${data.}`).then((response) => {
        if (response.data.length > 0) {
          toast.error(
            "Un compte existe déjà avec cet email"
          );
          return;
        }else{
          axios
            .post("http://localhost:3000/users", data)
            .then((response) => {
              console.log(response.data);
              toast.success("Inscription réussie");
            })
            .catch((error) => {
              console.error(error);
              toast.success("Une erreur s'est produite");
            });
        }
      })
    }
  }

  return (
    <>
      <div className="bg-white px-10 py-10 rounded-md m-20 md:w-1/2 md:mt-20 md:mx-auto block">
        <h1 className="text-2xl font-bold text-center">Inscription</h1>

        <p className="text-center text-gray-500 mt-2">
          Créez un compte pour accéder à votre espace personnel
        </p>

        <div className="flex justify-center items-center my-5 gap-8">
          <div className="border-[1px] border-gray-300 rounded-md py-2 px-2">
            <FaGoogle className="text-3xl text-blue-600 font-bold" />
          </div>

          <div className="border-[1px] border-gray-300 rounded-md py-2 px-2">
            <FaFacebook className="text-3xl text-blue-600 font-bold" />
          </div>

          <div className="border-[1px] border-gray-300 rounded-md py-2 px-2">
            <FaApple className="text-3xl text-black font-bold" />
          </div>
        </div>

        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Nom d\'utilisateur"
              {...register("username", { required: "Veuillez saisir votre nom", minLength: { value: 3, message: "Le nom doit contenir au moins 3 caractères" } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Adresse email"
              {...register("email", { required: "Veuillez saisir votre adresse e-mail", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Adresse e-mail invalide" } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              {...register("password", { required: "Veuillez saisir votre mot de passe", minLength: { value: 8, message: "Le mot de passe doit contenir au moins 8 caractères" } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              placeholder="Confirmer le mot de passe"
              {...register("password_confirmation", { required: "Veuillez confirmer votre mot de passe", minLength: { value: 8, message: "Le mot de passe doit contenir au moins 8 caractères" } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              S'inscrire
            </button>
          </div>

          <div className="mt-5">
            <p className="text-start text-gray-500">
              Vous avez déjà un compte ?{' '}
              <Link to="/connexion" className="text-blue-500">
                Connectez-vous
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
