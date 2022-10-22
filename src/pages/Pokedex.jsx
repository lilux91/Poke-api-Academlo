import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputSearch from "../components/home/pokedex/InputSearch";
import SelectByType from "../components/home/pokedex/SelectByType";
import CardPoke from "../components/home/pokedex/styles/CardPoke";
import "../pages/styles/pokedex.css";
import "../components/home/pokedex/styles/inputSearch.css";
import Pagination from "../pages/Pagination";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [typeSelected, setTypeSelected] = useState("All Pokemons");

  useEffect(() => {
    if (typeSelected != "All Pokemons") {
      //Si se selecciono un tipo
      axios
        .get(typeSelected)
        .then((res) => {
          const result = res.data.pokemon.map((e) => e.pokemon);
          setPokemons(result);
        })
        .catch((err) => console.log(err));
    } else {
      //Si quiero todos los pokemons
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [typeSelected]);

  const userName = useSelector((state) => state.userName);

  //!Lógica de paginacion

  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(8);
  const initialPoke = (page - 1) * pokePerPage;
  //initialPoke + pokePerPage +1
  const finalPoke = page * pokePerPage;

  return (
    <div>
      <header>
        <h1 className="title_pokedex">Pokedex</h1>
        <p className="subtitle_pokedex">
          Welcome
          <span className="span-user"> {userName}</span>, here you can find your
          favorite pokemon.
        </p>
      </header>

      <aside>
        <div className="aside">
          <InputSearch />
          <SelectByType setTypeSelected={setTypeSelected} setPage={setPage} />
          <Pagination
            page={page}
            pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
            setPage={setPage}
          />
        </div>
      </aside>
      <main>
        <div className="card-container">
          {pokemons?.slice(initialPoke, finalPoke).map((pokemon) => (
            <CardPoke key={pokemon.url} url={pokemon.url} />
          ))}
        </div>
      </main>
      <div className="aside">
        <Pagination
          page={page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default Pokedex;
