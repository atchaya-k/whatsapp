import React from 'react';
import { Row,Col } from 'antd';
import {useSelector} from 'react-redux'
import './App.css';
import ChatList from './Components/ChatList/ChatList';
import SingleChat from './Components/SingleChat/SingleChat';

const App = () => {
  const posts = useSelector((state) => state.singleChatName);
  return(
  <Row>
    <Col className='right-border' xs={8} md={8} lg={8} xl={8}>
      <ChatList/>
    </Col>
    <Col className='web-bg' xs={16} md={16} lg={16} xl={16}>
    {posts.length != 0 ? <SingleChat/> :null}
    </Col>
  </Row>
  )
};

export default App;
