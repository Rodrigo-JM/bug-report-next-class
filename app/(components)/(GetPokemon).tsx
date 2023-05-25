"use client";
import { useState } from "react";

const GetPokemon = ({ getPokemon }: { getPokemon: (poke: string) => void }) => {
  const [poke, setPoke] = useState<string>("");

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoke(e.target.value);
  };

  return (
    <>
      <input onChange={handle} value={poke} />
      <button onClick={() => getPokemon(poke)}>get</button>
    </>
  );
};

export default GetPokemon;
