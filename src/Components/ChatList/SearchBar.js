import React from 'react';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => (
    <div className='search-outer'>
      <Input
      className='search-box'
      placeholder=" Start a new chat"
      prefix={<FontAwesomeIcon icon={faMagnifyingGlass}/>}
    />
    </div>
  );
  
  export default SearchBar;