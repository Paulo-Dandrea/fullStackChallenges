import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

// test('testando se, se o email nao foi enviado, não aparece nada', () => {
//   const EMAIL_USER = 'emailerrado';
//   const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
//   const isValid = getByText('Email Valido');
//   const isNotValid = getByText('Email Inválido');
//   expect(isValid).not.toBeInTheDocument();
//   expect(isNotValid).not.toBeInTheDocument();
// })