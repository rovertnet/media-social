import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar h-full w-64 bg-gray-800 text-white px-4 py-6">
      <ul>
        <li className="mb-4">
          <Link to="/dashboard" className="text-white">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/profile" className="text-white">
            Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/settings" className="text-white">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
