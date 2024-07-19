import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import { useSearchStore } from '@/store'
import { useNavBar } from './useNavBar'

const LOGO_IMG =
  'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

export const NavBar = () => {
  const { search } = useSearchStore()
  const { getSearch } = useNavBar()

  return (
    <nav>
      <div className={styles.navbar}>
        <img
          alt="Logo Poke API"
          src={LOGO_IMG}
          className={styles.navbar__logo}
        />
        <ul className={styles.navbar__menu}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/poke-types">Types</NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.search__bar}>
        <div className={styles.search__bar_input}>
          <input
            placeholder="Buscar Pokemon"
            value={search}
            onChange={getSearch}
          />
        </div>
      </div>
    </nav>
  )
}
