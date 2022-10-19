import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokedexById = () => {

  const {id} = useParams()

 // console.log(id)
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const URL= `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
  
  }, [])

  //console.log(pokemon)
  return (
    <article>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section>
        <h2>{pokemon?.name}</h2>
      </section>

    </article>
  )
}

export default PokedexById