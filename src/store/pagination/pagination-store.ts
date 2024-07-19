import { create } from 'zustand'

type PaginationStore = {
  page: number
  pageAll: number
  setPage: (value: number) => void
  setPageAll: (value: number) => void
}

export const usePaginationStore = create<PaginationStore>()((set) => ({
  page: 0,
  pageAll: 0,
  setPage: (value) => set(() => ({ page: value })),
  setPageAll: (value) => set(() => ({ pageAll: value })),
}))
