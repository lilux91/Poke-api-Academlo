import React from "react";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const namePoke = e.target.search.value.trim().toLowerCase();
    //console.log(namePoke);
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`);
  };

  return (
    <form className='input__container' onSubmit={submit}>
      <input className='input__search' id="search" type="text" placeholder="Search a pokemon" />
      <button className='input__btn'>Search</button>
    </form>
  );
};

export default InputSearch;
