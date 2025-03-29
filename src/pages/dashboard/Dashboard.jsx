import React, { useContext, useEffect } from 'react'
import { SessionContext } from "../../contexte/SessionContext.jsx";
import NavBars from '../../components/NavBars.jsx';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal.jsx';
import { FaUserCircle } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";


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

      <div className="flex justify-center items-center  py-10">
        <div className=" bg-white mt-20 w-full mx-44 rounded-lg shadow-md">
          <div className="flex justify-between items-center gap-5 px-10 py-5 bg-white rounded-lg">
            <FaUserCircle className="text-4xl font-extrabold text-gray-300 " />
            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-400 cursor-pointer text-start font-bold py-2 px-28 rounded-full focus:outline-none focus:shadow-outline"
              onClick={() => setShowModal(true)}
            >
              {session ? (
                <>Quoi de neuf {session.username}</>
              ) : (
                <p className="text-lg">Chargement de la session...</p>
              )}
            </button>
          </div>

          <hr className="text-gray-400 py-5 mx-10" />
          <div className="flex gap-5">
            <button className="flex space-x-3.5">
              <IoMdVideocam className='font-extrabold text-green-700 text-3xl' />
              <h1 className="text-2xl font-extrabold text-gray-500">Vidéo en directe</h1>
            </button>
            <button className="flex space-x-3.5">
              <IoMdVideocam className='font-extrabold text-green-700 text-3xl' />
              <h1 className="text-2xl font-extrabold text-gray-500">Photos/Vidéo</h1>
            </button>
            <button className="flex space-x-3.5">
              <IoMdVideocam className='font-extrabold text-green-700 text-3xl' />
              <h1 className="text-2xl font-extrabold text-gray-500">Humeur/Activités</h1>
            </button>
          </div>

          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </>
  );
}
