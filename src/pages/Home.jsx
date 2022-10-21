import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'


const Home = () => {
  return (
    <article className='pokedex'>
      <section className='card_intro'>
        <br />
      <img className='pokedex_img' src="/images/home/pokedex.png" alt=""/>
      <header className='pokedex_header'> 
      <h2 className='pokedex_subtitle'>Hi Trainer!</h2>
      <br />
      <p className='pokedex_text'>Give me your name to see pokedex</p>
      <br />
      </header>
      <FormHome />
      </section>
    </article>
  )
}

export default Home