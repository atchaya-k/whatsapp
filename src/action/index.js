import conversationList from '../Components/ChatData/conversationList'
import ChatsList from '../Components/ChatData/ChatsList'
export function getChatList(value) {
    let type = 'getChatList'
    return function (dispatch) { dispatch({ type,payload:{lists: ChatsList} }) };
}
export const getSingleChatName=(value,lists) =>dispatch => {
   let type='getSingleChatName'
    dispatch({ type ,payload: {id: value,lists:lists}})
}
export function getSingleConvo(value) {
    let type = 'getSingleConvo'
    return function (dispatch) { dispatch({ type ,payload: {id: value,lists:conversationList}}) };
}
export function newSingleConvo(ids,newmsgs) {
   let newmsg= {
   type: 'sent',
    message: newmsgs,
    sentAt: 'Now' }
    let type = 'newSingleConvo'
    return function (dispatch) { dispatch({ type ,payload: {id: ids,
        lists:conversationList,newmsg:newmsg}}) };
}
export function updateChat(id,newmsgs) {
    let type = 'updateChat'
    return function (dispatch) { dispatch({ type ,payload:{lists: ChatsList,id: id,newmsg:newmsgs}}) };
}
