import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function pokemon({poke}) {
    console.log(poke);
    return <div></div>
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