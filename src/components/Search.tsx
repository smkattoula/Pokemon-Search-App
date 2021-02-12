import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Search = () => {
  const [pokemonList, setPokemonList] = useState<number[] | null>([]);
  const [text, setText] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Control
            className="mt-3"
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Search Pokemon..."
          />
        </Form.Group>
        <Button
          className="btn btn-block"
          variant="primary"
          type="submit"
          value="Submit"
        >
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default Search;
