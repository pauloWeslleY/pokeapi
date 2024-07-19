import { useMemo } from 'react'
import { usePokemonStore, useSearchStore } from '@/store'

const usePokeDex = () => {
  const { pokemon } = usePokemonStore()
  const { search } = useSearchStore()

  const pokemonFilter = useMemo(() => {
    const regexp = new RegExp(search, 'i')

    const pokemonByName = pokemon.filter((pokemon) =>
      pokemon.name.match(regexp),
    )

    return pokemonByName
  }, [search, pokemon])

  return { pokemonFilter }
}

export default usePokeDex
