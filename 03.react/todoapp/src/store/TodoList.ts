import { create } from 'zustand';
import defaultInstance from '@/axios';



export const useTodoList = create(() => ({
  getAxios() {
    const response = defaultInstance.get('/todolist');
    return response
  },
  async getTodo(_id: string) {
    const response = await defaultInstance.get(`/todolist/${_id}`);
    return response?.data.item
  },
  postTodo(obj: object) {
    defaultInstance.post('/todolist', obj)
  },
  deleteTodo(_id: string) {
    defaultInstance.delete(`/todolist/${_id}`)
  },
  patchTodo(_id: string, obj: object) {
    defaultInstance.patch(`/todolist/${_id}`, obj)
  }
}));
