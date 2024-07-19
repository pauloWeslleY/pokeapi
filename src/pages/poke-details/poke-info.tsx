import { PokemonProps } from '@/components/types'
import styles from './styles.module.scss'

type PokeInfoProps = {
  data: Pick<PokemonProps, 'name' | 'id' | 'types' | 'weight' | 'height'>
}

const PokeInfo = ({ data }: PokeInfoProps) => {
  return (
    <>
      <section className={styles.poke__details_info}>
        <h2>
          {data?.name} <span>#{data?.id}</span>
        </h2>

        <div className={styles.poke__details_type}>
          {data?.types.map((type, index) => (
            <div
              key={index}
              className={`
                ${styles.poke__type_text}
                ${styles[`type_${type.type.name}`]}
              `}
            >
              <span>{type.type.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.poke__describe}>
        <h4>Height {data?.height && <span> {data?.height * 10}cm</span>}</h4>
        <div className={styles.divider}>
          <div />
        </div>
        <h4>Weight {data?.weight && <span> {data?.weight / 10}kg</span>}</h4>
      </div>
    </>
  )
}

export default PokeInfo
