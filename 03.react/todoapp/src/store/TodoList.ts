import { create } from 'zustand';
import defaultInstance from '@/axios';

interface TodoListType {
  getAxios: () => Promise<any>;
  getTodo: (id: string) => Promise<any>;
  postTodo: (obj: object) => void;
  deleteTodo: (id: string) => void;
  patchTodo: (id: string, obj: object) => void;
}

export const useTodoList = create<TodoListType>(() => ({
  getAxios() {
    const response = defaultInstance.get('/todolist');
    return response;
  },
  async getTodo(_id) {
    const response = await defaultInstance.get(`/todolist/${_id}`);
    return response?.data.item;
  },
  postTodo(obj) {
    defaultInstance.post('/todolist', obj);
  },
  deleteTodo(_id) {
    defaultInstance.delete(`/todolist/${_id}`);
  },
  patchTodo(_id, obj) {
    defaultInstance.patch(`/todolist/${_id}`, obj);
  },
}));