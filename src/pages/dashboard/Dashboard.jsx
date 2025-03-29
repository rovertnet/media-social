import React from 'react'

export default function Dashboard() {
  return (
    <>
      <div className="bg-white px-10 py-10 rounded-md m-20 md:w-1/2 md:mt-20 md:mx-auto block">
        <h1 className="text-2xl font-bold text-center">Tableau de bord</h1>
        <p className="text-center text-gray-500 mt-2">
          Bienvenue dans votre tableau de bord !
        </p>
      </div>
        <div className="flex justify-center items-center my-5 gap-8">
          <div className="border-[1px] border-gray-300 rounded-md py-2 px-2">
            <h1 className="text-3xl text-blue-600 font-bold">Bienvenue</h1>
          </div>
        </div>
        <div className="flex justify-center items-center my-5 gap-8">
          <div className="border-[1px] border-gray-300 rounded-md py-2 px-2">
            <h1 className="text-3xl text-blue-600 font-bold">Votre compte</h1>
          </div>
        </div>
        <div className="flex justify-center items-center my-5 gap-8">
          <div className="border-[1px] border-gray-300 rounded-md py-2 px-2">
            <h1 className="text-3xl text-blue-600 font-bold">Vos informations</h1>
          </div>
        </div>
    </>
  )
}
