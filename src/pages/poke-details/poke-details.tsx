import { usePokeDetails } from './hook'
import PokeInfo from './poke-info'
import PokeStats from './poke-stats'
import PokeItems from './poke-items'
import styles from './styles.module.scss'

const PokeDetails = () => {
  const { loadPokeDetail } = usePokeDetails()

  const pokemon = loadPokeDetail.data

  return (
    <section className="container">
      <div className={styles.poke__details}>
        <div className={styles.poke__details_container}>
          <div className={styles.poke__details_image}>
            <img
              src={pokemon?.sprites.other.home.front_default}
              alt={pokemon?.name}
            />
          </div>
          <div className={styles.poke__details_description}>
            <PokeInfo
              data={{
                id: pokemon?.id || 0,
                name: pokemon?.name || '',
                types: pokemon?.types || [],
                weight: pokemon?.weight || 0,
                height: pokemon?.height || 0,
              }}
            />

            <div className={styles.poke__abilities}>
              <h4>Abilities </h4>
              {pokemon?.abilities.map((props, i) => (
                <span key={i}>{props.ability.name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.poke__details_wrapper}>
          <PokeStats stats={pokemon?.stats || []} />

          <PokeItems held_items={pokemon?.held_items || []} />
        </div>

        <div className={styles.poke__image}>
          <h3>Sprites</h3>

          <div>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            <img
              src={pokemon?.sprites.other.dream_world.front_default}
              alt={pokemon?.name}
            />
            <img
              src={pokemon?.sprites.other['official-artwork'].front_default}
              alt={pokemon?.name}
            />
            <img
              src={pokemon?.sprites.other.home.front_default}
              alt={pokemon?.name}
            />
            <img
              src={pokemon?.sprites.other.showdown.front_default}
              alt={pokemon?.name}
            />
            <img
              src={
                pokemon?.sprites.versions['generation-v']['black-white']
                  .animated.front_default
              }
              alt={pokemon?.name}
            />
            <img
              src={
                pokemon?.sprites.versions['generation-vi'][
                  'omegaruby-alphasapphire'
                ].front_default
              }
              alt={pokemon?.name}
            />
            <img
              src={
                pokemon?.sprites.versions['generation-vi']['x-y'].front_default
              }
              alt={pokemon?.name}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { PokeDetails }
