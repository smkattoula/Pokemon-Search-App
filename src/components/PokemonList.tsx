import React, { FC } from "react";
import PokemonItem from "./PokemonItem";
import { Container } from "react-bootstrap";

interface PokemonProps {
  pokemonList: any;
  getPokemonList: any;
}

const PokemonList: FC<PokemonProps> = (props): JSX.Element => {
  return (
    <Container className="pokemon-grid">
      {props.pokemonList.length === 0
        ? null
        : props.pokemonList.results.map((pokemon: any, index: number) => (
            <PokemonItem key={index} pokemon={pokemon} />
          ))}
    </Container>
  );
};

export default PokemonList;
