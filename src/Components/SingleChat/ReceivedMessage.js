import React from 'react';
import { Row,Col } from 'antd';

const ReceivedMessage = ({message,date}) => {
    
return(
<>
<Row className='direct-rtl'>
       <Col sm={1} md={1} lg={1} xl={1}>
          <div className='avatar-2'></div>
        </Col>
        <Col className="send-msg" sm={19} md={19} lg={19} xl={19}>
           <div className='receive-cell'>
          {message} 
          <div  className='time'>
            {date}
            </div> 
         </div>
        </Col>
        
</Row>
</>
)
}

export default ReceivedMessage;