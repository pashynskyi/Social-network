const ADD_MESSAGE = 'ADD-MESSAGE';

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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.newMessageText
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });

export default dialogsReducer;