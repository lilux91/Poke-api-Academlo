import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/home/pokedex/styles/CardPoke'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()

useEffect(() => {
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  axios.get(URL)
  .then(res => setPokemons(res.data.results))
  .catch(err => console.log(err))
}, [])

//console.log(pokemons)

const userName = useSelector(state => state.userName)

//Lógica de programación
const [page, setPage] = useState(1)
const [pokePerPage, setPokePerPage] = useState(8)
                    //initial 1-1  8=0
                    //2-1          8 =8
                    //3-1          8=16

const initialPoke =(page - 1) * pokePerPage
               //initialPoke + pokePerPage +1
const finalPoke = page * pokePerPage

}

  return (
    <div>
      <header>
        <h1>Pokedex</h1>
        <p>Welcome<span>{'userName'}, here you can find your favorite pokemon.</span></p>
      </header>
    <aside>
      <InputSearch/>
      <SelectByType setTypeSelected={setTypeSelect} />
    </aside>
    <main>
      <div className='card-container'>
        {
          pokemons?.slice().map(pokemon => (
            <CardPoke
            key={pokemon.url}
            url={pokemon.url}
            />
          ))
        }

      </div>
    </main>
    </div>
  )



export default Pokedex