import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Routes } from './routes'
import { usePokemonStore } from './store/pokemon/pokemon-store'
import { useGetPokemon } from './hooks'

const App = () => {
  const { pathname } = useLocation()
  const { loadPokemonData } = useGetPokemon()
  const { setPokemon } = usePokemonStore()

  useEffect(() => {
    const loadAllPokemon = async () => {
      const response = await loadPokemonData()
      setPokemon(response)
    }

    loadAllPokemon()
  }, [loadPokemonData, setPokemon])

  return pathname === '/' ? <Navigate to="/pokedex" /> : <Routes />
}

export { App }
