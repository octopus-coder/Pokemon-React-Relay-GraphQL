import styled from "styled-components";

export const PokeAppContainer = styled.div`
  padding: 160px;
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: repeat(10, 1fr);
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
