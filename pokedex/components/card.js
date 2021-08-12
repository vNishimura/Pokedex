import React from "next/React"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function card(){
    return(
        <div className={styles.lista}>
            <a
            href="LINK_PaginaEspecifica"
            className={styles.pokeCard}
            >
                <Image src="" width={120} height={120} />
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