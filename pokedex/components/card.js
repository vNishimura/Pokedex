// import React from "next/React"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Card(){
    return(
        <div className={styles.lista}>
            <a
            href="https://youtube.com"
            className={styles.pokeCard}
            >
                <Image src="/sla.png" width={120} height={120} />
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
