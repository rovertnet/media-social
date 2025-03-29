import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import axios from 'axios';

export default function SignUp() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.password !== data.password_confirmation) {
      toast.error(
        "Les mots de passe ne correspondent pas"
      );
    }else{
      axios.get(`http://localhost:3000/users?email=${data.email}`)
      .then((response) => {
          if (response.data.length > 0) {
            toast.error(
              "Un compte existe déjà avec cet email"
            );
          }else {
            axios
              .post("http://localhost:3000/users", data)
              .then((response) => {
                console.log(response.data);
                toast.success("Inscription réussie");
                navigate("/connexion");
              })
              .catch((err) => {
                console.error(err);
                toast.error("Une erreur s'est produite");
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
            <FaGoogle className="text-3xl text-red-500 font-bold" />
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
              {...register("username", {
                required: "Veuillez saisir votre nom",
                minLength: {
                  value: 3,
                  message: "Le nom doit contenir au moins 3 caractères",
                },
                maxLength: {
                  value: 20,
                  message: "Le nom doit contenir au maximum 20 caractères",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/i,
                  message:
                    "Le nom ne doit contenir que des lettres et des chiffres",
                },
                validate: (value) => {
                  const usernameRegex = /^[a-zA-Z0-9]+$/;
                  return (
                    usernameRegex.test(value) ||
                    "Le nom ne doit contenir que des lettres et des chiffres"
                  );
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Url de l'image"
              {...register(
                "photoUser",
                { required: "Veuillez fournir le lien de votre image" },
                {
                  pattern: {
                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                    message: "Veuillez fournir un lien valide",
                  },
                }
              )}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.urlimage && (
              <p className="text-red-500 text-xs italic">
                {errors.urlimage.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="emailUsers"
              id="email"
              placeholder="Adresse email"
              {...register("email", {
                required: "Veuillez saisir votre adresse e-mail",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Adresse e-mail invalide",
                },
                validate: (value) => {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  return (
                    emailRegex.test(value) ||
                    "Veuillez entrer une adresse e-mail valide"
                  );
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              {...register("password", {
                required: "Veuillez saisir votre mot de passe",
                minLength: {
                  value: 8,
                  message:
                    "Le mot de passe doit contenir au moins 8 caractères",
                },
                validate: (value) => {
                  const hasUpperCase = /[A-Z]/.test(value);
                  const hasLowerCase = /[a-z]/.test(value);
                  const hasNumber = /[0-9]/.test(value);
                  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
                  return (
                    (hasUpperCase &&
                      hasLowerCase &&
                      hasNumber &&
                      hasSpecialChar) ||
                    "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial"
                  );
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              placeholder="Confirmer le mot de passe"
              {...register("password_confirmation", {
                required: "Veuillez confirmer votre mot de passe",
                minLength: {
                  value: 8,
                  message:
                    "Le mot de passe doit contenir au moins 8 caractères",
                },
                validate: (value) => {
                  const hasUpperCase = /[A-Z]/.test(value);
                  const hasLowerCase = /[a-z]/.test(value);
                  const hasNumber = /[0-9]/.test(value);
                  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
                  return (
                    (hasUpperCase &&
                      hasLowerCase &&
                      hasNumber &&
                      hasSpecialChar) ||
                    "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial"
                  );
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password_confirmation && (
              <p className="text-red-500 text-xs italic">
                {errors.password_confirmation.message}
              </p>
            )}
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
              Vous avez déjà un compte ?{" "}
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
