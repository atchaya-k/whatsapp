import React from 'react';
import { Row,Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersLine,faRotate,faCommentDots ,faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';

const MainHead = () => (
    <Row className='main-header'>
        <Col sm={4} md={4} lg={4} xl={4}>
          <div className='avatar'></div>
        </Col>
        <Col className='header-icon-top' sm={10} md={10} lg={10} xl={10} offset={10}>
            <FontAwesomeIcon className='header-icon' icon={faUsersLine}/>
            <FontAwesomeIcon className='ml-2 header-icon' icon={faRotate}/>
            <FontAwesomeIcon className='ml-2 header-icon' icon={faCommentDots}/>
            <FontAwesomeIcon  className='ml-2 header-icon'icon={faEllipsisVertical}/>
        </Col>
    </Row>
  );
  
  export default MainHead;