import React, { useContext, useEffect } from 'react'
import { SessionContext } from "../../contexte/SessionContext.jsx";
import Sidebar from "./../../components/Sidebar.jsx";
import NavBars from '../../components/NavBars.jsx';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const { session } = useContext(SessionContext);
  useEffect(() => {
    const user = localStorage.getItem("users");
    if (!user) {
      navigate("/connexion");
    }
  }, [ navigate ]);
  
  return (
    <>
      <NavBars />
      <div className="">
        <div className="flex justify-between items-center mt-28">
          <div className="flex flex-col justify-center items-center w-full">
            {session ? (
              <h1 className="text-2xl font-bold text-gray-500">
                Bienvenue {session.username}
              </h1>
            ) : (
              <p className="text-lg">Loading session...</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className=""></div>
      </div>
    </>
  );
}
