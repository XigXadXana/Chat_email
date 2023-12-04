import { useState } from 'react';

export default function Chat({contact, message, dispatch}) {

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'和 ' + contact.name + ' 聊天'}
        onChange={(e) => {
          dispatch(
            {
              type: 'edited_message',
              message: e.target.value
            }
          );// TODO: 派发 edited_message
          // (从 e.target.value 获取输入框的值)
        }}
      />
      <br />
      <button onClick={() =>{alert(contact.email + message);
        dispatch({
          type: 'edited_message',
          message: ''
        });
         }}>发送到 {contact.email}</button>
    </section>
  );
}
