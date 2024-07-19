import { usePokeType } from '@/pages/poke-types/usePokeTypes'
import styles from './styles.module.scss'

const NavTabs = () => {
  const { loadPokemonType } = usePokeType()

  return (
    <div className={styles.poke__menu}>
      <ul>
        {loadPokemonType.data?.results.map((type) => (
          <li key={type.name} className={styles[`type_${type.name}`]}>
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavTabs
