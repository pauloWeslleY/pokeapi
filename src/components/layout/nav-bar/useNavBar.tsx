import { ChangeEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSearchStore } from '@/store'

const useNavBar = () => {
  const { resetSearch, searching } = useSearchStore()
  const { pathname } = useLocation()

  useEffect(() => {
    resetSearch()
  }, [resetSearch, pathname])

  const getSearch = (event: ChangeEvent<HTMLInputElement>) => {
    searching(event.target.value)
  }

  return { getSearch }
}

export { useNavBar }
