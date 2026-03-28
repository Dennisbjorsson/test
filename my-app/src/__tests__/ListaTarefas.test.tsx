import { render, screen } from '@testing-library/react';
import ListaTarefa from '@/app/component/ListaTarefas';

test('Testar renderização da página com tarefas', () => {
  const tarefas = [
    { id: 1, titulo: 'Estudar ', concluida: false },
    { id: 2, titulo: 'Musculação', concluida: false },
  ];

  render(<ListaTarefa tarefas={tarefas}/>);

  expect(screen.getByText('Estudar')).toBeInTheDocument();
  expect(screen.getByText('Musculação')).toBeInTheDocument();
});
