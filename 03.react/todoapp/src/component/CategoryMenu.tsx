import { useDoneEdit } from '@/store/DoneEdit';
import { useState } from 'react';

export const CategoryMenu = () => {
  const [active, setActive] = useState('');
  const {sort, setSort, setSelected} = useDoneEdit()

  const filters = ['📋 All', '📝 Todo', '✅ Done', sort ? '↑ Sort' : '↓ Sort'];

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const current = e.currentTarget.textContent || '';

    if(current === '↑ Sort' || current === '↓ Sort'){
      setSort(!sort)
    }
      setSelected(current);
      setActive(current);
  };
  return (
    <>
      <ul className="category-list">
        {filters.map((li) => (
          <li
            key={li}
            className={`category-item ${li === active ? 'active' : ''}`}
            onClick={handleClick}
          >
            {li}
          </li>
        ))}
      </ul>
    </>
  );
};
