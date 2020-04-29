import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 5 },
      { id: 2, message: "It's my first post!", likesCount: 10 },
    ],
    newPostText: 'My value'
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
    ]
  },
  sidebar: {}
};

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
