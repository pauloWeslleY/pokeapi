import { PokemonProps } from '@/components/types'
import styles from './styles.module.scss'

type PokeStatsProps = Pick<PokemonProps, 'stats'>

const PokeStats = (data: PokeStatsProps) => {
  return (
    <div className={styles.poke__details_stats}>
      <h4 className={styles.poke__title}>Stats</h4>
      {data.stats.map((stats, index) => (
        <div key={index} className={styles.poke__stat_text}>
          <h4>
            {stats.stat.name}: <span>{stats.base_stat}</span>
          </h4>
          <progress value={stats.base_stat} max={100} />
        </div>
      ))}
    </div>
  )
}

export default PokeStats
