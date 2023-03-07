
export default function (state =[], action = {}) {
    switch (action.type) {
        case 'getSingleChatName':
          state = action.payload.lists.filter((list) => list.id == action.payload.id)
          return state;
        default:
            return state;
    }
}