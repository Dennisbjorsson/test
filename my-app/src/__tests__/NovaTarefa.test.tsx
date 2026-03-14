import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '@/app/component/NovaTarefa';

test('adicionar nova tarefa ao enviar formulario', () => {
  const mockAdicionar = jest.fn();

  render(<NovaTarefa adicionar={mockAdicionar} />);

  const input = screen.getByPlaceholderText('Digite a tarefa');
  const button = screen.getByText('Adicionar');

  fireEvent.change(input, {
    target: { value: 'Estudar' },
  });

  fireEvent.click(button);

  expect(mockAdicionar).toHaveBeenCalledWith('Estudar');
});
