import { usePokeType } from './usePokeTypes'
import { PokeCard } from '@/components/ui'
import styles from './styles.module.scss'

const PokeTypes = () => {
  const { loadPokemonType, handleMenuSelected, pokemonTypeFilter } =
    usePokeType()

  return (
    <div className={styles.wrapper}>
      <div className={styles.poke__menu}>
        <ul>
          {loadPokemonType.data?.results.map((type) => (
            <li
              key={type.name}
              className={styles[`type_${type.name}`]}
              onClick={() => handleMenuSelected(type.url)}
            >
              {type.name}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.container}>
        <div className={styles.poke__grid}>
          {loadPokemonType.isLoading && <span>Carregando</span>}
          {pokemonTypeFilter.map((pokemon, index) => (
            <PokeCard key={index} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { PokeTypes }
