import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import TopBar from '../components/topBar';
export default function pokemon({poke}) {
    return (
        <body>
            <TopBar/>
            <a> 
                <img width="179px" height="179px" src={poke.image} alt={poke.name}/>
                <p> Name: {poke.name}</p>
                <p> ID: {poke.id} </p>
                <p> Height: {poke.height/10}m </p>
                <p> Base EXP: {poke.base_experience}</p>
                <p> Weight: {poke.weight/10}kg </p>
                Types: {poke.types.map((type, id) => (
                    <p key = {id}>{type.type.name}</p>
                ))}
                Abilities: {poke.abilities.map((abilities, id) => (
                    <p key = {id}>{abilities.ability.name}</p>
                ))}
                Stats: {poke.stats.map((stats, id) => (
                    <p key = {id}> {stats.stat.name} = {stats.base_stat}</p>
                ))}
            </a>
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
        console.log(err);
    }   
}