import axios from './helpers/axios';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home({heroes, isRequestFailed}) {
  if (isRequestFailed) {
    return <p>Coś poszło nie tak...</p>
}

  const heroesElements = heroes.map(hero => <HeroElement key={hero.id} {...hero} />);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>HERO ECYKLOPEDIA</h1>

      <ul className={styles['hero-list']}>
        {heroesElements}
      </ul>
    </div>
 
  );
}


  function HeroElement({id, name, url}) {
    return (
      <li>
        <Link href={`/hero/${id}`}>
          
            <img alt={`Photo of ${name}`} className={styles['hero-list__image']} src={url}/>
            <hr/>
            <br/>
            <p>{name}</p>
            
        </Link>
        <br/>
      </li>
    )
  }

export async function getStaticProps() {
  const { data, status } = await axios.get('/search/a');

  if (status !== 200) {
    return {
      props: {
        isRequestFailed: true,
      }
    }
  }

  const { results } = data;
  const heroes = results.map(({id, name, image: { url }}) =>  ({id, name, url}));

  return {
      props: {
      heroes,
      isRequestFailed: false,
    }
  }
}