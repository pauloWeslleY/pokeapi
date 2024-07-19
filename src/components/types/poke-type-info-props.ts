type Props = {
  name: string
  url: string
}

export type PokemonTypeInfo = {
  pokemon: {
    name: string
    url: string
  }
  slot: number
}

export type PokeTypeInfoProps = {
  name: string
  id: number
  damage_relations: {
    double_damage_from: Props[]
    double_damage_to: Props[]
    half_damage_from: Props[]
    half_damage_to: Props[]
    no_damage_from: Props[]
    no_damage_to: Props[]
  }
  game_indices: [
    {
      game_index: number
      generation: Props
    },
  ]
  generation: Props
  move_damage_class: Props
  moves: Props[]
  past_damage_relations: []
  pokemon: PokemonTypeInfo[]
}
