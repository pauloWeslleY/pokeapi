import { create } from 'zustand'

type SearchStore = {
  search: string
  searching: (value: string) => void
  resetSearch: () => void
}

export const useSearchStore = create<SearchStore>()((set) => ({
  search: '',
  searching: (value) => set(() => ({ search: value })),
  resetSearch: () => set(() => ({ search: '' })),
}))
