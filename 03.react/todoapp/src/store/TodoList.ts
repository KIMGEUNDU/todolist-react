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
  async postTodo(obj) {
    await defaultInstance.post('/todolist', obj);
  },
  async deleteTodo(_id) {
    await defaultInstance.delete(`/todolist/${_id}`);
  },
  async patchTodo(_id, obj) {
    await defaultInstance.patch(`/todolist/${_id}`, obj);
  },
}));