import { ReactElement } from "react";

export const Header = (): ReactElement => {
  return (
    <header className="w-full py-5 flex justify-center items-center bg-gray-700 border-b border-green-500">
      <h1 className="text-2xl font-bold">
        Jeff Lab
      </h1>
      <span className="mx-1 text-xl text-green-700 font-black">|</span>
      <span className="text-2xl font-thin">ReactJS</span>
    </header>
  )
}