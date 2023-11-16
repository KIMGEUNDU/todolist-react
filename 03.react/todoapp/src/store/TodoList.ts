import { create } from 'zustand';
import defaultInstance from '@/axios';



export const useTodoList = create(() => ({
  async getAxios() {
    const response = await defaultInstance.get('/todolist');
    return response
  },
  async getTodo(_id: number) {
    const response = await defaultInstance.get(`/todolist/${_id}`);
    return response
  },
  async postTodo(obj: object): Promise<void> {
    await defaultInstance.post('/todolist', obj)
  },
  async deleteTodo(_id: number): Promise<void> {
    await defaultInstance.delete(`/todolist/${_id}`)
  },
}));
