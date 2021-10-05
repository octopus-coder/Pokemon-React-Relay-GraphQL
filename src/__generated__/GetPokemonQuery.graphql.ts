/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type GetPokemonQueryVariables = {
    number: number;
};
export type GetPokemonQueryResponse = {
    readonly getPokemonByDexNumber: {
        readonly species: string;
        readonly sprite: string;
    };
};
export type GetPokemonQuery = {
    readonly response: GetPokemonQueryResponse;
    readonly variables: GetPokemonQueryVariables;
};



/*
query GetPokemonQuery(
  $number: Int!
) {
  getPokemonByDexNumber(number: $number) {
    species
    sprite
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "number"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "number",
        "variableName": "number"
      }
    ],
    "concreteType": "Pokemon",
    "kind": "LinkedField",
    "name": "getPokemonByDexNumber",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "species",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sprite",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetPokemonQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetPokemonQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9cbdb578f83640710390867860d5f24c",
    "id": null,
    "metadata": {},
    "name": "GetPokemonQuery",
    "operationKind": "query",
    "text": "query GetPokemonQuery(\n  $number: Int!\n) {\n  getPokemonByDexNumber(number: $number) {\n    species\n    sprite\n  }\n}\n"
  }
};
})();
(node as any).hash = '1788c9a48ce6c4dbf7fe8b64c0655e6d';
export default node;
