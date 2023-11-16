import { useDoneEdit } from '@/store/DoneEdit';
import { useTodoList } from '@/store/TodoList';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const ListItem = ({ _id, updatedAt, title, done }: TodoListMain) => {
  const [isDone, setIsDone] = useState(false);
  const { patchTodo } = useTodoList()
  const { edit, setEdit } = useDoneEdit();

  const handleCheck = () => {
    setIsDone(!isDone);

    setEdit(!edit)

    patchTodo(`${_id}`, {
      done: !isDone,
    });
  };

  useEffect(() => {
    setIsDone(done);
  }, [done]);
  
  return (
    <>
      <li className="list-item__container">
        <input
          className="list-item__check"
          type="checkbox"
          id={String(_id)}
          checked={isDone}
          onChange={handleCheck}
        />
        <Link to={`info/${_id}`} className={`list-item ${isDone ? 'done' : ''}`}>
          <label className="list-item__title">{title}</label>
          <p className="list-item__date">{updatedAt.slice(0, 11)}</p>
        </Link>
      </li>
    </>
  );
};
