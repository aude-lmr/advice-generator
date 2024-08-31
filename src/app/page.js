"use client";
import { useState, useEffect } from "react";
import DecorativeLines from "../app/components/decorativeligns";

export default function Home() {
  const [advice, setAdvice] = useState({});

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await res.json();
    setAdvice(slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main className="flex justify-center items-center bg-dark-blue min-h-screen p-4">
      <div className="box-border relative p-6 flex flex-col items-center justify-center w-full max-w-xs sm:max-w-md min-h-min h-2/5 border border-solid border-grayish-blue bg-grayish-blue rounded-lg">
        <h1 className="text-xs sm:text-sm font-bold text-neon-green text-center">
          ADVICE #{advice.id}
        </h1>
        <p className="text-base sm:text-lg md:text-[28px] font-bold text-light-cyan my-4 text-center">
          {advice.advice}
        </p>

        {/* <DecorativeLines /> */}

        <button
          className="flex justify-center items-center absolute -bottom-6 sm:-bottom-7 border-solid border-neon-green bg-neon-green rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 z-10 hover:shadow-2xl  hover:shadow-neon-green active:shadow-2xl active:shadow-neon-green"
          onClick={fetchAdvice}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
