import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    let isValid = true;

    setNameError(false);
    setEmailError(false);

    if (name.trim() === '') {
      setNameError(true);
      isValid = false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      setEmailError(true);
      isValid = false;
    }

    if (isValid) {
      console.log('Отправлено:', { name, email, message });
      
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <p className="success-text show">Твоя заявка принята, бедный тестировщик</p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Имя</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={nameError ? 'error' : ''}
        />
        <div className={`error-text ${nameError ? 'show' : ''}`}>
          Введи имя, бака тестировщик
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Почта</label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={emailError ? 'error' : ''}
        />
        <div className={`error-text ${emailError ? 'show' : ''}`}>
          Введи нормальный email, бака тестировщик
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Супер Сообщение</label>
        <textarea 
          id="message" 
          name="message" 
          rows="3" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn">Отправить</button>
    </form>
  );
}

export default ContactForm;