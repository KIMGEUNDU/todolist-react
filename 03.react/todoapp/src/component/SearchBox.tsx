
import { ChangeEvent, FormEvent, useState } from 'react';
import debounce from './../utils/debounce';

function SearchBox() {
  const [search, setSearch] = useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const debounceSearch = debounce((e: ChangeEvent<HTMLInputElement>)=> handleSearch(e))

  const handleSearchBtn = (e: FormEvent) =>{
    e.preventDefault()

    console.log(search);
  }


  return (
    <form className="search-item__container" onSubmit={handleSearchBtn}>
      <input className="search-item__input" type="text" placeholder='검색어를 입력하세요' onChange={debounceSearch} required/>
      <button type="submit" className="search-item__button">검색</button>
    </form>
  )
}

export default SearchBox