import { Pagination, PokeCard } from '@/components/ui'
import { useGetPokemon } from '@/hooks'
import styles from './styles.module.scss'
import usePokeDex from './usePokeDex'

const PokeDex = () => {
  const { loadPokemon } = useGetPokemon()
  const { pokemonFilter } = usePokeDex()

  if (loadPokemon.isLoading) {
    return <div>Carregando</div>
  }

  return (
    <section className="container">
      <div className={styles.poke__dex_header}>
        <div className={styles.poke__dex_title}>
          <h1>PokeDex</h1>
        </div>

        <Pagination />
      </div>

      {loadPokemon.isLoading ? (
        <div className={styles.poke__loading}>Loading...</div>
      ) : (
        <div className={styles.grid_container}>
          {pokemonFilter &&
            pokemonFilter.map((pokemon, index) => (
              <PokeCard key={index} pokemon={pokemon} />
            ))}
        </div>
      )}
    </section>
  )
}

export { PokeDex }
