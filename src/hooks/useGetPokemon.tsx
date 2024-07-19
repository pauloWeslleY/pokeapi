import { useCallback } from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { instanceAxios } from '@/services/api'
import { PokemonProps } from '@/components/types'
import { usePaginationStore } from '@/store'

type GetPokemonProps = {
  count: number
  results: {
    name: string
    url: string
  }[]
}

const getPokemon = async (limit = 50, offset = 0) => {
  try {
    const response = await instanceAxios.request<GetPokemonProps>({
      url: `pokemon?limit=${limit}&offset=${offset}`,
      method: 'GET',
    })
    return response.data
  } catch (error) {
    console.log('error: ', error)
  }
}

export const getPokemonData = async (url: string) => {
  try {
    const response = await axios.request({
      url,
      method: 'GET',
    })
    return response.data
  } catch (error) {
    console.log('error: ', error)
  }
}

const useGetPokemon = () => {
  const { page, setPageAll } = usePaginationStore()
  const itensPerPage = 50

  const loadPokemon = useQuery({
    queryKey: ['pokemon', page],
    queryFn: () => getPokemon(itensPerPage, itensPerPage * page),
    placeholderData: keepPreviousData,
  })

  const loadPokemonData = useCallback(async () => {
    const promises = loadPokemon.data?.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url)
    })

    setPageAll(Math.ceil(loadPokemon.data?.count! / itensPerPage))

    return await Promise.all(promises as Promise<PokemonProps>[])
  }, [loadPokemon.data, setPageAll])

  return { loadPokemonData, loadPokemon }
}

export { useGetPokemon }
