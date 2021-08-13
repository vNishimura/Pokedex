import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/card.js'
import Link from 'next/link'
import TopBar from '../components/topBar.js'

export default function Home({pokemon}) {
  return (
    <body>
      <header>
        <Head>
          <title>Pokedex</title>
        </Head>
        <TopBar/>
      </header>
      <h1></h1>
      <main className={styles.lista}>
        {pokemon.map((poke, index)=>(
            <div 
            className={styles.pokeCard}
            key={index}>
              <Link href={`/pokemon?id=${index + 1}`}>
              <a> 
                <img width="214px" height="214px" src={poke.image} alt={poke.name}/>
                <span>Nº{index + 1} </span>
                <strong><p>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</p></strong>
              </a>
              </Link>
            </div>
        ))}
      </main>
      
    </body>
  )
}

export async function getStaticProps(context){
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898');
    const {results} = await res.json();
    const pokemon = results.map((result, index) => {
      const formatedIndex = ('00' + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatedIndex}.png`
      return {
        ...result,
        image,
      };
    })
    return {
      props: {pokemon},
    };
  } catch (err) {
    console.error(err);
  };
}