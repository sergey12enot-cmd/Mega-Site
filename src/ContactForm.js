import React, { useState } from 'react';

const inputClass = (hasError) =>
  [
    'w-full rounded-lg border px-3 py-2.5 text-base outline-none sm:text-sm',
    'focus:border-brand',
    hasError ? 'border-red-600' : 'border-[#ccc]',
  ].join(' ');

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
      <p className="py-5 text-center text-base text-[#2a8a2a]">
        Твоя заявка принята, бедный тестировщик
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="mb-1.5 block text-sm text-[#444]">
          Имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass(nameError)}
        />
        <div className={`mt-1 text-xs text-red-600 ${nameError ? 'block' : 'hidden'}`}>
          Введи имя, бака тестировщик
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="mb-1.5 block text-sm text-[#444]">
          Почта
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass(emailError)}
        />
        <div className={`mt-1 text-xs text-red-600 ${emailError ? 'block' : 'hidden'}`}>
          Введи нормальный email, бака тестировщик
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="mb-1.5 block text-sm text-[#444]">
          Супер Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass(false)} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-[20px] bg-brand px-5 py-3 text-base text-white"
      >
        Отправить
      </button>
    </form>
  );
}

export default ContactForm;
