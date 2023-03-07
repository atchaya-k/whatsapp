import React from 'react';
import MainHead from './MainHead';
import SearchBar from './SearchBar';
import Chats from './Chats';

const ChatList = () => (
    <>
    <MainHead/>
    <SearchBar/>
    <hr className='linebreak'/>
    <div>
      <Chats/>
    </div>
    </>
  );
  
  export default ChatList;