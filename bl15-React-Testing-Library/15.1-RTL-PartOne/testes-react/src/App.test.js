// modifique o import abaixo
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';
// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail.textContent).toBe('Valor: ');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail.value).toBe('');
  expect(textEmail.textContent).toBe(`Valor: ${EMAIL_USER}`);
});