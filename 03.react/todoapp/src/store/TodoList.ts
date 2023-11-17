import { create } from 'zustand';
import defaultInstance from '@/axios';

export const useTodoList = create<TodoListType>(() => ({
  async getAxios() {
    const response = await defaultInstance.get('/todolist');
    return response?.data.items;
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