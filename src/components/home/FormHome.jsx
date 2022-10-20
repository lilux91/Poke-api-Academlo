import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserNameGlobal } from "../../store/slices/userName.slice";

const FormHome = () => {

  const dispatch = useDispatch()
  //navegar hacia
  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    //despachar
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
    //navega a pokedex
    navigate('/pokedex/' + e.target.firstChild.value.trim())
  }

  return (
    <form onSubmit={submit} className="pokedex_form">
      <input
        className="pokedex_input"
        type="text"
        placeholder="Enter your name here."
      ></input>
      <button className="pokedex_btn">Catch then all!</button>
    </form>
  )
}

export default FormHome;
