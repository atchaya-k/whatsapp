import React from 'react';
import {useSelector} from 'react-redux'
import ChatHeader from './ChatHeader';
import NewMessage from './NewMessage';
import ReceivedMessage from './ReceivedMessage';
import SendMessage from './SendMessage';

const SingleChat = () => {
    const posts = useSelector(state => state.singleConvo);
return(
<>
<ChatHeader/>
{posts[0].conversationData.map((val,ind)=>(
  val.type == "received" ? <SendMessage message={val.message} date={val.sentAt}/> : 
  <ReceivedMessage message={val.message} date={val.sentAt}/>
))
}
<NewMessage id={posts[0].id}/>
</>
)
}

export default SingleChat;
