import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="not-found">
        <h1> 
       <img width="70%px" height="900px" src="https://www.einerd.com.br/wp-content/uploads/2020/01/MissingNo-Pok%C3%A9mon-capa.jpg"/>
       </h1>
      <h2><Link href="/"><a> <font face="Impact" size="10000px" weight="1000px" color="#000000">RUN</font> </a></Link></h2>
    </div>
  );
}
 
export default NotFound;