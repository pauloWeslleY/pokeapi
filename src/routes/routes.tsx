import { useRoutes } from 'react-router-dom'
import { RootLayout } from '@/layout'
import { PokeDetails, PokeDex, PokeTypes } from '@/pages'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: 'pokedex', element: <PokeDex /> },
        { path: 'poke-types', element: <PokeTypes /> },
        { path: 'poke-details/:pokeId', element: <PokeDetails /> },
      ],
    },
  ])

  return routes
}

export { Routes }
