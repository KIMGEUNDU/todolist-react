import { useDoneEdit } from '@/store/DoneEdit';
import { useState } from 'react';

export const CategoryMenu = () => {
  const [active, setActive] = useState('');
  const {sort, setSort, setSelected, data, setData} = useDoneEdit()

  const filters = ['📋 All', '📝 Todo', '✅ Done', sort ? '↑ Sort' : '↓ Sort'];

  const handleClick: React.MouseEventHandler<HTMLLIElement> = async(e) => {
    const current = e.currentTarget.textContent || '';
    setData([])
  
    if (current === '↑ Sort' || current === '↓ Sort') {
      setSort(!sort);
      setSelected(current);
      setActive(current);
    } else {
      setSelected(current);
      setActive(current);
    }

    if(data.length > 0){
      setSelected('')
      setActive('')
    }
  };
  
  return (
    <>
      <ul className="category-list">
        {filters.map((li) => (
          <li
            key={li}
            className={`category-item ${li === active ? 'active' : ''} ${active.includes('Sort') && li.includes('Sort')  ? 'active' : ''}`}
            onClick={handleClick}
          >
            {li}
          </li>
        ))}
      </ul>
    </>
  );
};
