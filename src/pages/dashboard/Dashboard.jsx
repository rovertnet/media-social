import React, { useContext, useEffect } from 'react'
import { SessionContext } from "../../contexte/SessionContext.jsx";
import NavBars from '../../components/NavBars.jsx';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal.jsx';
import { FaUserCircle } from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();
  const { session } = useContext(SessionContext);
  useEffect(() => {
    const user = localStorage.getItem("users");
    if (!user) {
      navigate("/connexion");
    }
  }, [ navigate ]);

  const [showModal, setShowModal] = React.useState(false);
  
  return (
    <>
      <NavBars />

      <div className="flex justify-center items-center  py-10 mt-20">
        <div className="flex items-center justify-center bg-white mt-20">
            <div className="flex justify-center items-center gap-5 px-10 py-5 bg-white rounded-lg">
              <FaUserCircle className="text-4xl font-extrabold text-gray-300 " />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setShowModal(true)}
              >
                {session ? (
                  <>Quoi de neuf {session.username}</>
                ) : (
                  <p className="text-lg">Chargement de la session...</p>
                )}
              </button>
            </div>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </>
  );
}
