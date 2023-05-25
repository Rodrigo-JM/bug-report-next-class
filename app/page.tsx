import Image from "next/image";
import styles from "./page.module.css";
import { ApiService } from "@/services";
import GetPokemon from "./(components)/(GetPokemon)";

export default async function Home() {
  const client = new ApiService("token here");

  const getPokemon = async (poke: string) => {
    "use server";
    const data = await client.getPokemonDetails(poke);
    console.log(data);
  };
  return (
    <main className={styles.main}>
      Bug Report <GetPokemon getPokemon={getPokemon} />
    </main>
  );
}
