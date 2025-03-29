import React from 'react'

export default function ModalFormPosts() {
  return (
    <>
      <div className="">
        <div className="bg-white px-10 py-10 rounded-md m-20 md:w-1/2 md:mt-20 md:mx-auto block">
          <h1 className="text-2xl font-bold text-center">Ajouter un post</h1>
          <form action="" className="flex flex-col gap-5 mt-5">
            <input type="text" placeholder="Titre" className="border-[1px] border-gray-300 rounded-md py-2 px-2" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Contenu" className="border-[1px] border-gray-300 rounded-md py-2 px-2"></textarea>
            <button type="submit" className="bg-orange-400 text-white py-2 px-4 rounded-md">Ajouter</button>
          </form>
        </div>
      </div>
    </>
  )
}
