import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";
import fetchPokemonGraphQL from "./fetchPokemon";

async function fetchRelay(params: RequestParameters, variables: Variables) {
  // console.log(
  //   `fetching query ${params.name} with ${JSON.stringify(variables)}`
  // );
  return fetchPokemonGraphQL(params, variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
