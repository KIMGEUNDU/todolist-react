import { create } from 'zustand';

export const useDoneEdit = create<DoneEditType>((set) => ({
  selected: '',
  setSelected: (selected) => set({ selected }),
  sort: false,
  setSort: (sort) => set({ sort }),
  edit: false,
  setEdit: (edit) => set({ edit }),
  data: [],
  setData: (data) => set({ data }),
  empty: false,
  setEmpty: (empty) => set({ empty })
}));