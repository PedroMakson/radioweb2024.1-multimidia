'use client'

import { useContext } from "react";
import { FaPlay, FaPause } from 'react-icons/fa';
import { HomeContext } from "./context/HomeContext";

export default function Home() {
  const { playing, togglePlaying } = useContext(HomeContext);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div onClick={togglePlaying} style={{ cursor: 'pointer' }} className="flex flex-col items-center">
        {playing ? (
          <>
            <FaPause size={100} />
            <p className="mt-2 text-xl font-bold">Executando</p>
          </>
        ) : (
          <>
            <FaPlay size={100} className="text-[50px] text-[tomato]" />
            <p className="mt-2 text-xl font-bold">Pausado</p>
          </>
        )}
      </div>
    </main>
  );
}
