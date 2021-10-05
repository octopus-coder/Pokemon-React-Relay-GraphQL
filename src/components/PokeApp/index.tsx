import { Suspense } from "react";
import Pokemon from "../Pokemon";
import { PokeAppContainer, PokemonContainer } from "./styles";

const PokeApp: React.FC = () => {
  const TOTAL_POKEMONS = 899;

  const numbers = Array(TOTAL_POKEMONS)
    .fill(1)
    .map((v, i) => i);

  return (
    <PokeAppContainer>
      {numbers.map((number) => (
        <PokemonContainer key={number}>
          <Suspense fallback={"Loading..."} key={number}>
            <Pokemon number={number} key={number} />
          </Suspense>
        </PokemonContainer>
      ))}
    </PokeAppContainer>
  );
};

export default PokeApp;
