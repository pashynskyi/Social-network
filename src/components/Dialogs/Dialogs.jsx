import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Bogdan'},
        {id: 3, name: 'Vadim'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Kate'},
        {id: 6, name: 'Pasha'}
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: "What's up?"},
        {id: 3, message: 'Where are you from?'},
        {id: 4, message: 'Bye!'},
        {id: 5, message: 'Nice'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
               {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;