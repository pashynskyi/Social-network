const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    { id: 1, name: "Artem" },
    { id: 2, name: "Bogdan" },
    { id: 3, name: "Vadim" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Kate" },
    { id: 6, name: "Pasha" },
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "What's up?" },
    { id: 3, message: "Where are you from?" },
    { id: 4, message: "Bye!" },
    { id: 5, message: "Nice" },
  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText
      };
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage]
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
};

export default dialogsReducer;