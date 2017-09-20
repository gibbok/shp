import React from 'react'
import BinIcon from '../shared/BinIcon'
import SeparatorVertical from '../shared/SeparatorVertical'
import './Search.css'

const Search = () => {
  return (
    <div className='document__search'>
      <div className='document__search__find'>
        <div>
          <i className='material-icons'>search</i>
        </div>
        <div className='document__search__find__text'>
        Search document ......
       </div>
      </div>
      <div className='document__search__select'>
        <SeparatorVertical
          id={0}
          key={0}
          width={35}
          height={26}
        />
        <div>
          <div className='document__search__select__text'>Select all</div>
        </div>
        <div className='document__search__select__bin'>
          <BinIcon />
        </div>
      </div>
    </div>
  )
}

export default Search
