import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testando funcionalidade de apagar item selecionado', () => {
  test('Necessário ter um botão, com o texto Remover, e ele precisa estar desabilitado caso não exista nenhum item selecionado', () => {
    const { getByTestId } = render(<App />);
    const btnRemove = getByTestId('id-remove');
    expect(btnRemove).toBeInTheDocument();
    expect(btnRemove.value).toBe('Remover');
    expect(btnRemove.disabled).toBe(true);
  });

  test('Testando a seleção de elemento', () => {
    const { getByLabelText, getByText, queryByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');
    const btnRemove = getByText('Remover');
    fireEvent.change(inputTask, { target: { value: 'Exercitar' } }) // + 1 TASK
    fireEvent.click(btnAdd);// 
    fireEvent.change(inputTask, { target: { value: 'Estudar' } }) // + 2 TASK
    fireEvent.click(btnAdd);
    
    const selectTask = getByText('Exercitar');
    expect(selectTask).toBeInTheDocument();
    fireEvent.click(selectTask);
    expect(btnRemove.disabled).toBe(false);
    fireEvent.click(btnRemove); 
    expect(queryByText('Exercitar')).not.toBeInTheDocument();

    const selectTask2 = getByText('Estudar');
    expect(selectTask2).toBeInTheDocument();
    fireEvent.click(selectTask2);
    expect(btnRemove.disabled).toBe(false);
    fireEvent.click(btnRemove); 

    expect(btnRemove.disabled).toBe(true);

    expect(queryByText('Exercitar')).not.toBeInTheDocument();
    expect(queryByText('Estudar')).not.toBeInTheDocument();
  })
});

// Exercício 3
// Diferente dos outros, os testes já estão prontos, sendo necessário criar apenas as funcionalidades que eles testam.

// Adicionar funcionalidade de selecionar uma task.
// Adicionar botão para apagar a task selecionada.
// Observe bem como os teste estão escritos, todos devem passar quando terminar de implementar a funcionalidade.