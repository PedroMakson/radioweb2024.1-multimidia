'use client'

import { useContext } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import { HomeContext } from "./context/HomeContext";

export default function Home() {
  const { playing, togglePlaying } = useContext(HomeContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-600 p-6">
      {/* Capa da Música */}
      <div className="relative w-64 h-64 bg-black mb-6 flex items-center justify-center">
        {/* Imagem Centralizada */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IcEo1kdEZj389e07Rju_S5e5iMsHba1Krw&s"
          alt="Capa da Música"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Nome da Música e Status */}
      <h1 className="text-2xl font-bold text-white mb-4">
        {playing ? 'Executando' : 'Pausado'}
      </h1>

      {/* Controles */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => console.log('Anterior')}
          className="text-white"
        >
          <FaBackward size={32} />
        </button>

        <button
          onClick={togglePlaying}
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg"
        >
          {playing ? (
            <FaPause className="text-white" size={32} />
          ) : (
            <FaPlay className="text-white" size={32} />
          )}
        </button>

        <button
          onClick={() => console.log('Próxima')}
          className="text-white"
        >
          <FaForward size={32} />
        </button>
      </div>
    </main>
  );
}
