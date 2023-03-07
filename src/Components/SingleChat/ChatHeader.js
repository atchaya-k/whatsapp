import React ,{useEffect} from 'react';
import { Row,Col } from 'antd';
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass ,faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';

const ChatHeader = () => {
  const posts = useSelector((state) => state.singleChatName);
return(
        <Row className='main-header'>
        <Col sm={2} md={2} lg={2} xl={2}>
          <div className='avatar'><span className={posts[0].status == "online" && 'dot'}></span></div>
        </Col>
        <Col sm={19} md={19} lg={19} xl={19}>
           <div className='chat-name'>{posts[0].name}</div>
          <div className='chat-msg'>{posts[0].status}</div>
         </Col>
         <Col className="header-icon-top" sm={3} md={3} lg={3} xl={3}>
               <FontAwesomeIcon className='ml-2 header-icon' icon={faMagnifyingGlass}/>
               <FontAwesomeIcon  className='ml-2 header-icon'icon={faEllipsisVertical}/>
          </Col>
      </Row>
)
}

export default ChatHeader;