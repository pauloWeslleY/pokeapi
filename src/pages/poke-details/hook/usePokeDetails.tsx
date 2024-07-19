import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { instanceAxios } from '@/services/api'
import { PokemonProps } from '@/components/types'

const getPokeDetail = async (pokeName: string | undefined) => {
  const response = await instanceAxios.request<PokemonProps>({
    url: `pokemon/${pokeName}`,
    method: 'GET',
  })
  return response.data
}

const usePokeDetails = () => {
  const { pokeId } = useParams()

  const loadPokeDetail = useQuery({
    queryKey: ['load-pokemon-detail', pokeId],
    queryFn: () => getPokeDetail(pokeId),
    enabled: !!pokeId,
  })

  return { loadPokeDetail }
}

export { usePokeDetails }
