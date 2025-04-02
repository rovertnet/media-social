import React, { useEffect } from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignIn() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("users");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = (data) => {
    axios
      .get(
        `http://localhost:3000/users?email=${data.email}&password=${data.password}`
      )
      .then((response) => {
        if (response.data.length > 0) {
          localStorage.setItem("users", JSON.stringify(response.data[0]));
          navigate("/");
          toast.success("Connexion réussie");
        } else {
          toast.error("Identifiants invalides");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Une erreur s'est produite");
      });
  };

  return (
    <div className="bg-white px-10 py-10 rounded-md m-20 md:w-1/2 md:mt-20 md:mx-auto block">
      <h1 className="text-2xl font-bold text-center">Connexion</h1>

      <p className="text-center text-gray-500 mt-2">
        Connectez-vous à votre compte pour accéder à votre espace personnel!
      </p>

      <div className="flex justify-center items-center my-5 gap-8">
        <div className="border-[1px] border-gray-300 rounded-md py-2 px-2">
          <FaGoogle className="text-3xl  text-red-500  font-bold" />
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
            type="email"
            name="email"
            id="email"
            placeholder="Adresse email"
            {...register("email", {
              required: "Veuillez saisir votre adresse e-mail",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Adresse e-mail invalide",
              },
              validate: (value) => {
                if (value) {
                  return true;
                } else {
                  toast.error("Adresse e-mail invalide");
                  return false;
                }
              },
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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
                message: "Le mot de passe doit contenir au moins 8 caractères",
              },
              validate: (value) => {
                if (value) {
                  return true;
                } else {
                  toast.error("Mot de passe invalide");
                  return false;
                }
              },
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Connexion
          </button>
        </div>

        <div className="mt-5">
          <p className="text-start text-gray-500">
            Vous avez déjà un compte ?{" "}
            <Link to="/inscription" className="text-blue-500">
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
