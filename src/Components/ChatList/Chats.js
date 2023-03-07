import React,{useState,useEffect} from 'react';
import { Row,Col } from 'antd';
import {useDispatch,useSelector} from 'react-redux'
import {getChatList,getSingleChatName,getSingleConvo} from '../../action/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faCheckDouble} from '@fortawesome/free-solid-svg-icons';


const Send=({message})=>(
  <span className='ml-1'><FontAwesomeIcon icon={faCheck}/> {message}</span>
)
const Received=({message})=>(
  <span className='ml-1'><FontAwesomeIcon className='received-msg' icon={faCheckDouble}/> {message}</span>
)
const Read=({message})=>(
  <span className='ml-1'><FontAwesomeIcon icon={faCheckDouble}/> {message}</span>
)
const Chats = () =>{
  const [newchat,setNewchat]=useState(null)
  const posts = useSelector(state => state.chatlist);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getChatList)
  });
  const showChat=(val)=>{
    setNewchat(val)
    dispatch(getSingleChatName(val,posts))
    dispatch(getSingleConvo(val))
  }
  return(
    posts.map((val,ind)=>(  
      <><Row className={newchat == val.id ? 'selectedchat cursor-pointer' : 'cursor-pointer'} key={val.id} onClick={()=>showChat(val.id)}>
         <Col sm={4} md={4} lg={4} xl={4}>
           <div className='avatar'><span className={val.status == "online" && 'dot'}></span></div>
         </Col>
         <Col sm={16} md={16} lg={16} xl={16}>
            <div className='chat-name'>{val.name}</div>
            <div className='chat-msg'>{val.type == "send" ? <Send message={val.message}/>
            :val.type == "read" ? <Read message={val.message}/> 
            : <Received message={val.message}/>}</div>
         </Col>
         <Col sm={4} md={4} lg={4} xl={4}>
           <div className='chat-date'>{val.date}</div> 
           {val.id == 1 && <div className='notification'><span>1</span></div>}
         </Col>
         </Row>
         <hr className='linebreak'/>
         </>
   ))
  )
  
};
  
  export default Chats;
