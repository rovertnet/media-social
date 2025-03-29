import React, { useContext, useEffect } from 'react'
import { SessionContext } from "../../contexte/SessionContext.jsx";
import Sidebar from "./../../components/Sidebar.jsx";
import NavBars from '../../components/NavBars.jsx';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal.jsx';

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
      

      <div className="flex items-center justify-center min-h-screen bg-white mt-20">
        <header className="App-header">
          <h1 className="text-3xl font-bold text-center text-white my-5">Créez un post !</h1>
          <hr className='text-gray-500' />
          <div className="flex justify-center items-center space-x-2.5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setShowModal(true)}
            >
              {session ? (
                <>
                  Quoi de neuf {session.username}
                </>
              ) : (
                <p className="text-lg">Chargement de la session...</p>
              )}
            </button>
          </div>
        </header>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}
