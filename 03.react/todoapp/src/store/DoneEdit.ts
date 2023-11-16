import { create } from 'zustand';

interface DoneEditType {
  selected: string;
  setSelected: (selected: string) => void
  sort: boolean;
  setSort: (sort: boolean) => void;
  edit: boolean;
  setEdit: (edit: boolean) => void;
}

export const useDoneEdit = create<DoneEditType>((set) => ({
  selected: '',
  setSelected: (selected) => set({ selected }),
  sort: false,
  setSort: (sort) => set({ sort }),
  edit: false,
  setEdit: (edit) => set({ edit }),
}));