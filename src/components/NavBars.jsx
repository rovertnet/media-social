import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexte/SessionContext';
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo1.png";

export default function NavBars() {
  const { session } = useContext(SessionContext);
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-30">
        <div className="flex justify-between items-center bg-white px-10 py-5 shadow-md">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src={logo} alt="logo" className="h-12 w-32" />
            </Link>
          </div>
          <h1 className="font-extrabold text-2xl text-orange-400 uppercase">
            RovertNet Social
          </h1>
          <div className="flex space-x-4">
            {session ? (
              <div className="session-info flex space-x-1.5 justify-center items-center">
                <FaUserCircle className="text-4xl font-extrabold text-gray-300 " />
                <h1 className="text-2xl font-extrabold text-gray-500">
                  {session.username}
                </h1>
              </div>
            ) : (
              <p className="text-lg">Chargement de la session...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
