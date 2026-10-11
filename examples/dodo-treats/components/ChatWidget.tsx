'use client';
import { useState } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState<string[]>(['Hi! How can I help you with your order today?']);
  return (
    <div className="chat">
      {messages.map((m, i) => <p key={i}>{m}</p>)}
      <input onKeyDown={async (e) => {
        if (e.key !== 'Enter') return;
        const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: (e.target as HTMLInputElement).value }) });
        const data = await res.json();
        setMessages((m) => [...m, data.reply]);
      }} />
    </div>
  );
}
