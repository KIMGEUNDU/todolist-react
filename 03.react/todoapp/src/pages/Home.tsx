import { CategoryMenu, MainList } from '@/component/index.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'styles/Home.css';
export default function Home() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>('');


  return (
    <>
      <div id="page">
        <div id="content">
          <CategoryMenu selector={setSelected} />
          <MainList selected={selected} />
          <button
            className="enrollment"
            onClick={() => navigate('/regist')}
          />
        </div>
      </div>
    </>
  );
}
