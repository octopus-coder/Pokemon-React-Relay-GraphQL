import { ErrorBoundary } from "react-error-boundary";
import { useLazyLoadQuery } from "react-relay";
import { GetPokemonGraphQLQuery } from "../../GetPokemonQuery";
import { GetPokemonQuery } from "../../__generated__/GetPokemonQuery.graphql";
import { PokemonInfo } from "./styles";

interface PokemonProps {
  number: number;
}

const Pokemon: React.FC<PokemonProps> = ({ number }) => {
  const data = useLazyLoadQuery<GetPokemonQuery>(GetPokemonGraphQLQuery, {
    number,
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorPokemonBoundary}>
      <PokemonInfo>
        <strong>{data.getPokemonByDexNumber.species}</strong>
        <img
          src={data.getPokemonByDexNumber.sprite}
          alt={data.getPokemonByDexNumber.species}
        />
      </PokemonInfo>
    </ErrorBoundary>
  );
};

function ErrorPokemonBoundary() {
  return <p>Not Found</p>;
}

export default Pokemon;
