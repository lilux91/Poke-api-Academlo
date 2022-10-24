import React from 'react'
import { Link } from 'react-router-dom'
import '../pokedexId/style/pokemon404.css'


const Pokemon404 = () => {
  return (
    <section className='container_error'>
     <h1>Pokemon not Found 😖</h1>
     <Link to= '/pokedex'>Return to Pokedex </Link>
 </section>


  )
}

export default Pokemon404