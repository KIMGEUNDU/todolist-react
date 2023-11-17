import BackArrow from '@/component/BackArrow';
import Button from '@/component/Button';
import TextInput from '@/component/TextInput';
import Header from '@/layout/Header';
import { useTodoList } from '@/store/TodoList';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import 'styles/Detail.css';
import 'styles/Regist.css';

export default function Regist() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { postTodo } = useTodoList()
  const navigate = useNavigate()

  function handleTitle(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') {
      setBtnDisabled(true);
      setTitle('');
      return;
    }

    if (e.target.value !== '') {
      setTitle(e.target.value);
    }

    if (content !== '') {
      setBtnDisabled(false);
    }
  }

  function handleContent(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value === '') {
      setBtnDisabled(true);
      setContent('');
      return;
    }

    if (e.target.value !== '') {
      setContent(e.target.value);
    }

    if (title !== '') {
      setBtnDisabled(false);
    }
  }

function handleRegist() {

    const addTodo = {
      title, content, done: false
    }

    postTodo(addTodo);

    toast('등록되었습니다.', {
      icon: '☺️',
    });
    
    setTimeout(()=>{
      navigate('/');
    }, 300)
  }

  return (
    <div className='page'>
      <Header />
      <main className="registMain">
        <section className="registSection">
          <BackArrow />
          <TextInput  inputId="registTitle"
            areaId="registContent"
            inputClassName="titleRegist"
            areaClassName="contentRegist"
            inputValue={title}
            textValue={content}
            inputOnChange={handleTitle}
            textOnChange={handleContent}
            inputHolder="할 일을 입력해주세요."
            textHolder="내용을 입력해주세요."
            required={true}
          />
          <article className="btnWrap">
            <Button
              id="registerBtn"
              disabled={btnDisabled}
              onClick={handleRegist}
            >
              등록하기
            </Button>
          </article>
        </section>
      </main>
    </div>
  );
}
