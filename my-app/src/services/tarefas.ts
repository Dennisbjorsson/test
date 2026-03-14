import { Tarefa } from '@/../src/types/tarefas';

const tarefas: Tarefa[] = [
  { id: 1, titulo: 'Estudar', concluida: false },
  { id: 2, titulo: 'Musculação', concluida: false },
];

export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefas);
}
