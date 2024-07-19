import { PokemonProps } from '@/components/types'
import styles from './styles.module.scss'

type PokeItemsProps = Pick<PokemonProps, 'held_items'>

const PokeItems = (items: PokeItemsProps) => {
  return (
    <div
      style={{
        display: items?.held_items.length ? 'flex' : 'none',
      }}
      className={styles.items__wrapper}
    >
      {items?.held_items.length && (
        <div className={styles.poke__details_items}>
          <h4>Items</h4>

          {items?.held_items.map((items, i) => (
            <span key={i}>{items.item.name}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default PokeItems
