
import { useDoneEdit } from '@/store/DoneEdit';
import { useTodoList } from '@/store/TodoList';
import { ChangeEvent, FormEvent, useState } from 'react';
import debounce from './../utils/debounce';

function SearchBox() {
  const [search, setSearch] = useState('')
  const { getAxios } = useTodoList()
  const { setData, setEmpty } = useDoneEdit()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const debounceSearch = debounce((e)=> handleSearch(e))

  const handleSearchBtn = async(e: FormEvent) =>{
    e.preventDefault()

    const response = await getAxios()
    const result = response.filter((v)=> v.title.includes(search))
    if(result.length > 0){
      setData(result);
      setEmpty(false)
    }else{
      setEmpty(true)
    }
  }



  return (
    <form className="search-item__container" onSubmit={handleSearchBtn}>
      <input className="search-item__input" type="text" placeholder='검색어를 입력하세요' onChange={debounceSearch}/>
      <button type="submit" className="search-item__button"></button>
    </form>
  )
}

export default SearchBox