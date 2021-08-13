import React from 'react'
import styles from "../styles/Home.module.css"

export default function TopBar(){
    return(
        <div className={styles.topBar}>
            <a className={styles.camera}/>
            <a className={styles.redButton}/>
            <a className={styles.yellowButton}/>
            <a className={styles.greenButton}/>
            <div className={styles.searchArea}>
                <input type="textBox" placeholder="Search" name="pesquisa" id="searchBar" className={styles.searchBar}></input>
                <input type="button" value="Ok" name="searchButton" onClick="pesquisar()" className={styles.searchButton}></input>
            </div>
        </div>
    )
}