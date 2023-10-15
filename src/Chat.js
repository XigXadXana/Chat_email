export default function Chat({ contact, content,onChange }) {
  return (
    <section className="chat">
      <textarea
        value={content}
        placeholder={'跟 ' + contact.name + ' 聊一聊'}
        onChange={onChange}
      />
      <br />
      <button>发送到 {contact.email}</button>
    </section>
  );
}
