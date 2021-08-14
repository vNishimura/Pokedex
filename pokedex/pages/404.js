import Link from 'next/link'
import styles from '../styles/Home.module.css'

const NotFound = () => {
  return (
    <body>
    <div className={styles.notFound}>
        <section> 
       <img className={styles.missignoImg} width="100%" height="100%" src="https://www.einerd.com.br/wp-content/uploads/2020/01/MissingNo-Pok%C3%A9mon-capa.jpg"/>
       </section>
      <h1><Link href="/"><a> <font face="Impact" font-size="10000px" weight="1000px" color="#000000">RUN</font> </a></Link></h1>
    </div>
    </body>
  );
}
 
export default NotFound;