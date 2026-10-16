import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Реальный POST-запрос к бесплатному тестовому API
    fetch('https://typicode.com', {
      method: 'POST',
      body: JSON.stringify({
        title: formData.name,
        body: formData.message,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setIsSending(false);
        alert(`Успешно отправлено через API!\nОтвет сервера (ID): ${json.id}\nСпасибо, ${formData.name}!`);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setIsSending(false);
        alert('Ошибка при отправке через API');
        console.error(error);
      });
  };

  return (
    <div className="contact-container">
      <h1 className="page-title">Связаться с нами (Отправка в API)</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ваше имя</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Электронная почта</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Сообщение</label>
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={isSending}>
          {isSending ? 'Отправка...' : 'Отправить через POST API'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
