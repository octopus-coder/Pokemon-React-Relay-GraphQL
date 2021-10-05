import type { Query } from "@favware/graphql-pokemon";
import { RequestParameters, Variables } from "relay-runtime";

interface GraphQLPokemonResponse<K extends keyof Omit<Query, "__typename">> {
  data: Record<K, Omit<Query[K], "__typename">>;
}

async function fetchPokemonGraphQL(
  params: RequestParameters,
  variables: Variables
): Promise<GraphQLPokemonResponse<"getPokemon">> {
  const response = await fetch("https://graphqlpokemon.favware.tech/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });
  return await response.json();
}

export default fetchPokemonGraphQL;
