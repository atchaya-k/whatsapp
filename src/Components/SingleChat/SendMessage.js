import { Row,Col } from 'antd';
import React from 'react';

const SendMessage = ({message,date}) => {
    
return(
<>
<Row>
       <Col sm={1} md={1} lg={1} xl={1}>
          <div className='avatar-2'></div>
        </Col>
        <Col className="send-msg" sm={19} md={19} lg={19} xl={19}>
           <div className='send-cell'>
          {message} 
          <div className='time'>{date}</div>
         </div>
        
        </Col>
</Row>
</>
)
}

export default SendMessage;