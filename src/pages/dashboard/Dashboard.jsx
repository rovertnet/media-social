import React, { useContext } from 'react'
import { SessionContext } from "../../contexte/SessionContext.jsx";
import Sidebar from "./../../components/Sidebar.jsx";

export default function Dashboard() {
  const { session } = useContext(SessionContext);
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="main-content flex-1 p-6 bg-gray-100">
          {session ? (
            <div className="session-info flex space-x-3.5 justify-center items-center" >
              <h1 className="text-2xl font-bold mb-4">
                Bonjour {session.username} !
              </h1>
            </div>
          ) : (
            <p className="text-lg">Loading session...</p>
          )}
        </div>
      </div>
    </>
  );
}
