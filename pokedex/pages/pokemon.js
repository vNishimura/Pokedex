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
                    <div className={styles.imageContainer}>
                        <div className={styles.imageBox}>
                            <img src={poke.image} alt={poke.name} className={styles.imagem}/>
                        </div>
                    </div>
                    <div className={styles.statistics}>
                        <div className={styles.caseStatistics}>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                            <div className={styles.gridStatistics}></div>
                        </div>
                    </div>
                    <strong><a>
                    {poke.stats.map((stats, id) => (
                        <a key = {id}> {stats.stat.name} </a>))}
                    </a></strong>
                </div>


                <div className={styles.column2}>
                    <h1>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} - Nº{poke.id}</h1>
                    <div className={styles.caseBox}>
                        <div className={styles.dataBox}>              
                            <div>
                                <h3>Height</h3>
                                <p> {poke.height/10}m </p>
                                <h1></h1>
                                <h3>Weight</h3>
                                <p>{poke.weight/10}kg </p>
                            </div>
                            <div>
                                <h3>Base XP</h3>
                                <p>{poke.base_experience}</p>
                                <h3>Abilities</h3>
                                <div>
                                {poke.abilities.map((abilities, id) => (
                                    <a className={styles.abilitiesSpecific} key = {id} >{abilities.ability.name}</a>
                                ))}
                                </div>
                            </div>
                        </div> 
                    </div>
                    <section>
                        <h2>Type</h2>
                        <div className={styles.stickerArea}>
                            {poke.types.map((type, id) => (
                                <a className={styles.stickersSpecific} key = {id}>{type.type.name}</a>
                            ))}
                        </div>
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

// export async function colorType({poke}){
//     const faixa = document.getElementsByClassName('stickersSpecific').styles.background
//     const typeArray=[]
//     const pokeType = poke.types.type.name

//     switch (pokeType){
//         case 'normal':
//             faixa = 'gray'
//             break
//         case 'fight':
//             faixa = 'rgb(122,11,11)'
//             break
//         case 'flying':
//             faixa = 'rgb(144,175,233)'
//             break
//         case 'poison':
//             faixa = 'rgb(216,8,206)'
//             break
//         case 'ground':
//             faixa = 'rgb(243,237,157)'
//             break
//         case 'rock':
//             faixa = 'rgb(248,216,71)'
//             break
//         case 'bug':
//             faixa = 'rgb(60,187,48)'
//             break
//         case 'ghost':
//             faixa = 'rgb(91,11,116)'
//             break
//         case 'steel':
//             faixa = 'rgb(211,192,192)'
//             break
//         case 'fire':
//             faixa = 'red'
//             break
//         case 'water':
//             faixa = 'blue'
//             break
//         case 'grass':
//             faixa = 'yellowgreen'
//             break
//         case 'eletreic':
//             faixa = 'yellow'
//             break
//         case 'psychic':
//             faixa = 'rgb(238,25,170)'
//             break
//         case 'ice':
//             faixa = 'rgb(95,207,252)'
//             break
//         case 'dragon':
//             faixa = 'rgb(165,16,235)'
//             break
//         case 'dark':
//             faixa = 'rgb(105,43,1)'
//             break
//         default:
//             faixa = 'rgb(240,150.220)'
//     }
//     return(faixa)
// }