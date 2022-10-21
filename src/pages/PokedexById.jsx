import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokemon404 from "../components/home/pokedexId/Pokemon404";

const PokedexById = () => {
  const { id } = useParams();

  // console.log(id)
  const [pokemon, setPokemon] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  }, [id]);

  if (hasError) {
    return <Pokemon404 />;
  }

  // console.log(
  //   pokemon && pokemon.sprites.other["official-artwork"].front_default
  // );
  return (
    pokemon && (
      <article>
        <header>
          {
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
            />
          }
        </header>
        <section>
          <h2>{pokemon.name}</h2>
        </section>
      </article>
    )
  );
};

export default PokedexById;
