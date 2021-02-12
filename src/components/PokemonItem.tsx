import React, { FC } from "react";
import PokemonList from "./PokemonList";

interface PokemonItemProps {
  pokemon: any;
}

const PokemonItem: FC<PokemonItemProps> = (props): JSX.Element => {
  return <div className="mt-3 text-center">{props.pokemon.name}</div>;
};

export default PokemonItem;
