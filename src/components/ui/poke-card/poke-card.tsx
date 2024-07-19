import { useNavigate } from 'react-router-dom'
import { PokemonProps } from '@/components/types'
import styles from './styles.module.scss'

type PokeCardProps = {
  pokemon: PokemonProps
}

export const PokeCard = ({ pokemon }: PokeCardProps) => {
  const navigate = useNavigate()

  return (
    <div
      className={styles.poke__card}
      onClick={() => navigate(`/poke-details/${pokemon.name}`)}
    >
      <div className={styles.poke__card_image}>
        <img
          alt={pokemon.name}
          src={pokemon.sprites.other.home.front_default}
        />
      </div>

      <div className={styles.poke__card_body}>
        <div className={styles.poke__title}>
          <h3>{pokemon.name}</h3>
          <span>#{pokemon.id}</span>
        </div>

        <div className={styles.poke__description}>
          <div className={styles.poke__type}>
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                className={`
                  ${styles.poke__type_text} ${styles[`type_${type.type.name}`]}
                `}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
