import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function SignUp() {
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

        <form className="mt-5">
          <div className="mb-4">
            
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Nom d\'utilisateur"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Adresse email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              placeholder="Confirmer le mot de passe"
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
