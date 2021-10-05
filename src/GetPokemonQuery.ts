import { graphql } from "babel-plugin-relay/macro";

export const GetPokemonGraphQLQuery = graphql`
  query GetPokemonQuery($number: Int!) {
    getPokemonByDexNumber(number: $number) {
      species
      sprite
    }
  }
`;
