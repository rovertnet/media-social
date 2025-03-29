import React, { useContext } from 'react'
import { SessionContext } from "../context/SessionContext";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const { session } = useContext(SessionContext);
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="main-content flex-1 p-6 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
          {session ? (
            <div className="session-info">
              <p className="text-lg">User: {session.email}</p>
              <p className="text-lg">Name: {session.name}</p>
            </div>
          ) : (
            <p className="text-lg">Loading session...</p>
          )}
        </div>
      </div>
    </>
  );
}
