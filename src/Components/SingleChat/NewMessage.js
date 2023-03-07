import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {newSingleConvo,updateChat,getSingleConvo,getChatList} from '../../action/index'
import { Input, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const NewMessage = ({id}) => {
 const [newchat,setNewchat]=useState(null)
 const dispatch=useDispatch()
 const  sendMessage=()=>{
  dispatch(newSingleConvo(id,newchat))
  dispatch(updateChat(id,newchat))
  setNewchat(null)
}
return(
    <Row className='new-msg'>
    <div className='search-outer'>
      <Input
      value={newchat}
      className='search-box new-msg-box'
      placeholder=" Start a new chat"
      suffix={<FontAwesomeIcon className='cursor-pointer' icon={faPaperPlane}       
      onClick={sendMessage}/>}
      onChange={(e)=>setNewchat(e.target.value)}
      onPressEnter={sendMessage}
    />
    </div>
    </Row>
)
}

export default NewMessage;