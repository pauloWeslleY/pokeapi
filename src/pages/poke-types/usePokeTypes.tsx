import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { instanceAxios } from '@/services/api'
import { getPokemonData } from '@/hooks'
import {
  usePokemonSelectStore,
  usePokemonTypeStore,
  useSearchStore,
} from '@/store'
import { PokemonProps, PokeTypeInfoProps } from '@/components/types'

type GetPokemonTypeProps = {
  count: number
  results: {
    name: string
    url: string
  }[]
}

const getPokemonType = async () => {
  try {
    const response = await instanceAxios.request<GetPokemonTypeProps>({
      url: 'type',
      method: 'GET',
    })
    return response.data
  } catch (error) {
    console.log('error: ', error)
  }
}

const usePokeType = () => {
  const { setPokemonType, pokemonType } = usePokemonTypeStore()
  const { setSelected } = usePokemonSelectStore()
  const { search } = useSearchStore()

  const loadPokemonType = useQuery({
    queryKey: ['pokemon-type'],
    queryFn: () => getPokemonType(),
  })

  const loadPokemonByType = async (url: string) => {
    const res = await axios.request<PokeTypeInfoProps>({ url, method: 'GET' })

    const promises = res.data.pokemon.map(async (pokemon) => {
      return await getPokemonData(pokemon.pokemon.url)
    })

    const data = await Promise.all(promises as Promise<PokemonProps>[])
    setPokemonType(data)
  }

  const handleMenuSelected = (url: string) => {
    setSelected(url)
    loadPokemonByType(url)
  }

  const pokemonTypeFilter = useMemo(() => {
    const regexp = new RegExp(search, 'i')

    const pokemonByName = pokemonType.filter((pokemon) =>
      pokemon.name.match(regexp),
    )

    return pokemonByName
  }, [search, pokemonType])

  return { loadPokemonType, handleMenuSelected, pokemonTypeFilter }
}

export { usePokeType }
