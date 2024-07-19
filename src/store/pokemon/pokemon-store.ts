import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PokemonProps } from '@/components/types'

type PokemonStore = {
  pokemon: PokemonProps[]
  setPokemon: (pokemon: PokemonProps[]) => void
}

type PokemonTypeStore = {
  pokemonType: PokemonProps[]
  setPokemonType: (pokemon: PokemonProps[]) => void
}

type PokemonSelectStore = {
  selected: string
  setSelected: (pokemon: string) => void
}

export const usePokemonStore = create<PokemonStore>()(
  persist(
    (set) => ({
      pokemon: [],
      setPokemon: (pokemon: PokemonProps[]) => set({ pokemon }),
    }),
    { name: 'pokemon-storage' }, // Nome usado para armazenar o estado no localStorage
  ),
)

export const usePokemonTypeStore = create<PokemonTypeStore>()((set) => ({
  pokemonType: [],
  setPokemonType: (value) => set(() => ({ pokemonType: value })),
}))

export const usePokemonSelectStore = create<PokemonSelectStore>()((set) => ({
  selected: '',
  setSelected: (value) => set(() => ({ selected: value })),
}))
