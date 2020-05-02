import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 5 },
        { id: 2, message: "It's my first post!", likesCount: 10 },
      ],
      newPostText: ''
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    
    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;