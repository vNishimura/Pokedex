import Pokemon from "../pages/pokemon.js"
import styles from "../styles/Home.module.css"

export default function Card1(){
    return(
        <div>
            <Pokemon/>
    <ul>
        <a className={styles.pokeCard}>
            {pokemon.map((poke, formatedIndex)=>(
                <li key={formatedIndex}>
                <Link href={`/pokemon?id=${formatedIndex}`}>
                <a> 
                    <img width="179px" height="179px" src={poke.image} alt={poke.name}/>
                    <span>{index + 1}º </span>
                    {poke.name}
                </a>
                </Link>
                </li>
            ))}
        </a>
    </ul>
        </div> 
    )
}
