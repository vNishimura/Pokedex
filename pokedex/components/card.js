// import React from "next/React"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Card(){
    return(
        <div className={styles.lista}>
            <a
            href="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
            className={styles.pokeCard}
            >
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" width="220px" height="220px"/>
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
        </div>
    )
}
