import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import { usePagination } from './usePagination'
import { usePaginationStore } from '@/store'
import styles from './styles.module.scss'

export const Pagination = () => {
  const { page, pageAll } = usePaginationStore()
  const { handleNext, handlePrev } = usePagination()

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrev}>
        <BiSolidLeftArrow />
      </button>
      <div>
        {page} de {pageAll}
      </div>
      <button onClick={handleNext}>
        <BiSolidRightArrow />
      </button>
    </div>
  )
}
