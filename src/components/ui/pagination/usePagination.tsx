import { usePaginationStore } from '@/store'

const usePagination = () => {
  const { setPage, page, pageAll } = usePaginationStore()

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if (page + 1 !== pageAll) {
      setPage(page + 1)
    }
  }

  return { handlePrev, handleNext }
}

export { usePagination }
