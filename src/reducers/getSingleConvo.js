
export default function (state =[], action = {}) {
    switch (action.type) {
        case 'getSingleConvo':
          state = action.payload.lists.filter((list) => list.id == action.payload.id)
          return state;
        case 'newSingleConvo':
            state = action.payload.lists.map((list)=>{
              if(list.id == action.payload.id ){
                const data=[...list.conversationData,action.payload.newmsg]
               return Object.assign({ 'id': list.id,'name':list.name,'status':list.status,'conversationData': data })
              }
              else{
                return list
              }
            }
            )
            return state;
        default:
            return state;
    }
}