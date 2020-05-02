import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../redux/dialogsReducer';



const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageText = props.dialogsPage.newMessageText;

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  let onMessageChange = (event) => {
    let text = event.target.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}
        <div>
          <textarea onChange={onMessageChange} value={newMessageText}
            placeholder='Enter your message...'></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;