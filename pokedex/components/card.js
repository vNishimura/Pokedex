// import React from "next/React"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Card(){
    return(
        <a
        href="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
        className={styles.pokeCard}
        >
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" width="199px" height="199px"/>
            <p>
                <script>
                    {/* 
                    id.pokemon
                    name.pokemon
                    type.pokemon 
                    */}
                </script>
            </p>
        </a>
)
}
