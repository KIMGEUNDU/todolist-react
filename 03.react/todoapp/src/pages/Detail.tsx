import defaultInstance from '@/axios';
import BackArrow from '@/component/BackArrow';
import Button from '@/component/Button';
import TextInput from '@/component/TextInput';
import { useTodoList } from '@/store/TodoList';
import Selector from '@/utils/Selector';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import 'styles/Detail.css';

const initialData = {
  title: '',
  done: false,
  content: '',
  createdAt: '',
  updateAt: '',
};

export default function Detail() {
  const { _id } = useParams();
  const { getTodo, patchTodo } = useTodoList()
  const [title, setTitle] = useState(initialData.title);
  const [content, setContent] = useState(initialData.content);
  const [done, setDone] = useState(initialData.done);
  const [date, setDate] = useState(initialData.updateAt);
  const [originalTitle, setOriginalTitle] = useState('');
  const [originalContent, setOriginalContent] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);



  function checkModifyTitle(e: ChangeEvent<HTMLInputElement>) {
    const content = Selector('#content')

    if (originalTitle === e.target.value && content === originalContent) {
      setBtnDisabled(true);
    } else if (e.target.value !== undefined && title !== e.target.value) {
      setTitle(e.target.value);
      setBtnDisabled(false);
    }
  }

  function checkModifyContent(e: ChangeEvent<HTMLTextAreaElement>) {
    const title = Selector('#title')

    if (originalContent === e.target.value && title === originalTitle) {
      setBtnDisabled(true);
    } else if (e.target.value !== undefined && content !== e.target.value) {
      setContent(e.target.value);
      setBtnDisabled(false);
    }
  }

  const editTodo = {
    title,
    content
  }

  async function handleModifyBtn() {
    patchTodo(`${_id}`, editTodo)
    alert('수정되었습니다.');
    location.href = '/';
  }

  async function handleDeleteBtn() {
    const confirmDelete = confirm('삭제하시겠습니까?');
    if (confirmDelete) {
      await defaultInstance.delete(`/todolist/${_id}`);
      alert('삭제되었습니다.');
      location.href = '/';
    }
  }

  const isChecked = async () => {
    setDone(!done);
    await defaultInstance.patch(`/todolist/${_id}`, {
      done: !done,
    });
  };

  useEffect(() => {
    const TodoInfo = async function () {
      const { title, done, content, updatedAt } = await getTodo(`${_id}`);

      setTitle(title);
      setOriginalTitle(title);
      setContent(content);
      setOriginalContent(content);
      setDate(updatedAt);
      setDone(done);
    };
    TodoInfo();
  }, []);

  return (
    <>
      <main className="detailMain">
        <section className="detailSection">
          <BackArrow />
          <article className="dateCheck">
            <p className="updatedDate">{date.split(' ')[0]}</p>
            <input
              type="checkbox"
              onChange={() => isChecked()}
              checked={done}
              id="toggle"
              hidden
            />
            <label htmlFor="toggle" className="toggleSwitch">
              <span className="toggleButton"></span>
            </label>
          </article>
          <TextInput
          inputId="title"
          areaId="content"
          inputClassName="titleInput"
          areaClassName="contentInput"
          inputValue={title}
          textValue={content}
          inputOnChange={checkModifyTitle}
          textOnChange={checkModifyContent}/>
          <article className="btnWrap">
            <Button
              id="change"
              disabled={btnDisabled}
              onClick={handleModifyBtn}
            >
              수정하기
            </Button>
            <Button id="remove" onClick={handleDeleteBtn}>
              삭제하기
            </Button>
          </article>
        </section>
      </main>
    </>
  );
}
