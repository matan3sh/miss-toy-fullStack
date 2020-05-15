const initialState = {
  chats: [],
};

export default function ChatReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };
    default:
      return state;
  }
}
