"use client"
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

interface WhatsappInputProps {
  triggerNextStep: (value: string) => void;
}

const WhatsappInput: React.FC<WhatsappInputProps> = ({ triggerNextStep }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const phoneRegex = /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (phoneRegex.test(e.target.value)) {
      setError('');
    }
  };

  const handleSubmit = () => {
    if (phoneRegex.test(value)) {
      triggerNextStep(value);
    } else {
      setError('Por favor, insira um número de WhatsApp válido no formato (DD)9XXXX-XXXX');
    }
  };

  return (
    <div>
      <InputMask
        mask="(99)99999-9999"
        maskChar="_"
        value={value}
        onChange={handleChange}
        placeholder="(DD)9XXXX-XXXX"
      >
        {(inputProps: any) => <input {...inputProps} type="tel" />}
      </InputMask>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmit} disabled={!phoneRegex.test(value)}>
        Enviar
      </button>
    </div>
  );
};

export default WhatsappInput;