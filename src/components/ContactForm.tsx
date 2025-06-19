import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('送信中...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setStatus('送信完了！');
        setEmail('');
        setMessage('');
      } else {
        setStatus('送信に失敗しました');
      }
    } catch (err) {
      setStatus('送信に失敗しました');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="あなたのメールアドレス"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="w-full border rounded px-3 py-2"
      />
      <textarea
        placeholder="お問い合わせ内容"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        className="w-full border rounded px-3 py-2 min-h-[120px]"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">問い合わせを送信</button>
      <div>{status}</div>
    </form>
  );
};

export default ContactForm; 