import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import PokemonList from "./PokemonList";

const Search = () => {
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [text, setText] = useState<string>("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setText(e.target.value);
  };

  const getPokemonList = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${text}`
    );
    const data = await response.data;

    setPokemonList(data);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    getPokemonList();
  };

  console.log(pokemonList);

  return (
    <Container>
      <Form id="formId" onSubmit={onSubmit}>
        <Form.Group controlId="formBasicText">
          <Form.Control
            className="mt-3"
            type="text"
            value={text}
            onChange={onChange}
            placeholder="Search Pokemon..."
          />
        </Form.Group>
        <Button
          form="formId"
          className="btn btn-block"
          variant="primary"
          type="submit"
        >
          Search
        </Button>
      </Form>
      <PokemonList pokemonList={pokemonList} getPokemonList={getPokemonList} />
    </Container>
  );
};

export default Search;
