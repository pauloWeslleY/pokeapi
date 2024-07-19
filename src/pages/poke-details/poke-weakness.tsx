import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import styles from './styles.module.scss'
import { PokeTypeInfoProps } from '@/components/types'

const PokeWeakness = ({ name }: { name: string }) => {
  const loadPokeInfoType = async () => {
    const res = await axios.request<PokeTypeInfoProps>({
      url: `https://pokeapi.co/api/v2/type/${name}/`,
      method: 'GET',
    })
    return res.data
  }

  const loadPokemonType = useQuery<PokeTypeInfoProps>({
    queryKey: ['pokemon-weakness'],
    queryFn: () => loadPokeInfoType(),
  })

  if (loadPokemonType.data?.damage_relations) {
    return <div />
  }

  return (
    <div className={styles.poke__weakness}>
      <h4>WeakNess</h4>

      <div>
        {loadPokemonType.isError && <span>...loading</span>}

        {loadPokemonType.data?.damage_relations.double_damage_from.map(
          (props) => (
            <span key={props.name} className={styles[`type_${props.name}`]}>
              {props.name}
            </span>
          ),
        )}
      </div>
    </div>
  )
}

export default PokeWeakness
