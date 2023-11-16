import { ListItem } from '@/component';
import { useTodoList } from '@/store/TodoList';
import { useEffect, useState } from 'react';

export const MainList = ({ selected }: { selected: string }) => {
  const [list, setList] = useState([]);
  const { getAxios } = useTodoList()

  //API
  const todo = selected === '📝 Todo';
  const done = selected === '✅ Done';

  useEffect(() => {
    const todoList = async () => {
      const response = await getAxios();
      setList(response?.data.items)
    };

    todoList()
  }, [getAxios]);

  return (
    <>
      <ul className="list-container">
        {list &&
          !todo &&
          !done &&
          list
            .sort(
              (a: TodoListMain, b: TodoListMain) =>
                +new Date(b.updatedAt) - +new Date(a.updatedAt)
            )
            .map((item: TodoListMain) => (
              <ListItem
                key={item._id}
                _id={item._id}
                title={item.title}
                updatedAt={item.updatedAt}
                done={item.done}
              />
            ))}
        {list &&
          todo &&
          list
            .sort(
              (a: TodoListMain, b: TodoListMain) =>
                +new Date(b.updatedAt) - +new Date(a.updatedAt)
            )
            .filter((item: TodoListMain) => !item.done)
            .map((item: TodoListMain) => (
              <ListItem
                key={item._id}
                _id={item._id}
                title={item.title}
                updatedAt={item.updatedAt}
                done={item.done}
              />
            ))}
        {list &&
          done &&
          list
            .sort(
              (a: TodoListMain, b: TodoListMain) =>
                +new Date(b.updatedAt) - +new Date(a.updatedAt)
            )
            .filter((item: TodoListMain) => item.done)
            .map((item: TodoListMain) => (
              <ListItem
                key={item._id}
                _id={item._id}
                title={item.title}
                updatedAt={item.updatedAt}
                done={item.done}
              />
            ))}
      </ul>
    </>
  );
};
