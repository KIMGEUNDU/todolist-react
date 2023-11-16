import defaultInstance from '@/axios';
import BackArrow from '@/component/BackArrow';
import Button from '@/component/Button';
import TextInput from '@/component/TextInput';
import { useTodoList } from '@/store/TodoList';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router';
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
  const [btnDisabled, setBtnDisabled] = useState(true);
  const originalTitle = useRef('')
  const originalContent = useRef('')
  const navigate = useNavigate()



  function checkModifyTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);

    if (originalTitle.current === e.target.value && content === originalContent.current || e.target.value === '') {
      setBtnDisabled(true);
    } else if (e.target.value !== '' && originalTitle.current !== e.target.value) {
      setBtnDisabled(false);
    }
  }

  function checkModifyContent(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value);

    if (originalContent.current === e.target.value && title === originalTitle.current || e.target.value === '') {
      setBtnDisabled(true);
    } else if (e.target.value !== '' && originalContent.current !== e.target.value) {
      setBtnDisabled(false);
    }
  }

  async function handleModifyBtn() {
    const editTodo = {
      title,
      content
    }

    patchTodo(`${_id}`, editTodo)

    toast('수정되었습니다.', {
      icon: '✍🏻',
    });

    navigate('/');
  }

  async function handleDeleteBtn() {
    const confirmDelete = confirm('삭제하시겠습니까?');

    if (confirmDelete) {
      await defaultInstance.delete(`/todolist/${_id}`);

      toast('삭제되었습니다.', {
				icon: '🗑️',
			});

      navigate('/');
    }
  }

  const isChecked = async () => {
    setDone(!done);
    
    patchTodo(`${_id}`, {
      done: !done,
    });
  };

  useEffect(() => {
    const TodoInfo = async function () {
      const { title, done, content, updatedAt } = await getTodo(`${_id}`);

      setTitle(title);
      setContent(content);
      setDate(updatedAt);
      setDone(done);
      originalTitle.current = title;
      originalContent.current = content;
    };
    TodoInfo();
  }, [_id, getTodo]);

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
