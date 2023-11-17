import { ListItem } from '@/component';
import { useDoneEdit } from '@/store/DoneEdit';
import { useTodoList } from '@/store/TodoList';
import { useEffect, useState } from 'react';

export const MainList = () => {
  const { edit, selected, data, empty } = useDoneEdit()
  const { getAxios } = useTodoList()
  const [list, setList] = useState<TodoListMain[]>([]);

  const todo = selected === '📝 Todo';
  const done = selected === '✅ Done';
  const sort = selected === '↑ Sort';
  const sortReversal = selected === '↓ Sort';

  useEffect(() => {
    const todoList = async () => {
      const response = await getAxios();
      setList(response)
    };

    todoList()

  }, [edit, getAxios]);

  useEffect(()=>{
    if(data.length > 0){
      setList(data)
    }
  },[data])

  return (
    <>
      <ul className="list-container">
        {list &&
          !todo &&
          !done &&
          !sort &&
          !sortReversal &&
          data.length === 0 &&
          !empty &&
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
          data &&
          !empty &&
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
          !empty &&
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
          {list &&
          !todo &&
          !done &&
          !sortReversal &&
          sort &&
          !empty &&
          list
            .sort(
              (a: TodoListMain, b: TodoListMain) =>
                +new Date(a.updatedAt) - +new Date(b.updatedAt)
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
          !todo &&
          !done &&
          !sort &&
          sortReversal &&
          !empty &&
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
          !todo &&
          !done &&
          !sort &&
          !sortReversal &&
          data.length > 0 &&
          !empty &&
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
            {empty && <p className="emptyResult">검색 결과가 없습니다 :（</p>}
      </ul>
    </>
  );
};
