import React, { useState, useEffect } from 'react';

export default function Chat({ contact, onChange }) {
  // 使用localStorage来初始化content状态
  const [content, setContent] = useState(localStorage.getItem('chat_draft_' + contact.id) || '');

  useEffect(() => {
    // 每次content状态更新后，保存到localStorage
    localStorage.setItem('chat_draft_' + contact.id, content);
  }, [content, contact.id]);

  return (
    <section className="chat">
      <textarea
        value={content}
        placeholder={'跟 ' + contact.name + ' 聊一聊'}
        onChange={(e) => {
          setContent(e.target.value);
          onChange(e); // 继续调用传递的onChange处理函数
        }}
      />
      <br />
      <button>发送到 {contact.email}</button>
    </section>
  );
}
