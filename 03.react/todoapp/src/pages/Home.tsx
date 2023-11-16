import SearchBox from '@/component/SearchBox';
import { CategoryMenu, MainList } from '@/component/index.tsx';
import Header from '@/layout/Header';
import { useNavigate } from 'react-router-dom';
import 'styles/Home.css';

export default function Home() {
  const navigate = useNavigate();


  return (
    <>
      <div id="page">
        <div id="content">
          <Header />
          <SearchBox />
          <CategoryMenu/>
          <MainList />
          <button
            className="enrollment"
            onClick={() => navigate('/regist')}
          />
        </div>
      </div>
    </>
  );
}
