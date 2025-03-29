import React from 'react'

export default function NavBars() {
  return (
    <>
      <div className="flex justify-center items-center my-5 gap-8">
        <div className="border-[1px] border-gray-300 rounded-md py-2 px-2">
          <FaGoogle className="text-3xl text-blue-600 font-bold" />
        </div>

        <div className="border-[1px] border-gray-300 rounded-md py-2 px-2">
          <FaFacebook className="text-3xl text-blue-600 font-bold" />
        </div>

        <div className="border-[1px] border-gray-300 rounded-md py-2 px-2">
          <FaApple className="text-3xl text-blue-600 font-bold" />
        </div>
      </div>
    </>
  )
}
