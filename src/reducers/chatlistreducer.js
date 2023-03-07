
import ChatsList from '../Components/ChatData/ChatsList'
export default function (state =ChatsList, action = {}) {
    switch (action.type) {
        case 'getChatList':
            state=ChatsList
            return state;
        case 'updateChat': 
           state = action.payload.lists.map((list,ind)=>{
            if(list.id == action.payload.id){
                var newlist ={ id:list.id,
                    name:list.name,
                    message:action.payload.newmsg,
                    date:"now",
                    status:list.status,
                    type:"send"
                }
                return newlist
            }
            else{
                return list
            }
           })
           return state;
        default:
            return state;
    }
}