import React, { useContext, useEffect } from 'react'
import { SessionContext } from "../../contexte/SessionContext.jsx";
import NavBars from '../../components/NavBars.jsx';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal.jsx';
import { FaUserCircle } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { FaPhotoVideo } from "react-icons/fa";
import { MdMood } from "react-icons/md";
import axios from 'axios';



export default function Dashboard() {
  const navigate = useNavigate();

  const { session } = useContext(SessionContext);
  const [showModal, setShowModal] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    const user = localStorage.getItem("users");
    if (!user) {
      navigate("/connexion");
    }
    axios.get(`http://localhost:3000/posts`).then((response) => {
      const posts = response.data;
      setPosts(posts);
    });
  }, [ navigate ]);

  
  
  return (
    <>
      <NavBars />

      <div className="flex justify-center flex-col items-center  py-10 px-60">
        <div className=" bg-white mt-20 w-full mx-44 rounded-lg shadow-md">
          <div className="flex justify-between items-center gap-5 px-10 py-5 bg-white rounded-lg">
            <FaUserCircle className="text-5xl font-extrabold text-gray-300 " />
            <button
              className="bg-gray-100 hover:bg-gray-200 w-full text-gray-400 cursor-pointer text-start font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline"
              onClick={() => setShowModal(true)}
            >
              {session ? (
                <>Quoi de neuf, {session.username} ?</>
              ) : (
                <p className="text-lg">Chargement de la session...</p>
              )}
            </button>
          </div>

          <hr className="text-gray-400 py-5 mx-10" />
          <div className="flex justify-between px-10 pb-5 items-center gap-5">
            <button className="flex space-x-3.5">
              <IoMdVideocam className="font-extrabold text-red-600 text-5xl" />
              <h1 className="text-xl font-bold text-gray-500 pt-1.5">
                Vidéo en directe
              </h1>
            </button>
            <button className="flex space-x-3.5">
              <FaPhotoVideo className="font-extrabold text-green-700 text-5xl" />
              <h1 className="text-xl font-bold text-gray-500 pt-1.5">
                Photos/Vidéo
              </h1>
            </button>
            <button className="flex space-x-3.5">
              <MdMood className="font-extrabold text-yellow-500 text-5xl" />
              <h1 className="text-xl font-bold text-gray-500 pt-1.5">
                Humeur/Activités
              </h1>
            </button>
          </div>

          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>

        <div className="flex flex-col gap-5 ">
          <div className="flex justify-start flex-col items-center px-10 py-3  rounded-lg">
            {posts.map((post) => (
              <div className="bg-white w-full rounded-lg shadow-md my-5 ">
                <div key={post.id} className="flex flex-col gap-5 my-5 w-full ">
                  <div className="flex justify-start items-center gap-5 pl-5">
                    <FaUserCircle className="text-6xl font-extrabold text-gray-300" />
                    <div className="flex flex-col gap-1 pb-2">
                      <h1 className="text-xl font-bold text-gray-500 pt-1.5">
                        {post.auteur}
                      </h1>
                      <p className="text-sm text-gray-400">
                        {post.createdAt}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 pl-5">{post.post}</p>
                  <img
                    src={post.urlimage}
                    alt="Post"
                    className="w-full h-auto"
                  />
                </div>
                <div className="flex justify-between items-center px-5 py-3">
                  <button className="bg-gray-100 hover:bg-gray-200 w-full text-gray-400 cursor-pointer text-start font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline">
                    Commenter
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 w-full text-gray-400 cursor-pointer text-start font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline">
                    J'aime
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 w-full text-gray-400 cursor-pointer text-start font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline">
                    Partager
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
