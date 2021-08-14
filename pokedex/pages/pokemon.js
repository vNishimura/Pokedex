import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import TopBar from '../components/topBar';
export default function pokemon({poke}) {
    return (
        <body>
            <header><TopBar/></header>
            <main className={styles.specificContainer}>   
                <div className={styles.column1}>
                    <div className={styles.imageBox}>
                        <img src={poke.image} alt={poke.name}/>
                    </div>
                    <div className={styles.statistics}>
                        <div className={styles.gridStatistics}>
                            
                        </div>
                    </div>
                    <strong><a>
                    {poke.stats.map((stats, id) => (
                        <a key = {id}> {stats.stat.name} </a>))}
                    </a></strong>
                </div>


                <div className={styles.column2}>
                    <h1> Name: {poke.name}</h1>
                    <div className={styles.caseBox}>
                        <div className={styles.dataBox}>              
                            <p> ID: {poke.id} </p>
                            <p> Height: {poke.height/10}m </p>
                            <p> Base EXP: {poke.base_experience}</p>
                            <p> Weight: {poke.weight/10}kg </p>
                            {poke.abilities.map((abilities, id) => (
                                <p key = {id}>{abilities.ability.name}</p>
                            ))}
                        </div> 
                    </div>
                    <section>
                        <h2>Type</h2>
                        {poke.types.map((type, id) => (
                            <a key = {id}>{type.type.name} |</a>
                        ))}
                        <h2>Weakness</h2>
                        
                    </section>
                </div>
            </main>
        </body>
    );
}

export async function getServerSideProps({query}) {
    const id = query.id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const poke = await res.json();
        const formatedIndex = ('00' + (id)).slice(-3);
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatedIndex}.png`;
        poke.image = image;
        return {
            props: { poke },
        };
    } catch (err) {
        return {
            notFound: true
          }
        }
} 