import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function SignUp() {
  return (
    <>
      <div className="bg-white px-10 py-10 rounded-md m-20 md:w-1/2 md:mt-20 md:mx-auto">
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

        <form className="mt-5">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Nom d'utilisateur
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Adresse e-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmation du mot de passe
            </label>
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
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
            <p className="text-center text-gray-500">
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
