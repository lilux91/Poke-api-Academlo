import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectByType = ({setTypesSelected}) => {

  const [types, setTypes] = useState()



 useEffect(() => {
  const URL ='https://pokeapi.com.api/v2/type'
 axios.get(URL)
    .then(res => setTypes(res.data))
    .catch(err => console.log(err))

 }, [])
 
 //console.log(types)
  const handleChange = e => {
    setTypesSelected(e.target.value)
  }

  return (
    <select onChange={handleChange}>
        <option value='All Pokemons'>All Pokemons</option>
        {
          types?.map(type => (
            <option key={type.url} value={type.url}>{type.name}</option>
          ))
        }
    </select>
  )
}

export default SelectByType