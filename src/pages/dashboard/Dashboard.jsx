import React, { useContext } from 'react'
import { SessionContext } from "../../contexte/SessionContext.jsx";
import Sidebar from "./../../components/Sidebar.jsx";
import NavBars from '../../components/NavBars.jsx';

export default function Dashboard() {
  const { session } = useContext(SessionContext);
  return (
    <>
      <NavBars />
      <div className="">
        <div className="flex justify-between items-center mt-24">
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
