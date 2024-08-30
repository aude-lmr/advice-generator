"use client";
import { useState, useEffect } from "react";

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
    <main className=" flex justify-center items-center bg-dark-blue w-screen h-screen">
      <div className="box-border relative p-10 flex flex-col items-center justify-center w-1/3 h-max border border-solid border-grayish-blue bg-grayish-blue rounded-lg">
        <h1 className="text-sm font-bold text-neon-green">
          ADVICE #{advice.id}
        </h1>
        <p className="text-[28px] font-bold text-light-cyan my-4 text-center">
          {advice.advice}
        </p>

        <button
          className="flex justify-center items-center absolute -bottom-7 border-solid border-neon-green bg-neon-green rounded-full size-14 "
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
