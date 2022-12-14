import axios from "axios";
import React, { useEffect, useState } from "react";
import '../pokedex/styles/selectByType.css'


const SelectByType = ({ setTypeSelected }) => {
  const [types, setTypes] = useState();

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  //console.log(types);
  const handleChange = (e) => {
    setTypeSelected(e.target.value);
    //console.log(e.target.value);
  };

  return (
    <select 
    onChange={handleChange} className="clasific_pokemon">
      <option className="text_clasific" value="All Pokemons">All Pokemons</option>
      {types?.map((type) => (
        <option  key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectByType;
