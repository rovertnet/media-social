import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexte/SessionContext';
import { FaUserCircle } from "react-icons/fa";


export default function NavBars() {
  const { session } = useContext(SessionContext);
  return (
    <>
      <div className="fixed top-0 right-0 left-0">
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <h1 className="text-2xl font-bold">Logo</h1>
            </Link>
          </div>
          <div className="flex space-x-4">
            {session ? (
              <div className="session-info flex space-x-3.5 justify-center items-center">
                <FaUserCircle className="text-4xl font-extrabold text-gray-300 " />
                <h1 className="text-2xl font-extrabold">
                  {session.username}
                </h1>
              </div>
            ) : (
              <p className="text-lg">Loading session...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
