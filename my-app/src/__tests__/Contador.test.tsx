import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';

test('conta tarefas corretamente', () => {
  const tarefas = [
    { id: 1, titulo: 'A', concluida: false },
    { id: 2, titulo: 'B', concluida: false },
    { id: 3, titulo: 'C', concluida: false },
  ];

  const { result } = renderHook(() => useContadorDeTarefas(tarefas));

  expect(result.current).toBe(3);
});
